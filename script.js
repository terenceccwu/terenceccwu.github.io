var count = 0;
function changecontent() {
	if(count == 0) {
		document.getElementById("image_frame").innerHTML = "<center><h3>you have changed the countent!</h3></center>";
		count++;
	}else{
		document.getElementById("image_frame").innerHTML = "<center><h3>this is a div tag</h3></center>";
		count--;
	}
}

document.getElementById("image_frame").addEventListener("click", changecontent);