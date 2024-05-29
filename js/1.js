let slidesIndex = 0;
showSlides(slidesIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slidesIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slidesIndex = n);
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
  slidesIndex++;
  if (slidesIndex > slides.length) {slidesIndex = 1}
  slides[slidesIndex-1].style.display = "block";
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




        let availableKeywords = [
           'HTML',
           'CSS',
           'Easy Tutorials',
           'Web design tutorials',
           'Javascript',
           'Where to learn coding online',
           'Where to learn web design',
           'How to create a website',


            ];
        const resultsBox = document.querySelector(".result-box");
        const inputBox = document.getElementById("input-box");


        inputBox.onkeyup = function(){
            let result = [];
            let input = inputBox.value;
            if(input.length){
                result = availableKeywords.filter((keyword)=>{
                return  keyword.toLowerCase().includes(input.toLowerCase());
                   });
                console.log(result);
            }
            display(result);

            if(!result.length){
                resultsBox.innerHTML = '';
            }
        }

        function display(result){
            const content = result.map((list)=>{
                return "<li onclick=selectInput(this)>" + list + "</li>";
            });
            resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
        }


        function selectInput(list){
            inputBox.value = list.innerHTML;
            resultsBox.innerHTML = '';
        }
        const car = document.querySelector(".car");

        const dragging = (e) => {
            car.scrollLeft = e.pageX;
        }
        car.addEventListener("mousemove", dragging);