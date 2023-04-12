const date = new Date();
const past1YearDate = `${date.getMonth() + 1}-${date.getDate()}-${
  date.getFullYear() - 1
}`;

module.exports = { past1YearDate };
