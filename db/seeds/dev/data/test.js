const schedule = require("node-schedule");

const j = schedule.scheduleJob("*/1 * * * *", function () {
  console.log("The answer to life, the universe, and everything!");
});