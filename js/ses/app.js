var button=document.getElementById("button");
var result=document.getElementById("result");
var bg = document.getElementById("body");

var grammar = '#JSGF V1.0; grammar colors; public <color> = kırmızı | sarı | yeşil | mavi ;'
var recognition = new  webkitSpeechRecognition();
var speechRecognitionList = new webkitSpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'tr-TR';
recognition.continuous=false;
recognition.interimResults = true;
recognition.maxAlternatives = 1;

var bg = document.querySelector('html');

button.onclick= function(){
    recognition.start();
    console.log("progress started...");
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  console.log(color);
  result.innerHTML=color;
  if(color==="kırmızı"){
    bg.style.backgroundColor="red";
  }
  else if(color==="Sarı")
    bg.style.backgroundColor="yellow";
  else if(color==="yeşil")
    bg.style.backgroundColor="green";
  else if(color==="mavi")
    bg.style.backgroundColor="blue";
  else if(color==="mavi")
    bg.style.backgroundColor="blue";
  else if(color==="siyah")
    bg.style.backgroundColor="black";
  else if(color==="turuncu")
    bg.style.backgroundColor="orange";
  else if(color==="mor")
    bg.style.backgroundColor="purple";
  else if(color==="Turkuaz")
    bg.style.backgroundColor="turquoise";
}

recognition.onerror=function(event){
  result.innerHTML=event;
}