export const commitsMap = {
  1: {
    amount: 100,
    getTarget: (current) => {
      return current + 1;
    },
    getMessage: (target) => {
      return `I want to do slightly better. I commit to doing ${target} classes this week.`;
    },
  },
  2: {
    amount: 500,
    getTarget: (current) => {
      return current + 2;
    },
    getMessage: (target) => {
      return `I'll push myself very hard. I commit to doing ${target} classes this week.`;
    },
  },
  3: {
    amount: 1000,
    getTarget: (current) => {
      return current + 3;
    },
    getMessage: (target) => {
      return `I want to go beast mode. I commit to doing ${target} classes this week.`;
    },
  },
};

import commitAppImage from "../public/images/fit-commit.png";
import buddyAppImage from "../public/images/fit-buddy.png";
import blankAppImage from "../public/images/blank-app.png";

export const appsMap = [
  {
    id: "commit",
    name: "Fit Commit",
    description:
      "Commit money to stick to your fitness goals, earn it back if you do.",
    logo: commitAppImage,
    link: "/commit/login",
  },
  {
    id: "buddy",
    name: "Fit Buddy",
    description: "Attend classes with a buddy and have a friendly competition.",
    logo: buddyAppImage,
    link: "/buddy/login",
  },
  {
    id: "planner",
    name: "Meal Planner",
    description:
      "Create a meal plan customised to your fitness interests.",
    logo: blankAppImage,
    link: "/",
  },
  {
    id: "score",
    name: "Fitness Score",
    description:
      "An insurance company could generate a fitness score for best price.",
    logo: blankAppImage,
    link: "/",
  },
  {
    id: "dating",
    name: "Fit Dating",
    description:
      "Showcase your fitness rigor with verified data provided by Cult.",
    logo: blankAppImage,
    link: "/",
  },
];
