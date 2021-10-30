const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const User = require("../models/user");
const { normalizeErrors } = require("../helpers/mongoose");

const UserCtrl = require("../controllers/user");

router.get("/manage", UserCtrl.authMiddleware, (req, res) => {
  const user = res.locals.user;

  Message.where({ user }).exec((err, foundMessages) => {
    if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });
    return res.json(foundMessages);
  });
});

router.get("/:id/verify-user", UserCtrl.authMiddleware, (req, res) => {
  const user = res.locals.user;

  Message.findById(req.params.id)
    .populate("user")
    .exec((err, foundMessage) => {
      if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

      if (foundMessage.user.id !== user.id)
        return res.status(422).send({ errors: [{ title: "Invalid User!", detail: "You are not message owner!" }] });

      return res.json({ status: "verified" });
    });
});

router.get("/:id", (req, res) => {
  const messageId = req.params.id;

  Message.findById(messageId)
    .populate("user", "username -_id")
    .exec((err, foundMessage) => {
      if (err || !foundMessage) return res.status(422).send({ errors: [{ title: "Message Error!", detail: "Could not find Message!" }] });

      return res.json(foundMessage);
    });
});

router.patch("/:id", UserCtrl.authMiddleware, (req, res) => {
  const messageData = req.body;
  const user = res.locals.user;

  Message.findById(req.params.id)
    .populate("user")
    .exec((err, foundMessage) => {
      if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

      if (foundMessage.user.id !== user.id)
        return res.status(422).send({ errors: [{ title: "Invalid User!", detail: "You are not message owner!" }] });

      foundMessage.set(messageData);
      foundMessage.save((err) => {
        if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

        return res.status(200).send(foundMessage);
      });
    });
});

router.delete("/:id", UserCtrl.authMiddleware, (req, res) => {
  const user = res.locals.user;

  Message.findById(req.params.id)
    .populate("user", "_id")
    .exec((err, foundMessage) => {
      if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

      if (user.id !== foundMessage.user.id)
        return res.status(422).send({ errors: [{ title: "Invalid User!", detail: "You are not message owner!" }] });

      foundMessage.remove((err) => {
        if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

        User.updateOne({ _id: foundMessage.user.id }, { $pull: { messages: foundMessage._id } }, () => {});

        Message.where({ user }).exec((err, foundMessages) => {
          if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });
          return res.json(foundMessages);
        });
      });
    });
});

router.post("", UserCtrl.authMiddleware, (req, res) => {
  const { description } = req.body;
  const user = res.locals.user;

  const message = new Message({ description });
  message.user = user;

  Message.create(message, (err, newMessage) => {
    if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

    User.updateOne({ _id: user.id }, { $push: { messages: newMessage } }, () => {});

    return res.json(newMessage);
  });
});

router.get("", (req, res) => {
  Message.find({})
    .populate("user", "username -_id")
    .exec((err, foundMessages) => {
      if (err) return res.status(422).send({ errors: normalizeErrors(err.errors) });

      return res.json(foundMessages);
    });
});

module.exports = router;
