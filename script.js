var currentDayText = moment().format("MMMM Do YYYY");
var currentHour = "";
var containerEl = $(".container");

$("#currentDay").text(currentDayText);

var timeDisplay = [
  moment("9:00 AM", "h A"),
  moment("10:00 AM", "h A"),
  moment("11:00 AM", "h A"),
  moment("12:00 PM", "h A"),
  moment("1:00 PM", "h A"),
  moment("2:00 PM", "h A"),
  moment("3:00 PM", "h A"),
  moment("4:00 PM", "h A"),
  moment("5:00 PM", "h A"),
];
for(i = 0; i < timeDisplay.length; i++){
    var rowEl = $("<row>");
    var hourDisplay = $("<div>");
    var text = $("<textarea>");
    var buttons = $("<button>");
    rowEl.append(hourDisplay);
    rowEl.append(text);
    rowEl.append(buttons);
    containerEl.append(rowEl);
    

};

