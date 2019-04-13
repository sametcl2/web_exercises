document.getElementById('form').addEventListener('submit',bookmark);

function bookmark(){
    var siteName=document.getElementById('inputName').value;
    var siteUrl=document.getElementById('inputUrl').value;

    if(!siteName || !siteUrl){
        alert("Hatalı giriş");
        return false;
    }
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert("Hatalı giriş")
        return false;
    }

    //Object oluşturma
    var bookmark={
        name:siteName,
        url:siteUrl
    }

    //Json'a gönderme. Array'a attım hepsini depolamak için. Depolayacağım için JSON'a dönüştürdüm.
    if(localStorage.getItem('bookmarks')===null){
        var bookmarks=[];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    } else {
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetch();
}

function deletee(url){
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0; i<bookmarks.length;i++){
        if(bookmarks[i].url==url){
            bookmarks.splice(i,1);  
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetch();
}

function fetch(){
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    var results=document.getElementById("bookmarkResults");

    results.innerHTML="";
    for(var i=0; i<bookmarks.length; i++){
       
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;

        results.innerHTML+='<div class="d-flex justify-content-between ">'+
                            '<div class=" p-4">'+
                            '<h3>'+name+ '</h3>'+  
                            '</div>'+
                            '<div class=" p-4">'+
                            '<a class="btn btn-primary mx-3 " href="'+url+'">Visit</a>'+ 
                            '<a class="btn btn-danger mx-3" onclick="deletee(\''+url+'\')" href="#">Delete</a>'+ 
                            '</div>'+
                            '</div>'+
                            '<hr>';
    }
}

