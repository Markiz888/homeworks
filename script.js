let start = document.querySelector("#on");
let finisf = document.querySelector("#off");
function myTimer() {
    alert(`Время размяться, вы работаете ${time} минут`);
  }
let time = 0
let a  
if (start) {
  start.addEventListener("click", () => {
    time = Number(document.querySelector("#time").value);
    a = setInterval(myTimer, time*60*1000);
  });
}

if (finisf) {
    finisf.addEventListener("click", ()=> {
        clearInterval(a)
    })
}
