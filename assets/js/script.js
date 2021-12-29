// display current date at top of page
var todaysDate = moment().format("dddd" + ", " + "MMMM Do, YYYY")
$(currentDay).html("Today is " + todaysDate)


// save any text/value in textarea element + the time slot ID to local storage after clicking save btn
$(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    // console.log(textInput)
    // console.log(timeSlot)
    localStorage.setItem(timeSlot, textInput)
})

// console.log(moment().format("hh"))
// console.log(moment().hour())
// console.log($(".time-block").attr("id"))

// color cordinate time slots
var timeBlockColorHandler = function () {
    // console.log(moment().format("H"))
    rightNow = moment().hour()
    console.log(rightNow)

    // grabs each time-block class element and looks for id
    $(".time-block").each(function () {
        if ($(this).attr("id") < rightNow) {
            $(this).children(".description").addClass("past") // gray
        }
        else if ($(this).attr("id") > rightNow) {
            $(this).children(".description").addClass("future") // green
        }
        else if ($(this).attr("id") == rightNow) {
            $(this).children(".description").addClass("present") // red
        }
    })
}

// get items from local storage and display on page
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

// call function to color cordinate time slots
timeBlockColorHandler()







