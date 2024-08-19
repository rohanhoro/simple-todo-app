//----Initializes the counter variable
let count = 1;

//----This function checks if the input value is empty or not
function check() {
    var checkvalue = document.querySelector("input").value;
    if (checkvalue == "") {
        alert("Enter your Text");
        return false;
    }
    return true;
}
    



//----This function adds a new todo to the list
function addTodo() {
    //----Takes the input value
    const inputEL = document.querySelector("input");

    //----Creates new elements
    const newDiv = document.createElement("div");
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");

    //----Sets the attributes of the new elements
    newDiv.setAttribute("class", "list-item " + count);
    newDiv.setAttribute("id", "li-" + count);
    newButton.setAttribute("class", "delete-btn " + count);
    newButton.setAttribute("id", "delbtn-" + count);
    newButton.setAttribute("onclick", "deleteTodo(" + count + ")");

    //----Appends the new elements
    document.querySelector("ol").appendChild(newDiv);
    newDiv.appendChild(newLi);
    newDiv.appendChild(newButton);
    
    //----Gives the contents to the new elements
    newLi.innerHTML = inputEL.value;
    newButton.innerHTML = "X";

    //----CLears the input
    inputEL.value = "";

    //----Increments the counter variable 
    count = count + 1;
}


//----This function deletes the todo
function deleteTodo(index) {
    const delEl = document.getElementById("li-" + index);
    document.querySelector("ol").removeChild(delEl);

    count = count - 1;
}


