// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"

// Initialize your Firebase app
//firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();
var submit_sign_up = function () {


// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
	var sign_up = myFirebase.child("sign_up");
	var full_name = $("#full_name").val();
  	var email = $("#email").val();
  	var password = $("#password").val(); 
  	var classroom = $("#classroom").val();

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
 sign_up.push({
    "full_name": full_name,
    "email": email,
    "password": password,
    "classroom": classroom,
  });
  };
  
$(window).load(function () {
$("#sign_up").submit(submit_sign_up);
});

function log_in () {

}