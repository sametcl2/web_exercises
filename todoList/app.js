var input=document.getElementById("input");
var sil=document.getElementById("sil");
var btn=document.getElementById("btn");

btn.addEventListener("click", function(){
    var task=input.value;
    var tut={
        gorev:task
    };
    ekle(tut);
});

function ekle(gorev){
    if(localStorage.getItem("gorev")==null){
        var gorevler=[];
        gorevler.push(gorev);
        localStorage.setItem("gorev",JSON.stringify(gorevler));
    }else{
        var gorevler=JSON.parse(localStorage.getItem("gorev"));
        gorevler.push(gorev);
        localStorage.setItem("gorev",JSON.stringify(gorevler));
    }
    input.value="";
    show();
}

function switchh(isim){
    var sill=JSON.parse(localStorage.getItem("gorev"));
    for(var i=0; i<sill.length; i++){
       if(sill[i].gorev==isim){
            sill.splice(i,1);  
            localStorage.setItem("gorev",JSON.stringify(sill));
       }
    }
    if((localStorage.getItem("done")==null)){
        var done=[];
        done.push(isim);
        localStorage.setItem("yapildi",JSON.stringify(done));
    }else{
        var done=JSON.parse("yapildi");
        done.push(isim);
        localStorage.setItem("yapildi",JSON.stringify(done));
    }
    show();
    bitti();
}

function bitti(){
    var ikincideger=JSON.parse(localStorage.getItem("yapildi"));
    var result=document.getElementById("bitti");
    result.innerHTML="";
    for(var i=0; i<ikincideger.length;i++){
        var ikinciler=ikincideger[i];
        result.innerHTML+='<li class="list-group-item d-flex justify-content-between m-2 p-4">'+
        '<h4 class="align-middle">'+ikinciler+'</h4>'+
        '<button class="btn btn-danger" id="deletebtn" onclick="sill(\''+ikinciler+'\')">Sil!</button>'+
        '</li>';
    }
}

function sill(silbunu){
    var tut=JSON.parse(localStorage.getItem("yapildi"));
    for(var i=0; i<tut.length;i++){
        if(tut[i]==silbunu){
            tut.splice(i,1);
            localStorage.setItem("yapildi",JSON.stringify(tut)); 
        }
    }
    bitti();
}

function show(){
    var gorevs=JSON.parse(localStorage.getItem("gorev"));
    var result=document.getElementById("show");
    result.innerHTML="";
    for(var i=0; i<gorevs.length; i++){
        var yeniGorev=gorevs[i].gorev;
        result.innerHTML+='<li class="list-group-item d-flex justify-content-between m-2 p-4">'+
                          '<h4 class="align-middle">'+yeniGorev+'</h4>'+
                          '<button class="btn btn-primary" id="sil" onclick="switchh(\''+yeniGorev+'\')">Done!</button>'+
                          '</li>';
    }
}