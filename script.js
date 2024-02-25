$(document).ready(function () {
    let is_active = false
  $("#btn1").click(function (e) {
    $(".animated")
      .animate({
        left: 500,
      })
      .animate({
        top: 100,
      })
      .animate({
        left: 0,
      })
      .animate({
        top: 0,
      });
  });


  $("#btn2").click(function(e) {
    $(".animated")
    .animate({
        left: 200,
    })
    .animate({
        left: 100,
        top: 173,
    })
    .animate({
        top:0,
        left:0,
    });
  });




  $("#btn3").click(function (e) { 
    $(".animated").toggleClass('change');
  });
});
