function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
         x.className += " responsive";
    } 
    else {
       x.className = "topnav";
    }
}



const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");

            hamburger.addEventListener("click", mobileMenu);

           function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
           }