var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function ()
{
    body.className = "sign-up-js";
});


//ANIMAÇÃO btn DARK/LIGHT//

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //muda o tema do site//
    document.body.classList.toggle('dark');
});

