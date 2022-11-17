export const commitsMap = {
  1: {
    getTarget: (current) => {
      return current + 1;
    },
    getMessage: (target) => {
      return `I want to do slightly better. I commit to doing ${target} classes this week.`;
    },
  },
  2: {
    getTarget: (current) => {
      return current + 2;
    },
    getMessage: (target) => {
      return `I'll push myself very hard. I commit to doing ${target} classes this week.`;
    },
  },
  3: {
    getTarget: (current) => {
      return current + 3;
    },
    getMessage: (target) => {
      return `I want to go beast mode. I commit to doing ${target} classes this week.`;
    },
  },
};
