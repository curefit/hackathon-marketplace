export const commitsMap = {
  "1": {
    amount: 100,
    getTarget: (current) => {
      return current + 1;
    },
    getMessage: (target) => {
      return `I want to do slightly better. I commit to doing ${target} classes this week.`;
    },
  },
  "2": {
    amount: 500,
    getTarget: (current) => {
      return current + 2;
    },
    getMessage: (target) => {
      return `I'll push myself very hard. I commit to doing ${target} classes this week.`;
    },
  },
  "3": {
    amount: 1000,
    getTarget: (current) => {
      return current + 3;
    },
    getMessage: (target) => {
      return `I want to go beast mode. I commit to doing ${target} classes this week.`;
    },
  },
};
