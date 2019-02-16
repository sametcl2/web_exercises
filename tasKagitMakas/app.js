let userScore=0;
let compScore=0;
let userScoreElem=document.getElementById("user-score");
let compScoreElem=document.getElementById("comp-score");
const tas=document.getElementById("t");
const kagit=document.getElementById("k");
const makas=document.getElementById("m");
const smallUser="user".fontsize(3).sub(3);
const smallComp="comp".fontsize(3).sub(3);

tas.addEventListener('click',function(){
    oyna("t");
});
kagit.addEventListener('click',function(){
    oyna("k");
});
makas.addEventListener('click',function(){
    oyna("m");
});
let dizi=["t", "k", "m"];

function compRandom(){
    let deger=Math.floor(Math.random()*3);
    let compDeger=dizi[deger];
    return compDeger;
}

function oyna(userGiris){
    let compDeger=compRandom();
    durum(userGiris, compDeger);
}

function durum(userGiris, compDeger){
    if(userGiris+compDeger=="tm"||userGiris+compDeger=="kt"||userGiris+compDeger=="mt"){
        win(userGiris, compDeger);
    }
    else if(userGiris+compDeger=="tt"||userGiris+compDeger=="kk"||userGiris+compDeger=="mm"){
        draw(userGiris, compDeger);
    }
    else{
        lost(userGiris, compDeger);
    }
}

function win(userGiris, compDeger){
    let al=document.getElementById("baslik");
    al.innerHTML= convertToWord(userGiris)+smallUser+" "+convertToWord(compDeger)+"'ı"+smallComp+" yener. Kazandın!";
    userScore++;
    userScoreElem.innerHTML=userScore;
    document.getElementById(userGiris).classList.add("yesil");
    setTimeout(function(){
        document.getElementById(userGiris).classList.remove("yesil");
    },400);
}

function draw(userGiris, compDeger){
    let al=document.getElementById("baslik");
    al.innerHTML= "Berabere!"
    document.getElementById(userGiris).classList.add("gray");
    setTimeout(function(){
        document.getElementById(userGiris).classList.remove("gray");
    },400);
}

function lost(userGiris, compDeger){
    let al=document.getElementById("baslik");
    al.innerHTML=convertToWord(userGiris)+smallUser+" "+convertToWord(compDeger)+"'ı"+smallComp+" yener. Kaybettin :((";
    compScore++;
    compScoreElem.innerHTML=compScore;
    document.getElementById(userGiris).classList.add("red");
    setTimeout(function(){
        document.getElementById(userGiris).classList.remove("red");
    },400);
}

function convertToWord(letter){
    if(letter ==="t"){
        return "Taş";
    }else if(letter==="k"){
        return "Kağıt";
    }else{
        return "Makas";
    }
}






