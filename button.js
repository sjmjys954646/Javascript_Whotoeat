const body = document.querySelector("body"),
    selectorimg = body.querySelector(".selectorimg"),
    selectorname = body.querySelector(".selectorname")
    button = body.querySelector(".btn");

const indexnum = "INDEX"
let index = 0;
const person = ["Hyunseok", "Yunsu"];

function showtext()
{
    selectorname.innerText = `${person[index]}!`;
}

function ShowImage()
{
    let image = new Image();
    image.src = `Images/${index+1}.png`;
    selectorimg.appendChild(image);
    showtext();
}

function Submit(event)
{
    if(index == 1)
    {
        index = 0;
        localStorage.setItem(indexnum, index);
    }
    else if(index == 0)
    {
        index = 1;
        localStorage.setItem(indexnum, index);
    }
    location.reload();
}

function Pressbutton()
{
    let today = localStorage.getItem(indexnum);  
    if(today == null)
    {
        today = 0;
    }
    index = parseInt(today);
    ShowImage(); 
    button.addEventListener("click",Submit);
}

function init()
{
    Pressbutton();
}

init();