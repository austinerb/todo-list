const container = document.querySelector("#container");
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", addItem);

function addItem() {
    // create elements
    const item = document.createElement("div");
    const desc = document.createElement("p");
    const doneBtn = document.createElement("button");

    item.classList.add("todo-item");

    // add description from user
    let response = prompt("Enter item description:");
    desc.innerHTML = response;

    doneBtn.addEventListener("click", deleteItem);

    doneBtn.innerHTML = "Done";

    // apend elements to the container
    item.appendChild(desc);
    item.appendChild(doneBtn);
    container.appendChild(item);
}

function deleteItem() {
    container.removeChild(this.parentElement);
}