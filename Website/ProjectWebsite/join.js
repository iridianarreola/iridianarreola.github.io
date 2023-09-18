"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        
    
        // create a Boolean variable to keep track of invalid entries
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") {
            email1.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        } else {
            email1.nextElementSibling.textContent = "";
        }
    
        // submit the form if all entries are valid
        if (isValid == true) {
            $("#sign_up").submit();
        }
    });
    
    $("#email_1").focus();
});