// we run the moment methods that give us the current date and time.
// and we assign it to the variable currentTime
moment(Date);
$("#currentTime").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();

// This will only return hour as value
currentTime = currentTime.startOf("hour");

// Let declares the variable that will reference the starting hour of the planner
var startingHour = moment().startOf('day').add(9, "hours");

//we then assign it to this variable that will hold the 9AM timeblock
var time9 = startingHour.add(0, "h");
time9 = time9.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock1").text(time9);

//let declares the varaiable that will hold 10AM
var time10 = startingHour.add(1, "h");
time10 = time10.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock2").text(time10);

//let declares the varaiable that will hold 11AM
var time11 = startingHour.add(1, "h");
time11 = time11.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock3").text(time11);

//let declares the varaiable that will hold 12PM
var time12 = startingHour.add(1, "h");
time12 = time12.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock4").text(time12);

//let declares the varaiable that will hold 1 PM
var time13 = startingHour.add(1, "h");
time13 = time13.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock5").text(time13);

//let declares the varaiable that will hold 2 PM
var time14 = startingHour.add(1, "h");
time14 = time14.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock6").text(time14);

//let declares the varaiable that will hold 3 PM
var time15 = startingHour.add(1, "h");
time15 = time15.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock7").text(time15);

//let declares the varaiable that will hold 4 PM
var time16 = startingHour.add(1, "h");
time16 = time16.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock8").text(time16);

//let declares the varaiable that will hold 5 PM
var time17 = startingHour.add(1, "h");
time17 = time17.format('hh:mm A');
// let render this time into our html element using Jquery
$(".timeBlock9").text(time17);

// let create a function that will check if the time is current , in the past or in the furture.
function checkTime() {

    // check timeblock1 9AM
    time9 = moment().startOf('day').add(9, "hours"); 
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9)) {
        $(".form9").addClass("timePast");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form9").addClass("timeFuture");
    }
    else if (currentTime.isSame(time9)) {
        $(".form9").addClass("timePresent");
    };

    // check timeblock2 10AM
    time10 = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(time10)) {
        $(".form10").addClass("timePast");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form10").addClass("timeFuture");
    }
    else if (currentTime.isSame(time10)) {
        $(".form10").addClass("timePresent");
    };

    // check timeblock3 11AM
    time11 = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(time11)) {
        $(".form11").addClass("timePast");
    }
    else if (currentTime.isBefore(time11)) {
        $(".form11").addClass("timeFuture");
    }
    else if (currentTime.isSame(time11)) {
        $(".form11").addClass("timePresent");
    };

    // check timeblock4 12PM
    time12 = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(time12)) {
        $(".form12").addClass("timePast");
    }
    else if (currentTime.isBefore(time12)) {
        $(".form12").addClass("timeFuture");
    }
    else if (currentTime.isSame(time12)) {
        $(".form12").addClass("timePresent");
    };

    // check timeblock5 1PM
    time13 = moment().startOf('day').add(13, "hours");
    if (currentTime.isAfter(time13)) {
        $(".form13").addClass("timePast");
    }
    else if (currentTime.isBefore(time13)) {
        $(".form13").addClass("timeFuture");
    }
    else if (currentTime.isSame(time13)) {
        $(".form13").addClass("timePresent");
    };

    // check timeblock6 2PM
    time14 = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(time14)) {
        $(".form14").addClass("timePast");
    }
    else if (currentTime.isBefore(time14)) {
        $(".form14").addClass("timeFuture");
    }
    else if (currentTime.isSame(time14)) {
        $(".form14").addClass("timePresent");
    };

    // check timeblock7 3M
    time15 = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(time15)) {
        $(".form15").addClass("timePast");
    }
    else if (currentTime.isBefore(time15)) {
        $(".form15").addClass("timeFuture");
    }
    else if (currentTime.isSame(time15)) {
        $(".form15").addClass("timePresent");
    };

    // check timeblock8 4pm
    time16 = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(time16)) {
        $(".form16").addClass("timePast");
    }
    else if (currentTime.isBefore(time16)) {
        $(".form16").addClass("timeFuture");
    }
    else if (currentTime.isSame(time16)) {
        $(".form16").addClass("timePresent");
    };

    // check timeblock9 5pm
    time17 = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(time17)) {
        $(".form17").addClass("timePast");
    }
    else if (currentTime.isBefore(time17)) {
        $(".form17").addClass("timeFuture");
    }
    else if (currentTime.isSame(time17)) {
        $(".form17").addClass("timePresent");
    };
}

// call the function checkTime
checkTime();

// let create the function that will loop through the timeBlock 
// and check if there is a text value . If yes , the text value will be set in the local storage 
// then return to be display on their specific timeblock

var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
  
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});