var currentDayText = moment().format("MMMM Do YYYY");
var currentHour = moment().hour();
var containerEl = $(".container");

var plannerHourId = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var workHours = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
$("#currentDay").text(currentDayText);
for (i = 0; i < workHours.length; i++) {
  var rowEl = $("<row>");
  var hourDisplay = $("<div>");
  var text = $("<textarea>");
  var buttons = $("<button>");

  rowEl.attr("class", "time-block row");
  hourDisplay.attr("class", "hour col-sm-2");
  text.attr("class", "description col-sm-8");
  buttons.attr("class", "saveBtn col-sm-2");
  rowEl.attr("id", plannerHourId[i]);
  hourDisplay.text(workHours[i]);
  buttons.text("Save");

  if (plannerHourId[i] > currentHour) {
    text.attr("class", "future description col-sm-8");
  } else if (plannerHourId[i] < currentHour) {
    text.attr("class", "past description col-sm-8");
  } else {
    text.attr("class", "present description col-sm-8");
  }

  rowEl.append(hourDisplay);
  rowEl.append(text);
  rowEl.append(buttons);
  containerEl.append(rowEl);
}

function populateText() {}

$(document).on("click", ".saveBtn", function (event) {
  console.log($(event.target).parent().attr("id"));
  console.log($(event.target).siblings(".description").val());
  localStorage.setItem(
    $(event.target).parent().attr("id"),
    $(event.target).siblings(".description").val()
  );
});
