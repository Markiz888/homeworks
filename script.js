$(document).ready(function () {
  $("button").click(function (e) {
    document.cookie = `user_name=${$("#name").val()};max-age=${$("#days").val() * 86400}`;
    document.cookie = `user_age=${$("#age").val()};max-age=${$("#days").val() * 86400}`;
    $("#name").val("");
    $("#age").val("");
    $("#days").val("");
  });
  if (document.cookie.split(';').length != 1) {
    document.write(document.cookie.split(';')[1])
    document.write(document.cookie.split(';')[2])
  }
});
