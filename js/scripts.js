$(document).ready(function () {
  $("#questions").submit(function (event) {
    let userName = $("input#userName").val();
    let userAge = parseInt($("input#userAge").val());
    let userGender = $("select#userGender").val();
    let userSpeed = $("input:radio[name=userSpd]:checked").val();
    let userExp = $("input:radio[name=userExperience]:checked").val();

    if (userGender === "male" && userAge < 50) {
      $("#outcome1").show();
      $("#outcome2, #outcome3, #outcome4").hide();

    } else if (userGender === "male" && userAge > 50) {
      $("#outcome3").show();
      $("#outcome1, #outcome2, #outcome4").hide();

    } else if ((userGender === 'female' || 'other') && userAge < 50) {
      $("#outcome2").show();
      $("#outcome1, #outcome3, #outcome4").hide();

    } else if ((userGender === 'female' || 'other') && userAge > 50) {
      $("#outcome4").show();
      $("#outcome1, #outcome3, #outcome2").hide();
    }

    if (userExp)

    $(".userName").text(userName);
    event.preventDefault();
  });
});
