function validate(){
    const login_name='Artheesh';
    const login_pass='1234';
    let user=document.getElementsByName('uname')[0].value;
    let password=document.getElementsByName('psw')[0].value;
    if(user==login_name && password==login_pass){
        window.location.href="./index.html";
    }
    else{
        window.alert("Username or password is wrong");
        location.reload();
    }
}