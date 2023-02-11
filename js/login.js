// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    // 3.a: set id on the html element
    // 3.b: get the id
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    //DANGER: DO  not VERIFY EMAIL AND PASSWORD ON THE CLIENT SIDE in future we will check this on backend
    //STEP-4: verify email and password

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else {
        window.alert('Toke ami teijjo sontan gosona korlam, tui password vulegeos')
    }
})
