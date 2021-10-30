import axios from "axios";

// configure axios
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers["crossdomain"] = "true";

const POST = async (url, data, customAllowedHeaders = false) => {
  const session = localStorage.getItem("GuestUser");
  const head = customAllowedHeaders || {
    headers: {
      Authorization: `Bearer ${session}`,
    },
  };
  const res = await axios.post(url, data, head);

  return res;
};

const PUT = async (url, data, customAllowedHeaders = false) => {
  const session = localStorage.getItem("GuestUser");
  const head = customAllowedHeaders || {
    headers: {
      Authorization: `Bearer ${session}`,
      "Accept-Language": localStorage.getItem("i18nextLng"),
    },
  };
  const res = await axios.put(url, data, head);

  return res;
};

const PATCH = async (url, data) => {
  const session = localStorage.getItem("GuestUser");
  const head = {
    headers: {
      Authorization: `Bearer ${session}`,
      "Accept-Language": localStorage.getItem("i18nextLng"),
    },
  };
  const res = await axios.patch(url, data, head);

  return res;
};
const DELETE = async (url, data, dataObject) => {
  const session = localStorage.getItem("GuestUser");
  const head = {
    headers: {
      Authorization: `Bearer ${session}`,
      "Accept-Language": localStorage.getItem("i18nextLng"),
    },
  };
  const dataSent = dataObject ? { data: data } : { data: { data: data } };
  const res = await axios.delete(url, {
    ...dataSent,
    ...head,
  });

  return res;
};

const GET = async (url, customAllowedHeaders = false) => {
  const session = localStorage.getItem("GuestUser");
  const head = customAllowedHeaders || {
    headers: {
      Authorization: `Bearer ${session}`,
      "Accept-Language": localStorage.getItem("i18nextLng"),
    },
  };
  const res = await axios.get(url, head);

  return res;
};

const exportedObject = { POST, GET, PUT, DELETE, PATCH };

export default exportedObject;
