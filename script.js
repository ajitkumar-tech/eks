function login(){

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="admin" && password=="admin123")
{
document.getElementById("message").innerHTML="Welcome to Mind Circuit 🚀";
}
else
{
document.getElementById("message").innerHTML="Invalid Username or Password";
}

}
