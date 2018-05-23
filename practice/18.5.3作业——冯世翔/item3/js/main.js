var button = document.getElementById('button');
button.onclick =function(){
    var text =document.getElementById("textarea").value;
    var checktype =document.getElementById('checktype').value;
    if(checktype==''||(checktype!='NC'&&checktype!='SC')){
        return alert(`error type`);
    }
    if(text==''){
        return alert(`null`);
    }
    if(checktype=='NC'){
        for(var i=0;i<text.length;i++){
            if(text.charCodeAt(i)<48||text.charCodeAt(i)>57){
                return alert(`This is not NumberString`);
            }
        }
        return alert(`This is a NumberString`);
    }
    if(checktype=='SC'){
        var [answer,Lower,Upper]=['',true,true];
        for(var i=0;i<text.length;i++){
            if(text.charCodeAt(i)<97||text.charCodeAt(i)>122){
                Lower =false;
                break;
            }
        }
        for(var i=0;i<text.length;i++){
            if(text.charCodeAt(i)<65||text.charCodeAt(i)>90){
                Upper =false;
                break;
            }
        }
        if(Lower){
            answer+=`This is a LowerCaseString`;
        }
        if(Upper){
            answer+=`This is a UpperCaseString`;
        }
        if(!Lower&&!Upper){
            answer+=`This is not a UpperCaseString or LowerCaseString`;
        }
        return alert(answer);
    }
}


