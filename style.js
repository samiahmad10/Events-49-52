function create()
{
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var pass1= document.getElementById("pass1").value;
    var pass2= document.getElementById("pass2").value;
    var emailpattern ="[a-zA-Z0-9_.!$-]{3,15}[@]{1}[a-zA-Z]{5}[.]{1}[a-z]{3}";
    
    if(name=="")
    {
        alert("Please Enter Your First Name");
    }
    else if(email=="")
    {
        alert("Please Enter Email");
    }
    else if(pass1=="")
    {
        alert("Please Enter Password");
    }
    else if(pass2=="")
    {
        alert("Please Enter Confirm Password");
    }
    else
    {
        if(!email.match(emailpattern))
        {
            alert("You Entered Invalid Email")
        }
        else
        {
            if(pass1==pass2)
            {
                alert("Your Account Has Been Created");
            }
            else
            {
                alert("Please Entered two Different Passwords");
            }
        }
    }
}