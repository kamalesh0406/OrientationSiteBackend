// import { __esModule } from "reactstrap/lib/InputGroupButtonDropdown";
// import { EventEmitter } from "./events";

function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const now = Date.now().valueOf() / 1000;
    // console.log(user.expiry_delta);
    // console.log(now);
    // console.log(user.iat);
    if (user.jwt && user.expiry_delta > now - user.iat) {
      // console.log("yah");
      return true;
    }
  }
  // console.log("noo");

  // localStorage.removeItem("user");
  return false;
}
function logout() {
  localStorage.removeItem("sidebar");
  // this.setState(initial_state);
}

module.exports = {
  isAuthenticated,
  logout
};
