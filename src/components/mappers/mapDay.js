export const mapDay = (timestamp) => {
  var d = new Date();
  d.setTime(timestamp * 1000); // javascript timestamps are in milliseconds
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[d.getDay()];
};
