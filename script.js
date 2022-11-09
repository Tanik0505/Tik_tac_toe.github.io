// change player name.

var P1="PLAYER1";
var P2="PLAYER2";
function changeName(){
    P1=prompt("Name of the player who choose: 'X' !!" );
    P2=prompt("Name of the player who choose :'O' !!");

    var str1=P1+" : X";
    var str2=P2+" : O";
    document.getElementById("result").innerHTML=str1+"<br>"+str2;
    document.getElementById("result").style.color="ANTIQUEWHITE";
}


var flag=true;
var t=0;
function game(){
    if(flag==true){
        document.activeElement.innerHTML="X";
        document.activeElement.removeAttribute("onclick");
        document.activeElement.style.backgroundColor="#2a74f0";
        t++;
        flag=false;
        var final=checkresult();
        if(final=="stop"){
            document.getElementById("result").innerHTML=P1+" WINS !!";
            document.getElementById("result").style.fontSize="45px";
            document.getElementById("result").style.color="antiquewhite";
            document.getElementById("result").style.paddingTop="30px";
            removeATT();
        }

        else if(t==9){
            document.getElementById("result").innerHTML="MATCH DRAW !!";
        }
    }
    else{
        document.activeElement.innerHTML="O";
        document.activeElement.style.backgroundColor="hotpink";
        document.activeElement.removeAttribute("onclick");
        t++;
        flag=true;
        var final=checkresult();
        if(final=="stop"){
            document.getElementById("result").innerHTML=P2+" WINS !!";
            document.getElementById("result").style.fontSize="45px";
            document.getElementById("result").style.color="antiquewhite";
            document.getElementById("result").style.paddingTop="30px";
            removeATT();
        }

        else if(t==9){
            document.getElementById("result").innerHTML="MATCH DRAW !!";
        }
    }

    }




function checkresult(){
    var str;
    if((document.getElementById("b1").innerHTML==document.getElementById("b2").innerHTML && document.getElementById("b1").innerHTML==document.getElementById("b3").innerHTML) && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b1").innerHTML==document.getElementById("b4").innerHTML && document.getElementById("b1").innerHTML==document.getElementById("b7").innerHTML) && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b1").innerHTML==document.getElementById("b5").innerHTML && document.getElementById("b1").innerHTML==document.getElementById("b9").innerHTML) && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b3").innerHTML==document.getElementById("b6").innerHTML && document.getElementById("b9").innerHTML==document.getElementById("b3").innerHTML) && ((document.getElementById("b3").innerHTML=="X") || (document.getElementById("b3").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b3").innerHTML==document.getElementById("b5").innerHTML && document.getElementById("b3").innerHTML==document.getElementById("b7").innerHTML) && ((document.getElementById("b3").innerHTML=="X") || (document.getElementById("b3").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b7").innerHTML==document.getElementById("b8").innerHTML && document.getElementById("b7").innerHTML==document.getElementById("b9").innerHTML) && ((document.getElementById("b7").innerHTML=="X") || (document.getElementById("b7").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b4").innerHTML==document.getElementById("b6").innerHTML && document.getElementById("b4").innerHTML==document.getElementById("b5").innerHTML) && ((document.getElementById("b4").innerHTML=="X") || (document.getElementById("b4").innerHTML=="O"))){
        

        str="stop";
        return str;
    }

    else if((document.getElementById("b2").innerHTML==document.getElementById("b5").innerHTML && document.getElementById("b2").innerHTML==document.getElementById("b8").innerHTML) && ((document.getElementById("b2").innerHTML=="X") || (document.getElementById("b2").innerHTML=="O"))){
        

        str="stop";
        return str;
    }
}


//Remove attribute

function  removeATT(){
    document.getElementById("b1").removeAttribute("onclick");
    document.getElementById("b2").removeAttribute("onclick");
    document.getElementById("b3").removeAttribute("onclick");
    document.getElementById("b4").removeAttribute("onclick");
    document.getElementById("b5").removeAttribute("onclick");
    document.getElementById("b6").removeAttribute("onclick");
    document.getElementById("b7").removeAttribute("onclick");
    document.getElementById("b8").removeAttribute("onclick");
    document.getElementById("b9").removeAttribute("onclick");
}


//replay game

function replay(){
    window.location.reload();
}