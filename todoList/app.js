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

function deletee(isim){
    var sill=JSON.parse(localStorage.getItem("gorev"));
    for(var i=0; i<sill.length; i++){
       if(sill[i].gorev==isim){
            sill.splice(i,1);  
       }
    }
    localStorage.setItem("gorev",JSON.stringify(sill));
    show();
}

function show(){
    var gorevs=JSON.parse(localStorage.getItem("gorev"));
    var result=document.getElementById("show");
    result.innerHTML="";
    for(var i=0; i<gorevs.length; i++){
        var yeniGorev=gorevs[i].gorev;
        result.innerHTML+='<li class="list-group-item d-flex justify-content-between m-2 p-4">'+
                          '<h4 class="align-middle">'+yeniGorev+'</h4>'+
                          '<button class="btn btn-primary" id="sil" onclick="deletee(\''+yeniGorev+'\')">Done!</button>'+
                          '</hr>'+
                          '</li>';
    }
}