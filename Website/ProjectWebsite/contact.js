"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#send_form").addEventListener("click", () => {
        
        const fullName = $("#full_name");
        const email1 = $("#email1_address");
        const email2 = $("#email2_address");
       
        let isValid = true;
        if (email1.value == "") { 
            email1.nextElementSibling.textContent = "First email is required.";
            isValid = false;
        } else {
            email1.nextElementSibling.textContent = "";
        }
    
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "Second email is required.";
            isValid = false;
        } else {
            email2.nextElementSibling.textContent = "";
        }
    
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Both emails must match.";
            isValid = false;
        } 

        if (fullName.value == "") {
            fullName.nextElementSibling.textContent = "First name is required.";
            isValid = false;
        } else {
            firstName.nextElementSibling.textContent = "";
        }
    
        if (isValid == true) {
            $("#email_form").submit();
        } 
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email1_address").value = "";
        $("#email2_address").value = "";
        $("#full_name").value = "";

        $("#email1_address").focus();
    });
    
    $("#email1_address").focus();
});  