let url = "https://api.spacexdata.com/v4/crew";
let div = document.querySelector("#pads");

$("#NASA").click(function (e) {
    if ($("#NASA").is(":checked") == false) {
        $('.NASA').hide();   
    }else{
        $('.NASA').show();
    }
});
$("#JAXA").click(function (e) {
    if ($("#JAXA").is(":checked") == false) {
        $('.JAXA').hide();   
    }else{
        $('.JAXA').show();
    }
});
$("#ESA").click(function (e) {
    if ($("#ESA").is(":checked") == false) {
        $('.ESA').hide();   
    }else{
        $('.ESA').show();
    }
});

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((el) => {
      let image = el.image;
      let name = el.name;
      let agency = el.agency;
      let html
      if ($(`#${agency}`).is(":checked")) {
         html = `
                <div class="col-md-4 ${agency}">
                <div class="card bg-light">
                    <img  class="card-img-top" src="${image}" alt="launchpad photo">
                    <div class="card-body">
                        <h5>${name}</h5>
                        <p>${agency}</p>
                    </div>
                </div>
            </div>
            `;
        div.firstElementChild.insertAdjacentHTML("afterend", html);
      }
    });
  });
