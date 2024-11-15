function signup() {
    const Username = document.getElementById('signupusername').value;
    const Password = document.getElementById('signuppassword').value;

    //check if Username or Password fields are empty
    if (Username.trim() ==='' || Password.trim() === ''){
        alert('please enter both username and password');
        return; //stop further excution if fields are empty 
    }

 //save user data to session storage
 sessionStorage.setItem('Username',Username);
 sessionStorage.setItem('Password',Password)

 alert('Sign up successfull');
 document.getElementById('signupusername').value ='';
 document.getElementById('signuppassword').value ='';
 
 // Redirect to the login page after successfull signup
 window.location.href ='login 1.html';
}


















function Login() {
    const Username = document.getElementById('LoginUsername').value;
    const Password = document.getElementById('LoginPassword').value;

    //check if Username or Password fields are empty
    if (Username.trim() ==='' || Password.trim() === ''){
        alert('please enter both username and password');
        return; //stop further execution if fields are empty 
    }

    //retrieve user data from session storage
    const savedUsername = sessionStorage.getItem('Username');
    const savedPassword = sessionStorage.getItem('Password');

    if(Username === savedUsername && Password === savedPassword ){
        alert('Login successful');
        document.getElementById('LoginUsername').value ='';
        document.getElementById('LoginPassword').value ='';
        
        //redirect to index page after successful login
        window.location.href='index.html'
    } else {
        alert('Invalid username or password!');
    }
}


