let body = document.querySelector("body");
body.style.backgroundColor = "white";

var draw = SVG("draw").size(300, 300);
// var rect = draw.rect(100, 100).attr({ fill: "red" });

var text = draw.text("SVG text with drop shadow").fill("#fff");

text.filterWith(function(add) {
  var blur = add
    .offset(0, 1)
    .in(add.$sourceAlpha)
    .gaussianBlur(1);

  add.blend(add.$source, blur);
});

let container = document.getElementById("container");
container.style.textAlign = "center";

let mark = document.getElementById("mark");
mark.style.textAlign = "center";
mark.style.width = "90%";
// mark.style.marginTop = "50px";
console.log(mark);
// mark.style.boxShadow = "10px 20px 30px lightblue";

let offSet = document.getElementById("offSet");
offSet.dy = "5";
console.log("offSet", offSet);
