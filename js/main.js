var children = document.getElementsByClassName("st0");
document.getElementById("exit").style.transformOrigin = document.getElementById("exit").cx.baseVal.valueAsString + "px" + " " + document.getElementById("exit").cy.baseVal.valueAsString + "px";
document.getElementById("exit").addEventListener("click", function() {
	if(activeSlide != "") {
		document.getElementById(activeSlide).style.transform = "";
		document.getElementById("exit").style.opacity = ""
		document.getElementById("exit").style.transform = ""
		activeSlide = "";
	}
});

var activeSlide = ""

for(var i = 0; i < children.length; i++) {
  document.getElementById(children[i].attributes.value.nodeValue).style.transformOrigin = children[i].cx.baseVal.valueAsString + "px" + " " + children[i].cy.baseVal.valueAsString + "px";
  // if(children[i].nextElementSibling) {
  // 	children[i].nextElementSibling.style.transformOrigin = children[i].cx.baseVal.valueAsString + "px" + " " + children[i].cy.baseVal.valueAsString + "px";
  // }
  // let newImg = document.createElement("img");
  // newImg.src = images[i];
  // newImg.style.top = children[i].cx.baseVal.valueAsString + "px";
  // newImg.style.left = children[i].cy.baseVal.valueAsString + "px";
  // document.body.appendChild(newImg);
  // console.log(children[i].attributes.value.nodeValue)
  var openSlide = init(i)
  children[i].addEventListener("click", openSlide);

}

function open(slide) {
	document.getElementById(slide).style.transform = "scale(0.8)";
	document.getElementById(slide).style.opacity = "1";
	document.getElementById("exit").style.opacity = "1";
	document.getElementById("exit").style.transform = "scale(1)";
	// var slideElements = document.getElementById(slide).children
	// for(var i = 0; i < slideElements.length; i++) {
	// 	var showItem = show(slideElements[i]);
	// 	setTimeout(showItem, 40 * i)
	// }
	activeSlide = slide;
}
// function show(item) {
// 	return function() {
// 		item.style.opacity = "1";
// 		item.style.transform = "scale(1)";
// 	}
// }

function init(i) {
	let item = children[i];
	return function() {
		open(item.attributes.value.nodeValue);
	}
}