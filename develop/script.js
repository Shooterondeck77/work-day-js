// Display current time and date

function displayTime(){
    var dateObject = dayjs();
    var todayDate = dateObject.format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").html(todayDate);
    var todayDate = parseInt(dateObject.format('HH'));
    timeTracker(todayDate);
}

function timeTracker(timeNow) {

$(".time-block").each(function () {
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

$(document).ready(function () {

    displayTime();
    setInterval(displayTime, 1000);


    // SaveButton click listener 
        $('.saveBtn').click(function() {
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
        console.log(localStorage.getItem(time))
        });
      
    // Any user input that was saved in localStorage
    $("#hour-9.description").val(localStorage.getItem("hour-9"));
    $("#hour-10.description").val(localStorage.getItem("hour-10"));
    $("#hour-11.description").val(localStorage.getItem("hour-11"));
    $("#hour-12.description").val(localStorage.getItem("hour-12"));
    $("#hour-13.description").val(localStorage.getItem("hour-13"));
    $("#hour-14.description").val(localStorage.getItem("hour-14"));
    $("#hour-15.description").val(localStorage.getItem("hour-15"));
    $("#hour-16.description").val(localStorage.getItem("hour-16"));
    $("#hour-17.description").val(localStorage.getItem("hour-17"));
  })
  