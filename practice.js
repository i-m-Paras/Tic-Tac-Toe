var temp=2;
var click_check=true;
document.getElementById("0").onclick=function(){if(click_check){play("0");}}
document.getElementById("1").onclick=function(){if(click_check){play("1");}}
document.getElementById("2").onclick=function(){if(click_check){play("2");}}
document.getElementById("3").onclick=function(){if(click_check){play("3");}}
document.getElementById("4").onclick=function(){if(click_check){play("4");}}
document.getElementById("5").onclick=function(){if(click_check){play("5");}}
document.getElementById("6").onclick=function(){if(click_check){play("6");}}
document.getElementById("7").onclick=function(){if(click_check){play("7");}}
document.getElementById("8").onclick=function(){if(click_check){play("8");}}
function play(identity){
    turn();
if(temp%2==0){document.getElementById(identity).innerHTML="X";
temp=2;
check();
}
else{document.getElementById(identity).innerHTML="O";
check();}
temp++;
}
function turn(){
    if(temp%2==0){document.getElementById("status").innerHTML="Its O's turn";}
    else{document.getElementById("status").innerHTML="Its X's turn";}}
    function check(){
var a=document.getElementById("0").innerHTML;
var b=document.getElementById("1").innerHTML;
var c=document.getElementById("2").innerHTML;
var d=document.getElementById("3").innerHTML;
var e=document.getElementById("4").innerHTML;
var f=document.getElementById("5").innerHTML;
var g=document.getElementById("6").innerHTML;
var h=document.getElementById("7").innerHTML;
var i=document.getElementById("8").innerHTML;
if((a==b&&b==c&&a!="")||(d==e&&e==f&&d!="")||(g==h&&h==i&&g!="")||(a==d&&d==g&&a!="")||(b==e&&e==h&&b!="")||(c==f&&f==i&&c!="")||(a==e&&e==i&&a!="")||(c==e&&e==g&&c!="")){
document.getElementById("status").innerHTML="Game over";
click_check=false;
}
if(a!=""&&b!=""&&c!=""&&d!=""&&e!=""&&f!=""&&g!=""&&h!=""&&i!=""){
    document.getElementById("status").innerHTML="Game tie";
    click_check=false;
}
  }
  function restart(){
    temp=2;
    click_check=true;
    document.getElementById("status").innerHTML="Player 1 start with X";
    var a=document.getElementById("0").innerHTML="";
var b=document.getElementById("1").innerHTML="";
var c=document.getElementById("2").innerHTML="";
var d=document.getElementById("3").innerHTML="";
var e=document.getElementById("4").innerHTML="";
var f=document.getElementById("5").innerHTML="";
var g=document.getElementById("6").innerHTML="";
var h=document.getElementById("7").innerHTML="";
var i=document.getElementById("8").innerHTML="";
  }