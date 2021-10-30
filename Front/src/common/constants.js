export const HOST = window.location.origin;
export let API = "";

if (process.env.PUBLIC_URL.includes("heroku")) {
  // production server
  API = "";
} else {
  // develop server
  API = `http://localhost:${process.env.PORT || 5000}/api/v1`;
}
