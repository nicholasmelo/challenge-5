window.onload = function() {
  $(".savBtn").on("click", function() {
      var userText = $(this).siblings(".description").val()
      var time = $(this).parent().attr("id")
    localStorage.setItem(time,userText)


  })
  let hours = ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
  for (let i = 0; i < hours.lenth; i++) {
    $(`#hour${hours[i]} .description`) .val(localStorage.getItem(`hours${hours[i]}`));

  }

function timeChecker() {

var currentTime = dayjs().hour()

$(".time-block").each(function () {
var currentHour = parseInt($(this).attr("id").split("hour")[1])


  if (currentHour < currentTime) {
      $(this).addClass("past")
      $(this).removeClass("present")
      $(this).removeClass("future")
  }
  else if (currentHour === currentTime) {
    $(this).removeClass("past")
    $(this).addClass("present")
    $(this).removeClass("future")
  }
else {
  $(this).removeClass("past")
  $(this).removeClass("present")
  $(this).addClass("future")
}
  })
}
 timeChecker()
};

var currentDate = dayjs().format ('dddd, MMMM DD YYYY')
  $("#currentDay").html(currentDate)