console.log("conetado");
let valueDisplay= document.querySelectorAll(".num");
let interval=5000;
console.log(valueDisplay);

valueDisplay.forEach((valueDisplay) =>{
    let inicioValor=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duracion= Math.floor(interval/endValue)
    
    
console.log(endValue)
    let tiempo =setInterval( function(){
      inicioValor ++;
valueDisplay.textContent=inicioValor;
if (inicioValor==endValue) {
    clearInterval(tiempo);
}
    });

    
});



