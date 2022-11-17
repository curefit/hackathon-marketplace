import superagent from 'superagent'
import { host } from ".";

export function getCommits() {
  return superagent.get(host + "/commits").then((res) => res.body);;
}
