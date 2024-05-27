let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




document.addEventListener("DOMContentLoaded", function() {
    const petList = document.getElementById("petList");
    const addPetForm = document.getElementById("addPetForm");

    addPetForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const petName = document.getElementById("petName").value.trim();
        const petType = document.getElementById("petType").value.trim();
        
        if (petName !== "" && petType !== "") {
            addPetToDOM(petName, petType);
            addPetForm.reset();
        } else {
            alert("Please provide both the pet's name and type.");
        }
    });

    function addPetToDOM(name, type) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Name:</strong> ${name}, <strong>Type:</strong> ${type}`;
        petList.appendChild(li);
    }
     function showPetProfile(name, type) {
        // Display pet profile details in the header
        header.innerHTML = `<h1>${name}</h1><p>Type: ${type}</p>`;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const members = document.querySelectorAll(".member");

    members.forEach(member => {
        member.addEventListener("click", function() {
            const info = this.querySelector(".hidden-info");
            info.classList.toggle("show");
        });
    });
});

let slidesIndex= 0;
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}
let slidesIndex = 0;


document.addEventListener("DOMContentLoaded", function() {
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;
      console.log("Subscribed with email: " + email);
      // You can add further functionality here like sending the email to a server
      // or displaying a confirmation message.
      emailInput.value = ""; // Clear the input field after submission
  });
});







const header = document.querySelector('header'); 
        const footer = document.querySelector('footer'); 
        const headerOffset = header.offsetTop; 
        const footerOffset = footer.offsetTop; 
  
        function handleScroll() { 
            if (window.pageYOffset >= headerOffset) { 
                header.classList.add('sticky'); 
            } else { 
                header.classList.remove('sticky'); 
            } 
  
            if (window.pageYOffset >= footerOffset - window.innerHeight) { 
                footer.classList.add('sticky'); 
            } else { 
                footer.classList.remove('sticky'); 
            } 
        } 
  
        window.addEventListener('scroll', handleScroll); 