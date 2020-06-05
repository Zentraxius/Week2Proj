$(document).ready(function () {
  $("#questions").submit(function (event) {
    let userName = $("input#userName").val();
    let userAge = parseInt($("input#userAge").val());
    let userGender = $("select#userGender").val();
    let userSpeed = $("input:radio[name=userSpd]:checked").val();
    let userExp = $("input:radio[name=userExperience]:checked").val();

    if (userGender === "male" && userAge < 50) {
      $("#outcome1").show();
    }

    $("#response").show();
    $(".userName").text(userName);
    event.preventDefault();
  });
});
