function completeTask(id){
    if (document.querySelector(`#${id} .complete-btn`).innerHTML == "Complete"){
        document.querySelector(`#${id} .complete-btn`).innerHTML = "Undo";
        document.querySelector(`#${id} .item-title`).style.textDecoration  = "line-through";
    }
    else {
        document.querySelector(`#${id} .complete-btn`).innerHTML = "Complete";
        document.querySelector(`#${id} .item-title`).style.textDecoration  = "none";
    }
}
function deleteTask(id){

    var item = document.querySelector(`#${id}`);
    item.parentNode.removeChild(item);  
}
function addTask(){
    if (document.querySelector(`#new-task`).value){

        var text = document.querySelector(`#new-task`).value;
    
        var newId = document.querySelectorAll(`.task-item`).length;
    
        var newCompleteBtn = document.createElement("button");
        newCompleteBtn.setAttribute("class","btn btn-outline-secondary complete-btn");
        newCompleteBtn.setAttribute("onclick","completeTask(this.parentElement.id)");
        newCompleteBtn.innerHTML = "Complete";
        
        var newDeleteBtn = document.createElement("button");
        newDeleteBtn.setAttribute("class","btn btn-outline-secondary delete-btn");
        newDeleteBtn.setAttribute("onclick","deleteTask(this.parentElement.id)");
        newDeleteBtn.innerHTML="Delete";
        
        var newTextTitle = document.createElement("span");
        newTextTitle.setAttribute("class","font-weight-bold text-secondary item-title");
        newTextTitle.innerHTML = text ;
    
        var newLi = document.createElement("LI");
        newLi.setAttribute("class","task-item d-flex");
        newLi.setAttribute("id",`item-${newId}`);
        newLi.appendChild(newCompleteBtn);
        newLi.appendChild(newDeleteBtn);
        newLi.appendChild(newTextTitle);
    
        document.getElementById('item-list').appendChild(newLi);
    
        document.querySelector(`#new-task`).value = "";
    }
}