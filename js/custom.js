/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

// Bike Move On Scroll Event :-
window.addEventListener('scroll',
function () {
  // this is animation 
  this.document.className = "animation"

  // if (window.pageYOffset <= 4000) {
  //   document.getElementById('bike').style.top = "100px";
  // }
  // else if (window.pageYOffset <= 4200) {
  //     document.getElementById('bike').style.top = "344px";
  // }
  // else if (window.pageYOffset <= 4400) {
  //     document.getElementById('bike').style.top = "487px";
  // }
  // else if (window.pageYOffset <= 4600) {
  //     document.getElementById('bike').style.top = "650px";
  // }
  // else {
  //   if (window.pageYOffset <= 4800) {
  //     document.getElementById('bike').style.top = "797px";
  //   }
  // }

 if (window.pageYOffset >= 3900) {   //Laptop View
        console.log("Laptop view ⚡");
        if (window.pageYOffset <= 4000) {
          document.getElementById('bike').style.top = "100px";
        }
        else if (window.pageYOffset <= 4200) {
            document.getElementById('bike').style.top = "344px";
        }
        else if (window.pageYOffset <= 4400) {
            document.getElementById('bike').style.top = "487px";
        }
        else if (window.pageYOffset <= 4600) {
            document.getElementById('bike').style.top = "650px";
        }
        else {
          if (window.pageYOffset <= 4800) {
            document.getElementById('bike').style.top = "797px";
          }
        }
 }
 else if (window.pageYOffset >= 3000) {  // Tablet View
      console.log("Tablet view ⚡");
      if (window.pageYOffset <= 3400) {
          document.getElementById('bike').style.top = "70px";
      }
      else if (window.pageYOffset <= 3500) {
          document.getElementById('bike').style.top = "200px";
      }
      else if (window.pageYOffset <= 3600) {
          document.getElementById('bike').style.top = "300px";
      }
      else if (window.pageYOffset <= 3700) {
          document.getElementById('bike').style.top = "400px";
      }
      else {
        if (window.pageYOffset <= 3800) {
          document.getElementById('bike').style.top = "500px";
        }
      }
 }
 else{
      console.log("Done...! 🔥");
 }
}
);




// ================================= END ==========================================================

// onClick go to Specific Section :-
function sc(w) {
  var cls = '';
  switch (w) {
    case 0:
      cls = '.Product';
      break;
    case 1:
      cls = '.Specification';
      break;
    case 2:
      cls = '.Howitworks';
      break;
    case 3:
      cls = '.WhyChooseUs';
      break;
    case 4:
      cls = '.Enquiry';
      break;
  }
  cls && $("html,body").animate({
    "scrollTop": $(cls).offset().top
  }, 100);
}

// ================================= END ==========================================================

// Animation:-
function backInUp() {
  var reveals = document.querySelectorAll(".backInUp");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", backInUp);

// ==========================================================
// Animation:- Right-side
function backOutRight() {
  var reveals = document.querySelectorAll(".backOutRight");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", backOutRight);

// ==========================================================
// Animation:- flipInX
function flipInX() {
  var reveals = document.querySelectorAll(".flipInX");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", flipInX);

// ==========================================================
// Animation:- leftside 
function leftside() {
  var reveals = document.querySelectorAll(".leftside");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", leftside);

// ================================= END ==========================================================


// how it work spin circle animation property
const spinner = document.getElementById("howitwork");
spinner.style.animation = "spin 10s linear infinite";



// if (window.screen.width != 768) {
//   console.log("its working 😜");
// }
// else if (window.screen.width != 1200) {
//   console.log("its working 1200px 😜");
// }
// else {
//   console.log("Error 🤯");
// }

// ===================== Header sticky ======================================

window.addEventListener("scroll", function() {

   var header = document.querySelector("header");
  
   header.classList.toggle("sticky", window.scrollY > 0);
  
 })
  
// ===================== Header sticky End ======================================
