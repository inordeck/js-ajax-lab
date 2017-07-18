console.log("are we working?");


$(function() {
// STEP 1
	$.get('https://ga-cat-rescue.herokuapp.com/api/cats')
 	.done(function(data){
    	console.log(data);
//    JSON.parse(jsonString);
//     console.log("jsonString");
  	});

	$("#cats").append('<li>testeroni</li>');

	// STEP 2
$('type', 'submit').click(function() {
	alert("you clicked a button");
	});
});

