

function ready(){
	
	var header = document.GetElementById('header');
    var btn   = document.GetElementById('button.toggle-nav');
	btn.addEventListener("click", function(){header.toggleClass("active")});
	//console.log("mensaje click");
}