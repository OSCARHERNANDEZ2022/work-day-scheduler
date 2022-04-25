//displays current date and time
// document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];
function updateTime() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}

updateTime()
setInterval(updateTime, 1000);



// loop to prevent repeating code locally
for (let i = 9; i < 18; i++) {
  var timeBlockEl = $("#hour" + i);
  var buttonEl = timeBlockEl.children("button");
  console.log(buttonEl);

  buttonEl.on("click", function () {
    var textArea = $("#text" + i);
    console.log(textArea.val());
    var text = textArea.val();
    localStorage.setItem("data-" + i, text);
  });

  //  local storage
  var textArea = $("#text" + i);
  var text = localStorage.getItem("data-" + i);
  console.log(text);
  textArea.val(text);
}

function hourUpdater() {
  // current number of hours
  var currentHour = moment().hours();

  // loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdater();

// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);


