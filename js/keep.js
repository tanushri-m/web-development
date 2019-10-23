var inputBar = document.getElementById("input-bar");
var addButton = document.getElementById("add-button");
var pendingItems = document.getElementById("pending-items");
var completedItems = document.getElementById("completed-items");

var count = 0;
var num = document.getElementById("number");

addButton.addEventListener("click", () => {
    if(inputBar.value.length == 0){
        return;
    }

    addPendingItem(inputBar.value);
    clearInput();
});

function clearInput(){
    inputBar.value = "";
}

function addPendingItem(taskName){
    var item = createTask(taskName, false, function(){
        addCompletedItem(taskName);
        item.remove();
    });
    pendingItems.appendChild(item);
}

function addCompletedItem(taskName){
    var item = createTask(taskName, true, function(){
        addPendingItem(taskName);
        item.remove();
    });
    completedItems.appendChild(item);
}

function createTask(value, taskStatus, callback){
    var container = document.createElement("div");
    var data = document.createElement("input");
    var text = document.createElement("span");
    text.textContent = value;

    data.setAttribute('type','checkbox');
    if(taskStatus == true) {
        data.setAttribute('checked', "");   
        text.innerHTML =  value.strike();
    }

    data.addEventListener("click", function(){
        callback();
    });
    
    container.appendChild(data);
    container.appendChild(text);
    return container;
}