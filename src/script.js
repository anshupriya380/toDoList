let input = document.getElementById("input");
let list = document.getElementById("list");

input.addEventListener("change", (e) => {
    let element = document.createElement("li");
    let elementData = document.createTextNode(e.target.value);
    element.appendChild(elementData);
    element.classList.add("flex");

    // Image for delete
    let deleteImage = document.createElement("img");
    deleteImage.src = "./images/delete.svg";
    deleteImage.classList.add("size-10");
    element.appendChild(deleteImage);

    // Image for tick
    let tickImage = document.createElement("img");
    tickImage.src = "./images/tick.svg";
    tickImage.classList.add("size-10");
    element.appendChild(tickImage);

    // Append to ul
    list.appendChild(element);

    // Reset input value
    e.target.value = "";
});

list.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        if (e.target.src.endsWith("delete.svg")) {
            list.removeChild(e.target.parentElement);
        } else if (e.target.src.endsWith("tick.svg")) {
            e.target.parentElement.classList.add("line-through");
        }
    } else {
        console.log("You have clicked on li");
    }
});
