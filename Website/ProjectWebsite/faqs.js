"use strict";


const toggle = evt => {
    const linkElement = evt.currentTarget;                 
    const h2Element = linkElement.parentNode;              
    const divElement = h2Element.nextElementSibling;       

    // h2Element.classList.toggle("minus");
    if (h2Element.hasAttribute("class")) {
        h2Element.removeAttribute("class");
    } else {
        h2Element.className="minus";
    }

    // divElement.classList.toggle("open");
    if (divElement.hasAttribute("class")) {
        divElement.removeAttribute("class");
    } else {
        divElement.className="open";
    }

    evt.preventDefault();   
};

document.addEventListener("DOMContentLoaded", () => {
    
    const linkElements = faqs.querySelectorAll("#faqs a");
    
    	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    
    linkElements[0].focus();       
});