// replace this entire code block with the config found in the firebase dashboard
// for your created database
 var config = {
    apiKey: "AIzaSyDAIA3i6UJQeoXooaWK4ra0PEXsjyfLWaA",
    authDomain: "think-summit-2017-project.firebaseapp.com",
    databaseURL: "https://think-summit-2017-project.firebaseio.com",
    projectId: "think-summit-2017-project",
    storageBucket: "think-summit-2017-project.appspot.com",
    messagingSenderId: "364498943597"
  };
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
$(function(){
	$("#add-button").on('click', function(){
		var value = $('#new-item').val(); 
		//grab a reference to a todos item list in firebase and then create a new item that we set data on 
		var item = database.ref("/todo-items").push(); 
		item.set( { value: value } )

	}) 




//grab a refernce todo items key and... 

	database.ref("/todo-items").on("value", function(snapshot){
		
		var list= $('#list-items'); 
		list.empty(); 
		console.log(snapshot.val()); 

		snapshot.forEach(function(listItem){
			var item = listItem.val().value; 
			list.append('<li data-id="'+ listItem.key +'">' + item + ' <a href ="#" class="remove">Remove</a></li>'); 

		})

	})

$('#list-items').on('click', 'li a', function(){
	var itemId = $(this).parent().data('id');
	database.ref("/todo-items/" + itemId).remove(); 

}); 
})
