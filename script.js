//Below are the variables that use moment.js to store the current date and current hour
var currentDayText = moment().format("MMMM Do YYYY");
var currentHour = moment().hour();
//created a variable to manipulate the container element 
var containerEl = $(".container");
//the following array will be used to set an id equal to the hour for that time block, which will be checked against the hour variable set from moment.js. This id will also be used as the key for local storage.
var plannerHourId = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// the following array will be used to display the hour for each row in the planner.
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
//the line below will display the date in the current day in the header.
$("#currentDay").text(currentDayText);
// the following for loop will do most of the heavy lifting on this page. its utility is threefold: populate the container element, set the text if there is any in local storage and color each textarea based on the current hour.
for (i = 0; i < workHours.length; i++) {
  var rowEl = $("<row>");
  var hourDisplay = $("<div>");
  var text = $("<textarea>");
  var buttons = $("<button>");
// It will populate the page with the rows for each hour in the planner, inside of which will be the hour, text, and button sections. It will also give each row a corresponding id from the plannerHourId array.
  rowEl.attr("class", "time-block row");
  hourDisplay.attr("class", "hour col-sm-2");
  text.attr("class", "description col-sm-8");
  buttons.attr("class", "saveBtn col-sm-2");
  rowEl.attr("id", plannerHourId[i]);
  hourDisplay.text(workHours[i]);
  buttons.text("Save");
  // the next line of code will populate the text area with text if any has been set to local storage
  text.text(localStorage.getItem(plannerHourId[i]));
// the following for loop will set the textarea with a class to designate whether the hour of that row is before during or after the current hour.
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
// the following code will be the event listener for clicking the save button. it will then set into local storage the id of the row as the key and the text of the textarea as the value
$(document).on("click", ".saveBtn", function (event) {
  console.log($(event.target).parent().attr("id")); //key
  console.log($(event.target).siblings(".description").val()); //value
  localStorage.setItem(
    $(event.target).parent().attr("id"),
    $(event.target).siblings(".description").val()
  );
});
