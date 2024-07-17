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
