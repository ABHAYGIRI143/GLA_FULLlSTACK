let content=document.getElementById("content");
let butns=document.querySelectorAll("button");
let container=document.getElementById('ColorSelector');
for(let btn of butns){
    btn.classList.remove("active");
    btn.addEventListener('click',(event)=>{
      switch(event.target.innerText){
        case 'Hex Color':
            container.style.backgroundImage="linear-gradient(#FF5733, #C70039)";
            content.innerHTML="linear-gradient(#FF5733, #C70039)";
            break;
        case 'RGB color':
            container.style.backgroundImage="linear-gradient(rgb(72, 219, 251), rgb(0, 160, 239))";
            content.innerHTML="linear-gradient(rgb(72, 219, 251), rgb(0, 160, 239))";
            break;
        case 'HSL color':
            container.style.backgroundImage= "linear-gradient(hsl(45, 100%, 70%), hsl(330, 100%, 70%))";
            content.innerHTML= "linear-gradient(hsl(45, 100%, 70%), hsl(330, 100%, 70%))";
            break;
        case 'HSLA color':
            container.style.backgroundImage= "linear-gradient(hsla(90, 100%, 60%, 0.9), hsla(120, 40%, 50%, 0.9))";
            content.innerHTML= "linear-gradient(hsla(90, 100%, 60%, 0.9), hsla(120, 40%, 50%, 0.9))";
            break;
        case 'Color name':
            container.style.backgroundImage="linear-gradient(pink, purple)";;
            content.innerHTML="linear-gradient(pink, purple)";
            break;
        case 'Gradient':
              container.style.backgroundImage=" linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)";
            content.innerHTML= "linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)";
            break;
      }
      btn.classList.add("active");

    })
}

