var left = document.getElementsByClassName("left");
var right = document.getElementsByClassName("right");
left[0].onclick = function(){
    for(i=1;i<6;i++){
        alert(i);
    }
}
right[0].onclick = function(){
    for(i=5;i>0;i--){
        alert(i);
    }
}
