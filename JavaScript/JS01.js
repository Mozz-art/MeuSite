const el =document.querySelector("#txtHome")
const text = "Hello World, my name is Bruno Corona Braga, you can call me Mozzart, i'm a developer and designer from Brazil."
const interval =100;

function showText(el, text, interval){

    const char =text.split("").reverse();

    const typer =setInterval(() =>{

        if(!char.length){

            return clearInterval(typer);
        }

        const next =char.pop();
        
        el.innerHTML += next;


    }, interval);


}

showText(el, text, interval);



var position =document.documentElement;
position.addEventListener("mousemove", e =>{
position.style.setProperty('--x', e.clientX + "px");



})



