const xhr = new XMLHttpRequest();

function loadDoc(value) {
	xhr.onload = function() {
    document.getElementById("contentsw").innerHTML = this.responseText;
    }
	switch (value) {
		case "A":
			xhr.open("GET", "content/1.html", true);
		break;
		case "B":
			xhr.open("GET", "content/2.html", true);
		break;
		case "C":
			xhr.open("GET", "content/3.html", true);
		break;
		default:
			xhr.open("GET", "content/error.html", true);
	}
	xhr.send(); 
}