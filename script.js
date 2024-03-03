let start = document.querySelector("#on");
let finisf = document.querySelector("#off");
function myTimer() {
    alert(`Время размяться, вы работаете ${time} минут`);
  }
function work_time(){
  let current = new Date();
  let sec = Math.floor((current.getTime() - timerDate.getTime())/1000);
  let date = new Date(null);
  console.log(current, date);
  date.setSeconds(sec);
  var timeString = date.toISOString().substr(11, 8);
  currentTime.innerText = timeString
}
let time = 0
let a, b, current, timerDate
const currentTime = document.querySelector("#current-time");
if (start) {
  start.addEventListener("click", () => {
    time = Number(document.querySelector("#time").value);
    current = new Date();
    timerDate = new Date(current);
    a = setInterval(myTimer, time*60*1000);
    b = setInterval(work_time, 1000)
  });
}

if (finisf) {
    finisf.addEventListener("click", ()=> {
        clearInterval(a)
        clearInterval(b)
        currentTime.innerText = `00:00:00`
    })
}
