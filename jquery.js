console.log("hi");

// Selectors

// $("h1").hide();
// $("#heading1").hide();
// $(".heading2").hide();
// $("span").css("color", "red");
// $("ul#list").css("list-style", "none");
// $(":text").hide();
// $('[href="http://google.com"]').css("color", "green");
// $("*").hide();


// ************************************************************************


// MOUSE Events

$(document).ready(function() {
// 	$("#btn1").click(function(){
// 	alert("Button Clicked");
// });

// $("#btn1").click(function() {
// 		$(".para1").hide();
// 	});
// $("#btn2").click(function() {
// 	$(".para1").show();
// });

// $("#btn1").dblclick(function() {
// 		$(".para1").toggle();
// 	});

// $("#btn1").hover(function() {
// 		$(".para1").toggle();
// 	});

// $("#btn1").mousemove(function() {
// 	$(".para1").toggle();
// });

// $("#btn1").mouseup(function() {
// 	$(".para1").toggle();
// });

// $("#btn1").mousedown(function() {
// 	$(".para1").toggle();
// });

// $("#btn1").click(function(e) {
// 	// alert("the id is: " + e.currentTarget.id);
// 	// alert("the innerHTML is: " + e.currentTarget.innerHTML);
// 	alert("the className is: " + e.currentTarget.className);
// });

// $(document).mousemove(function(e){
// 	console.log("Coords: Y: " + e.clientY + "X: " + e.clientX);
// });

// $(document).mousemove(function(e){
// 	$("#coords").html("Coords: Y: " + e.clientY + " X: " + e.clientX);
// });

$('.field').focus(function() {
	$(this).css("background", "pink");
});

$('.field').blur(function() {
	$(this).css("background", "white");
});

// $("select").change(function() {
// 	alert("Changed");
// });

$("select").change(function(e) {
	alert("You changed gender to: "+e.target.value);
});

$("#form").submit(function(e) {
	e.preventDefault();
	const name = $("input#name").val();
	console.log(name);
});


});

