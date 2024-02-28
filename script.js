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




  $("#btn3").click(function () { 
    if (is_active == false) {
      $("[class=animated]").css({
        height: 400,
        width: 400,
        opacity: 0
      });
    } else{
      console.log("dsf");
      $("[class=animated]").css({
        height: 200,
        width: 200,
        opacity: 100
      });
    }
    is_active = !is_active;
  });
});
