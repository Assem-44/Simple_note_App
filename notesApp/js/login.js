

function checkData(){
    var enterUser = document.getElementById('user').value;
    var enterPwd = document.getElementById('pwd').value;
    

   var getUser = localStorage.getItem('userName');
   var getPwd = localStorage.getItem('userPwd');


    if(enterUser == getUser)
    {
        if(enterPwd == getPwd)
        {
            window.location.assign("../noteApp.html");

            alert("login successful");
        }
        else
        {
            alert("wrong password");
        
        }
    }
    else
    {
        alert("invalid details");
    }

}