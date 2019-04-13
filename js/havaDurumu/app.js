let input=document.getElementById("input");
let button=document.getElementById("button");
let sehir=document.getElementById("sehir");
let havaDurumu=document.getElementById("havaDurumu");
const key="be9453bc75f24a8b34e7bd73d6ff8f02";



button.addEventListener("click", al)

function al() {
    let url='https://api.darksky.net/forecast/be9453bc75f24a8b34e7bd73d6ff8f02/37.8267,-122.4233';
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        sehir.innerHTML=json.timezone;
    })
}


