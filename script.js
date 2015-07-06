var count = 0;
function changecontent() {
		document.getElementById("image_frame").innerHTML = "<center><img width=300px height=300px src=\"./images/"+ count +".jpg\"></center>";
		count = (count + 1) % 6;
}

document.getElementById("image_frame").addEventListener("click", changecontent);