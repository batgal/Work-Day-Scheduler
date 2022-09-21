import moment from "http://cdn.skypack.dev/moment@2.2";

const store = window.localStorage;
const container = $(".container");
const now = moment();
const currentTime = { test: moment().format("h:00 A"), hour: moment().hour() };
const range = (start, end, step) => {
  return Array.from(
    Array.from(Array(Math.ceil((end - start) / step)).keys()),
    (x) => start + x * step
  );
};
const hoursOfTheDay = Array.from(new Array(24)).map((v, i) => {
  const text = moment().hour(i);
  return { text, hour };
});

$("#day").text(now.format("dddd MMMM DD, YYYY"));

function color(time) {
  return time.text === currentTime.text
    ? "bg-red-300"
    : time.hour < now
    ? "bg-light-green"
    : "bg-green";
}

hoursOfTheDay.forEach((hr) => {
  const grid = $(
    `<form data-name"${hr.text}"
        class="`
  );
});
