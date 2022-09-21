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
        class="grid"></form>`
  );
  const time = $(`<div class="flex items-center>${hr.text}</div>`);
  const textArea = $(`<textarea name="${hr.text}"
    ${color(hr)}>${store.getItem(hr.text) || ""}</textarea>`);
  textArea.keydown((e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }
  });

  const saveButton = $(`<button type="submit"></button>`);

  grid.submit((e) => {
    e.preventDefault();

    const value = $(`textarea [name ="${hr.text}"]`).val();

    store.setItem(hr.text, value);
  });

  grid.append(time);
  grid.append(textArea);
  grid.append(saveButton);

  container.append(grid);
});
