let item1=document.getElementById("item1")
let item2=document.getElementById("item2")
let item3=document.getElementById("item3")
let item5=document.getElementById("item5")
let item4=document.getElementById("item4")
item1.addEventListener('click',(event)=>{
    event.target.style.backgroundColor="red";
    event.target.style.color="black";
    event.target.style.fontSize="2rem";
    event.target.innerText="Clicked";

})


item2.addEventListener('dblclick', (event)=> {
    event.target.style.backgroundColor="aqua";
    event.target.style.color="black";
    event.target.style.fontSize="2rem";
    event.target.innerText=" Clicked";
});

item3.addEventListener('mousedown', (event)=> {
    event.target.style.backgroundColor="green";
    event.target.style.color="black";
    event.target.style.fontSize="2rem";
    event.target.innerText=" Down!!";
});

item4.addEventListener('mouseout', (event)=> {
    event.target.style.backgroundColor="orange";
    event.target.style.color="black";
    event.target.style.fontSize="2rem";
    event.target.innerText=" Shit out!!";
});

item5.addEventListener('mouseenter', (event)=> {
    event.target.style.backgroundColor="violet";
    event.target.style.color="black";
    event.target.style.fontSize="2rem";
    event.target.innerText=" Hello!!";
});