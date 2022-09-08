let red = document.getElementById("myh2");
red.addEventListener("click", changeToRed);

let hover = document.getElementById("myP1");
hover.addEventListener("mouseleave", hoverOver);

let changeT = document.getElementById("myP");
changeT.addEventListener("mouseover", changeText);

console.log("hi thre");

function changeToRed()
{
    console.log("hi");
    red.style.color = 'red';
}

function changeText()
{
    changeT.innerHTML = "New text here!";
}

function hoverOver()
{
    hover.style.backgroundColor = 'pink';
}