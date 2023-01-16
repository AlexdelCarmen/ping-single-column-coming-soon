const errorText = document.querySelector(".error-text");
const emailInput = document.getElementById("email");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", () => {
    let email = emailInput.value;
    let validMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") { 
        errorText.classList.remove("invisible"); 
        emailInput.classList.add("error");
        errorText.textContent = "Whoops! It looks like you forgot to add your email."
    } else if (email.match(validMailFormat)) {
        errorText.classList.add("invisible"); 
        emailInput.classList.remove("error");
    } else {
        errorText.classList.remove("invisible"); 
        emailInput.classList.add("error");
        errorText.textContent = "Please provide a valid email address."
    }
});
