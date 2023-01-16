# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [PING Component Solution](https://github.com/AlexdelCarmen/ping-single-column-coming-soon)
- Live Site URL: [PING Component Live Site](https://alexdelcarmen.github.io/ping-single-column-coming-soon/)

## My process

Started off by building the mobile version of the site first, then added the error message scripts, after that was tested, I coded the desktop layout.  

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Glad to see I am still on ppoint with coding small JS functions like this one: 


```js
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

```

### Continued development

Had a somewhat hard time changing the text content of one of my HTML elements through JS. 

### Useful resources

- [W3Schools article on multiple backgrounds on an HTML element](https://www.w3schools.com/css/) - General CSS reference.


## Author

- Website - [Github Profile](https://github.com/AlexdelCarmen)
- Frontend Mentor - [@AlexdelCarmen](https://www.frontendmentor.io/profile/AlexdelCarmen)
- Twitter - [@AlekBorchov](https://twitter.com/AlekBorchov)

## Acknowledgments

To mom, I'll get you out one day.