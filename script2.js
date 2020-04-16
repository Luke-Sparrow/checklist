var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("masterlist");
var li = document.getElementsByClassName("item");
var deleteButton = document.getElementsByClassName("delete");

var inputLength = input.value.length;


// Adding the remove parent action to existing Delete buttons
function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}

for (var i = deleteButton.length - 1; i >= 0; i--) {
	deleteButton[i].addEventListener("click", removeParent, false);
}

// Toggling the "done" class since the var li looks for the item class

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}




// adding new items to the list on enter press or button click
function createListItem(){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	li.classList.add("item");
	ul.appendChild(li);
	// Use below to test that the event listener is working
	// console.log(input.value);
	input.value = "";
}

function addAfterClick(){
	if (inputLength > 0) {
		createListItem();
	}
}

function addAfterEnter(event) {
	if (inputLength > 0 && event.keyCode === 13) {
		createListItem();
	}
}


button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterEnter);

// li.addEventListener("click", toggleDone);