

// take data from the user 

function addData()
{
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pwd").value;
    var userName = document.getElementById("user").value;


//store data in localstorage

localStorage.setItem('userEmail',email);
localStorage.setItem('userPwd',pass);
localStorage.setItem('userName',userName);

}