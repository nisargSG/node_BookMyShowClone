const btnLogin = document.getElementById('BTN_LOGIN')
const inputEmail = document.getElementById("INPUT_EMAIL")
const inputPassword = document.getElementById("INPUT_PASSWORD")


btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()

    fetch("/api/auth",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({email:inputEmail.value,password:inputPassword.value })
    }).then(rawResponse=>rawResponse.json()).then((jsonResponse)=>{

        if (jsonResponse.msg === "success") {
            window.location.href = '/';  // Replace with your desired redirect URL
        } else {
            // Handle other status codes or conditions if needed
            alert("invalid login")
        }
    })

})