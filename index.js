const axios = require("axios");

const arguments = process.argv.slice(2);
let url;
if (arguments.includes("--help")) {
  console.log("You need to provide an area (continent) and a major city.");
  process.exit();
}
if (arguments.includes("--options")) {
  axios("http://worldtimeapi.org/api/timezone")
    .then(response => {
      return response.data.reduce((acc, curr) => {
        const [area, region, city] = curr.split("/");
        acc.push({ area, region, city });
        return acc;
      }, []);
    })
    .then(data => {
      data.forEach(entry => {
        console.log(entry);
      });
      process.exit();
    });
}

let isUnix = false;
let isDay = false;
let isWeek = false;
let isTime = false;
if (arguments.includes("--unix") && !arguments.includes("--options")) {
  isUnix = true;
  const isUnixNumber = arguments.indexOf("--unix");
  arguments.splice(isUnixNumber, 1);
}
if (arguments.includes("--dayOfTheYear") && !arguments.includes("--options")) {
  isDay = true;
  const isDayNumber = arguments.indexOf("--dayOfTheYear");
  arguments.splice(isDayNumber, 1);
}
if (arguments.includes("--currentWeek") && !arguments.includes("--options")) {
  isWeek = true;
  const isWeekNumber = arguments.indexOf("--currentWeek");
  arguments.splice(isWeekNumber, 1);
}
if (!isUnix && !isDay && !isWeek && !arguments.includes("--options")) {
  isTime = true;
}
switch (arguments.length) {
  case 3:
    var [continent, region, town] = arguments;
    url = `http://worldtimeapi.org/api/timezone/${continent}/${region}/${town}`;
    break;
  case 2:
    var [continent, town] = arguments;
    url = `http://worldtimeapi.org/api/timezone/${continent}/${town}`;
    break;
  case 1:
    var [timezone] = arguments;
    url = `http://worldtimeapi.org/api/timezone/${timezone}`;
}
axios.get(url).then(response => {
  const { data } = response;
  const { datetime, week_number, day_of_year, unixtime } = data;
  if (isUnix) {
    console.log(`The current unix timestamp is ${unixtime}.`);
  }
  if (isDay) {
    console.log(`Today is day number ${day_of_year} of this year.`);
  }
  if (isWeek) {
    console.log(`The current week is number ${week_number}`);
  }
  if (isTime) {
    const dateRawString = datetime.substr(0, 10);
    const [year, month, day] = dateRawString.split("-");
    const time = datetime.substr(11, 8);
    console.log(`${day}/${month}/${year} ${time}`);
  }
});
