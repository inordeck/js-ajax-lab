console.log("are we working?");
// get all the data and test
$.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
    });


// STEP 1
$.ajax({ // get all the data
	url: 'https://ga-cat-rescue.herokuapp.com/api/cats', // from api
	method: 'GET', // method
 	dataType: 'json', // type
 	success: (function (data) { // create a function once we have it
 	data.forEach(function(el){ // for loop to put the data into the li
 		$("#cats").append("<li>" + el.name + " - " + el.note + "</li>"); // what we want from the function in the li
 		});
 	})
});


// STEP 2
$(document).ready(function(){ // get document ready to do some work
	$("form").on("submit", function(event) { // look for click
		event.preventDefault(); // don't allow the default entries
		console.log("clicked"); // check that it's clickin'
		var newCat = $("#cat-name").val(); // create var for name value
		var newNote = $("#cat-note").val(); // create var for note value

		var newCatObject = { // create ne object array
			name: newCat, // add name to array
			note: newNote // add note to array
		};
		// post to api and stringify it for the database
		$.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(newCatObject))
			.done(function(data) {
				console.log(data);
				var newCatData = JSON.parse(data); // parse the data in order to add it to the list on th page
				$('#cats').append('<li>' + newCat + " - " + newNote + '</li>'); // append the list with the new cat from the form
		});
	});
});

// vital in this lab:
// event.preventDefault(); 




