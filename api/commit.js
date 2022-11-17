import superagent from "superagent";
import { getSavedUser, host } from ".";

export function getCommits() {
  return superagent.get(host + "/commits").then((res) => res.body);
}

export function getAllCommits() {
  return superagent.get(host + "/user-commits").then((res) => res.body);
}

export function makeCommitment({ commitId, initial, target, amount }) {
  const userId = getSavedUser().id;
  return superagent
    .post(host + "/user-commits")
    .send({
      commitId,
      initial,
      target,
      amount,
      userId,
    })
    .then((res) => res.body);
}
