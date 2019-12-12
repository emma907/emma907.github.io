$(document).ready(function() {


	$('#info').hide().delay(3000).fadeIn(1000);
	
	$('#pop').hide().delay(4000).fadeIn(2000);

	/*
	let cityCentre = $("#city1")[0];
	$("#one").mouseenter(function() {
			cityCentre.play();
		});
	*/

});

//var x = setTimeout (population, 3000);
var num = 9789233; 
//var time = setInterval(population, 500);
/*
for (i=0; i>10; i++) {
	document.getElementById("#pop").innerHTML = "Population:" +(num+=1); 
}
*/

var population = document.getElementById("pop");
var background = document.getElementById("grid");
var count = 0;

background.onmouseover = function() {
  count += 1;
  population.innerHTML = "Population: " + num + count;
}

window.onresize = function(){ location.reload(); }