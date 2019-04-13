let open=false;
let correct=true;
let win=false;
let lose=false;
let dizi=[];
let userDizi=[];

$("#check").on("change" , () => {
    if($("#check").is(":checked")){
        $(".turn").css("color", "red").html(" - ");
        open=true;
    } else{
        $(".turn").css("color", "red").html(" ");
        open=false;
        clearColor();
    }
});

$(".start").on("click", start);

function start() {
    if(open==true){
        $(".turn").html("1");
        play();
    }
}

function play(){
    for(let i=0; i< 20; i++){
        dizi.push(Math.floor(Math.random()*4)+1);
    }
    dizi[0]=1;
    if(dizi[0] == 1){
        console.log("fdsfs");
        $("#clip1").play;
        $(".solUst").css("background-color", "lightgreen");
    }
}

function one(){
   
}

function two(){
    $("#clip2").play;
    $(".solAlt").css("background-color", "lightblue");
}

function three(){
    $("#clip3").play;
    $(".sagUst").css("background-color", "lightred");
}

function four() {
    $("#clip4").play;
    $(".sagAlt").css("background-color", "yellow");
}
function clearColor(){
    $(".solUst").css("background-color", "darkgreen");
    $(".solAlt").css("background-color", "darkblue");
    $(".sagUst").css("background-color", "darkred");
    $(".sagAlt").css("background-color", "rgb(168, 168, 34)");
}
function ligthColors(){
    $(".solUst").css("background-color", "lightgreen");
    $(".solAlt").css("background-color", "lightblue");
    $(".sagUst").css("background-color", "lightred");
    $(".sagAlt").css("background-color", "yellow");
}