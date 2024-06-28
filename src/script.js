let input=document.getElementById("input");
let list=document.getElementById("list");

input.addEventListener("change",(e)=>{
    let element = document.createElement("li");
    let elementData = document.createTextNode(e.target.value);
    element.appendChild(elementData);
    element.classList.add("flex");
    // image
    let deleteimage = document.createElement("img");
    deleteimage.src = "./images/delete.svg";
    deleteimage.classList.add("size-10");
    element.appendChild(deleteimage);
    // apped to ul
    list.appendChild(element);
    // after pressing enter value will be zero
    e.target.value="";

    let tickimage = document.createElement("img");
    tickimage.src = "./images/tick.svg";
    tickimage.classList.add("size-10");
    element.appendChild(tickimage);
    list.appendChild(element);
})

list.addEventListener('click',(e)=>{

    if(e.target.src==="http://127.0.0.1:5500/src/images/delete.svg"){

list.removeChild(e.target.parentElement)
    }
    else if(e.target.src==="http://127.0.0.1:5500/src/images/tick.svg"){
        
       e.target.parentElement.classList.add("line-through")
    }
    else{
        console.log("you have clicked on li");
    }
})