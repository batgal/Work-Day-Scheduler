import moment from "http://cdn.skypack.dev/moment@2.2";

const store = window.localStorage;
const container = $(".container");
const now = moment();
const currentTime = { test: moment().format("h:00 A"), hour: moment().hour() };

$("#day").text(now.format("dddd MMMM DD, YYYY"));
