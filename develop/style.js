// Display current time and date
const date = new Date();
 console.log(date);
 var current = document.querySelector(".date")


$(document).ready(function () {
    // SaveButton click listener 
        $('saveButton').click(function() {
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
        });
      
    
function timeTracker () {
    var currentHour = dayjs().format();

$(".time-stop").each (function () {
    var blockTime = parseInt ($(this).attr("id").split("-")[1]);
// We take the current time and add the classes for the color indicator"
    if (blockTime < timeNow) {
        $(this).removeClass ("future");
        $(this).removeClass ("present");
        $(this).addClass ("past");
    }
    else if(blockTime == timeNow) {
        $(this).removeClass ("future");
        $(this).removeClass ("past");
        $(this).addClass ("present");
    }
    else {
        $(this).removeClass ("present");
        $(this).removeClass ("past");
        $(this).addClass ("future");
    }

})
}
    // Any user input that was saved in localStorage
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14.description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17.description").val(localStorage.getItem("hour17"));
    
    timeTracker ();
  })
  