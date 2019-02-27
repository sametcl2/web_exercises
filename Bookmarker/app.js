document.getElementById('form').addEventListener('submit',bookmark);

function bookmark(){
    var siteName=document.getElementById('inputName').value;
    var siteUrl=document.getElementById('inputUrl').value;

    //Object oluşturma
    var bookmark={
        name:siteName,
        url:siteUrl
    }

    //Json'a gönderme. Array'a attım. Hepsini depolamak için. Depolayacağım için JSON'a dönüştürdüm.
    if(localStorage.getItem('bookmarks')===null){
        var bookmarks=[];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    } else {
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
}

function fetch(){
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    var results=document.getElementById("bookmarkResults");

    for(var i=0; i<bookmarks.length; i++){
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;

        results.innerHTML+='<div class=" p-4 d-flex ">'+
                            '<h3 class="mx-5">'+name+
                            '</h3>'+
                            '<a class="btn btn-primary" href="'+url+'">Visit</a>'+                        
                            '</div>';
    }
}

