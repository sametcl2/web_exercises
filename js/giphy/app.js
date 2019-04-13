let img=document.getElementById('img');
document.getElementById('button').addEventListener("click", al); 

function al(){
    let q= document.getElementById('inputt').value;
    let url ='https://api.giphy.com/v1/gifs/search?api_key=2M8gZm2kXZs5ZpgtWthQ19Vv8AyFyR1G&q='+q+'&limit=101&offset=0&rating=G&lang=en';
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        let random=Math.floor(Math.random()*100);
        let al=json.data[random].images.original.url;
        img.innerHTML="<img src='"+al+"' class='mt-5 ' >";
    })
}