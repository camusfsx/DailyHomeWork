var box = document.getElementById("box");
var left = document.getElementsByClassName("button1")[0];
var right = document.getElementsByClassName("button2")[0];
left.onclick = function(){
    box.className="hid";
}
right.onclick = function(){
    box.className="show";
}
