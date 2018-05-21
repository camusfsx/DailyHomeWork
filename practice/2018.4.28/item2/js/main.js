var boxlist =document.getElementsByClassName("box");
var left = document.getElementsByClassName("button1")[0];
var right = document.getElementsByClassName("button2")[0];
left.onclick = function(){
    for(i=0;i<boxlist.length;i++){
        (function(n){   
            var change = setTimeout(function(){    
                changecolorl(n);
            },500*n);
        })(i)
    }
}
right.onclick = function(){
    for(i=0;i<boxlist.length;i++){
        (function(n){   
            var change = setTimeout(function(){    
                changecolorr(n);
            },500*n);
        })(i)
    }
}
function changecolorl(x){
    boxlist[x].style.backgroundColor = `#${x*3}${x*2}${x}`;
}
function changecolorr(x){
    boxlist[x].style.backgroundColor = `#${x}${x*2}${x*3}`;
}
