let celcius=document.querySelector("#celcius > input");
let fahren=document.querySelector("#fahren > input");
let kelvin=document.querySelector("#kelvin > input");

celcius.addEventListener("input", () =>{
  
    let celciusDeger=parseFloat(celcius.value);
    let fahrenDeger=celciusDeger*(9/5)+32;
    let kelvinDeger=celciusDeger+273.15;
  
    fahren.value=fahrenDeger;
    kelvin.value=kelvinDeger;
});

fahren.addEventListener("input", () =>{
  
    let fahrenDeger=parseFloat(fahren.value);
    let celciusDeger=fahrenDeger-32 * (5/9);
    let kelvinDeger=(fahrenDeger+459.67)*5/9;
  
    celcius.value=celciusDeger;
    kelvin.value=kelvinDeger;
});

kelvin.addEventListener("input", () => {

    let kelvinDeger=parseFloat(kelvin.value);
    let celciusDeger=kelvinDeger-273.15;
    let fahrenDeger=9/5*(kelvinDeger-273)+32;

    celcius.value=celciusDeger;
    fahren.value=fahrenDeger;
});