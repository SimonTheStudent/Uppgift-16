document.getElementById("cookie").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;

document.getElementById("java").innerHTML = navigator.javaEnabled();

if(navigator.language == "sv-SE"){
	document.getElementById("sprak").innerHTML = "Valt språk är svenska";
}
else{
	document.getElementById("sprak").innerHTML = "Valt språk är intesvenska";
}