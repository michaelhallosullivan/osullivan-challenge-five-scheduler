// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var today = dayjs();
$("#currentDay").text(today.format("MMMM D, YYYY"));

generateHours();

function generateHours() {
  for (i = 9; i < 18; i++) {
  var hourX = today.hour(i);
  var hourContainer = document.createElement("div");
  hourContainer.id = "hour-"+i+"-container";
  hourContainer.className = "row time-block";
  if (hourX.$H < today.hour()) {
    hourContainer.classList.add("past");
    }
  if (hourX.$H === today.hour()) {
    hourContainer.classList.add("present");
    }
  if (hourX.$H > today.hour()) {
    hourContainer.classList.add("future");
    };
  var hourTitle = document.createElement("div");
  hourTitle.id = "hour-"+i;
  hourTitle.className = "col-2 col-md-1 hour text-center py-3";
  hourTitle.textContent = hourX.format("h A");
  var task = document.createElement("textarea");
  task.id = "task";
  task.className = "col-8 col-md-10 description";
  task.rows = "3";
  var saveButton = document.createElement("button");
  saveButton.id = "save-button";
  saveButton.className = "btn saveBtn col-2 col-md-1";
  saveButton.setAttribute("aria-label", "save");
  var saveIcon = document.createElement("i");
  saveIcon.className = "fas fa-save";
  saveIcon.setAttribute("aria-hidden", "true");
  $("#all-hours").append(hourContainer);
  hourContainer.append(hourTitle, task, saveButton);
  saveButton.append(saveIcon);
  }
}