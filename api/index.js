import superagent from "superagent";

export const host = "https://fitness-planner.alpha.curefit.co";

// export const host =
//   process.env.NODE_ENV === "development"
//     ? "http://192.168.105.37:4000"
//     : "https://fitness-planner-ui.alpha.curefit.co";

export function fetchUserId({ appId, phone }) {
  return superagent
    .post(host + "/user/login")
    .send({ appId, phone })
    .then((res) => res.body);
}

export function getUserActivity(userId) {
  return superagent
    .get(host + `/user/${userId}/activity`)
    .then((res) => res.body);
}

export function getSavedUser() {
  return JSON.parse(window.localStorage.getItem("user"));
}
