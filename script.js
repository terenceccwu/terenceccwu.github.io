//preload images
var no_of_image = 6;
var images = new Array()

for(var i = 0; i < 6 ; i++)
{
	images[i] = new Image()
	images[i].src = "./images/" + i.toString() + ".jpg";
	console.log(images[i]);
}



var count = 0;
function changecontent() {
		var x = document.getElementById("the_image");
		x.setAttribute("src","./images/" + count + ".jpg");
		count = (count + 1) % 6;
}

document.getElementById("the_image").addEventListener("click", changecontent);