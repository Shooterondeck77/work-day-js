// Display current time and date 
var dateTimeTTEL = document.getElementById('DateTimeTT')
var today = new Date();
console.log(today);
dateTimeTTEL.textContent = today;
var saveBtn = document.querySelector(".saveBtn")
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
if (currenttime)



$(document).ready(function () {
    // SaveButton click listener 
        $('saveButton').click(function() {
         
        localStorage.setItem(time, text);
        });
      });
    
function timeKeeper () {
var timeNow = moment().hour();

}
$(".time-stop").each (function () {
    var blockTime = parseInt ($(this).attr("id").split("hour")[1]);
// We take the current time and add the classes for the color indicator"
    if (blockTime < timeNow) {
        $(this).removeClass ("future");
        $(this).removeClass ("present");
        $(this).addClass ("past");
    }
    else if(blockTime === timeNow) {
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
  });
  