document.querySelectorAll(".dropdown-button-1, #downicon-1").forEach(function(element) {
    element.addEventListener('click', function() {
        var dropdownContainer = this.closest(".dropdown-1");
        var dropdownContent = dropdownContainer.querySelector(".dropdown-content-1");
        var dropdownButton = dropdownContainer.querySelector(".dropdown-button-1");
        var dropdownIcon = dropdownContainer.querySelector("#downicon-1");
        
        dropdownButton.style.borderBottom = "none";
        
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "flex";
            dropdownContent.style.flexDirection = "column";
            dropdownContainer.style.marginBottom = "34%";
            dropdownIcon.classList.remove('fa-chevron-down');
            dropdownIcon.classList.add('fa-chevron-up');
        } else {
            dropdownContent.style.display = "none";
            dropdownContainer.style.marginBottom = "5px";
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        }
    });
});

document.querySelectorAll(".dropdown-button-2, #downicon-2").forEach(function(element) {
    element.addEventListener('click', function() {
        var dropdownContainer = this.closest(".dropdown-2");
        var dropdownContent = dropdownContainer.querySelector(".dropdown-content-2");
        var dropdownIcon = dropdownContainer.querySelector("#downicon-2");
        var isInfoDropdown = dropdownContainer.querySelector("#Info") !== null;

        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "flex";
            dropdownContent.style.flexDirection = "column";
            dropdownContainer.style.marginBottom = isInfoDropdown ? "200px" : "80px";
            dropdownIcon.classList.remove('fa-chevron-down');
            dropdownIcon.classList.add('fa-chevron-up');
        } else {
            dropdownContent.style.display = "none";
            dropdownContainer.style.marginBottom = "5px";
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        }
    });
});


let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .items");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.transform = `translateX(-${checkLeft}px)`; 
    let lastActiveDot = document.querySelector(".slider .dots li.active");
    if (lastActiveDot) lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click();
    }, 5000);
}

next.addEventListener('click', function() {
    if (active < items.length - 1) {
        active++;
        reloadSlider();
    }
    
});

prev.addEventListener('click', function() {
    if (active > 0) {
        active--;
        reloadSlider();
    }
});

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    });
});

let refreshSlider = setInterval(() => {
    next.click();
}, 5000);



dots.forEach((li,key) => {
    li.addEventListener('click',function(){
        active = key;
        reloadSlider();
    })
})

const openbtn = document.querySelector("#img1-cast");
const closebtn = document.querySelector(".close-cast");
const castpopup = document.querySelector(".cast-popup");
openbtn.addEventListener("click", function() {
    castpopup.style.backgroundColor="black";
    console.log("Open button clicked");
    castpopup.classList.add("open");
    clearInterval(refreshSlider);
});

closebtn.addEventListener("click", function() {
    console.log("Close button clicked");
    castpopup.classList.remove("open");
});
