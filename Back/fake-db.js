const Message = require("./models/message");
const User = require("./models/user");

const fakeDbData = require("./data.json");

class FakeDb {
  constructor() {
    this.messages = fakeDbData.messages;
    this.users = fakeDbData.users;
  }

  async cleanDb() {
    await User.deleteMany({});
    await Message.deleteMany({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);
    const user2 = new User(this.users[1]);

    this.messages.forEach((message) => {
      const newMessage = new Message(message);
      newMessage.user = user;

      user.messages.push(newMessage);
      newMessage.save();
    });

    user.save();
    user2.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;
