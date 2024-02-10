//function to change from login to main blog page
function navigate_to_main_page(){
    //hide login
    document.getElementById("login_page").style.display = "none";

    //show main
    document.getElementById("blog_main").style.display = "block";
}

function login(){
    //stop the login page from loading
    event.preventDefault();

    //get password from html
    let user_input = document.getElementById("password").value;

    let correct_password = "1"
    //check password
    if (user_input === correct_password){
        //open blog page
        alert("Correct")
        navigate_to_main_page()
    } else{
        alert ("Incorrect password")
    }
    
}

