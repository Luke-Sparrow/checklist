var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("masterlist");

var inputLength = input.value.length;

function createListItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	console.log(input.value);
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