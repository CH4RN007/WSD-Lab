function validateForm() {

    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";

    // Get form values
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    let gender = document.getElementsByName("gender");

    let valid = true;

    // Name validation
    let namePattern = /^[A-Za-z ]+$/;

    if(fname == "")
    {
        document.getElementById("fnameError").innerHTML = "First Name is required";
        valid = false;
    }
    else if(!namePattern.test(fname))
    {
        document.getElementById("fnameError").innerHTML = "Only alphabets allowed";
        valid = false;
    }

    if(lname == "")
    {
        document.getElementById("lnameError").innerHTML = "Last Name is required";
        valid = false;
    }
    else if(!namePattern.test(lname))
    {
        document.getElementById("lnameError").innerHTML = "Only alphabets allowed";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email == "")
    {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if(!emailPattern.test(email))
    {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        valid = false;
    }

    // Password validation
    if(password.length < 8)
    {
        document.getElementById("passwordError").innerHTML = "Minimum 8 characters";
        valid = false;
    }

    // Confirm password
    if(confirmPassword != password)
    {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    // Gender validation
    let selected = false;

    for(let i = 0; i < gender.length; i++)
    {
        if(gender[i].checked)
        {
            selected = true;
        }
    }

    if(!selected)
    {
        document.getElementById("genderError").innerHTML = "Select Gender";
        valid = false;
    }

    // Success
    if(valid)
    {
        alert("Registration Successful!");
    }

    return valid;
}

function validateGenres()
{
    let genres = document.getElementsByName("genre");

    let selected = false;

    for(let i = 0; i < genres.length; i++)
    {
        if(genres[i].checked)
        {
            selected = true;
        }
    }

    if(!selected)
    {
        alert("Please select at least one genre");
        //document.getElementById("genreError").innerHTML = "Please select at least one genre";
        return false;
    }

    alert("Genres selected successfully!");
    return true;
}