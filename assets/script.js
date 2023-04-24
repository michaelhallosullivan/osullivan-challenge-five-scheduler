var today = dayjs();
$("#currentDay").text(today.format("MMMM D, YYYY"));

var taskIDs = [];

generateHours();
showTasks();

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
  var taskArea = document.createElement("textarea");
  var hourIDs = "hour-"+i+"-task";
  taskArea.id = hourIDs;
  taskArea.className = "col-8 col-md-10 description text";
  taskArea.rows = "3";
  var saveButton = document.createElement("button");
  saveButton.id = "save-button";
  saveButton.className = "btn saveBtn col-2 col-md-1";
  saveButton.setAttribute("aria-label", "save");
  var saveIcon = document.createElement("i");
  saveIcon.className = "fas fa-save";
  saveIcon.setAttribute("aria-hidden", "true");
  $("#all-hours").append(hourContainer);
  hourContainer.append(hourTitle, taskArea, saveButton);
  saveButton.append(saveIcon);
  taskIDs.push(hourIDs);
  }
}

function saveTask() {
  var taskID = $(this).siblings("textarea").attr("id");
  var savingIndex = taskIDs.indexOf(taskID);
  var savingTask = $("#"+taskID).val();
  localStorage.setItem("task", savingTask);
  localStorage.setItem("index", savingIndex);
}

function showTasks() {
  var savedTask = localStorage.getItem("task");
  var savedIndex = localStorage.getItem("index");
  var savedTaskID = taskIDs[savedIndex];
  var taskValue = $("#"+savedTaskID).val();
  //localStorage.removeItem("task");
  if (savedTask === null) {
    console.log("nothing stored");
  }
  else {
    taskValue = savedTask;
  }
}

$("#save-button").click(saveTask);