let canvas = document.getElementById("myCanvas");

console.dir(canvas);
let ctx = canvas.getContext("2d");

let flag = false;
let mouseCoords = { x: 0, y: 0 };
const rect = canvas.getBoundingClientRect();
canvas.addEventListener("mousedown", function (e) {
  console.log(e);
  mouseCoords.x = e.clientX - rect.left;
  mouseCoords.y = e.clientY - rect.top;
  x1 = mouseCoords.x;
  y1 = mouseCoords.y;
  flag = true;

  ctx.beginPath();

  ctx.stroke();
});

canvas.addEventListener("mouseup", function (e) {
  mouseCoords.x = e.clientX - rect.left;
  mouseCoords.y = e.clientY - rect.top;
  x2 = mouseCoords.x;
  y2 = mouseCoords.y;
  flag = false;

  ctx.lineTo(mouseCoords.x, mouseCoords.y);
  ctx.stroke();
  console.log(e);
  console.log("bbb");
  ctx.globalAlpha = $("#a").val();
  ctx.fillStyle = $("#color").val();
  console.log(ctx.fillStyle);
  ctx.fillRect(x1, Math.min(y1, y2), x2-x1, Math.abs(y1-y2));
  ctx.closePath();
});

let img = new Image();
img.src = "photo.jpg";
img.onload = () => {
  let pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
