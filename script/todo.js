var list = document.getElementById("to-do-list");
var items = list.getElementsByTagName('span');
var inputs = list.getElementsByTagName('input');

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", edit);
	inputs[i].addEventListener("blur", finish_edit);
	inputs[i].addEventListener("keypress", itemkeypress);
}

function edit () {
	this.className = "hide";
	var input_field = this.nextElementSibling;
	input_field.className = "";
	input_field.setSelectionRange(0,input_field.value.length);
}

function finish_edit () {
	this.previousElementSibling.innerHTML = this.value;
	this.className = "hide";
	this.previousElementSibling.className = "";
}

function itemkeypress (event) {
	if(event.which == 13) {
		finish_edit.call(this);
	}
}