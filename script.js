// Smooth scrolling for navigation links
document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DATA ANALYST",
    "DATA ENGINEEER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
// Smooth scrolling for navigation links
document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple animation effect for project and experience sections
window.addEventListener('scroll', () => {
    document.querySelectorAll('.project, .job').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.style.transform = "translateY(0)";
            el.style.opacity = "1";
        }
    });
});
// Toggle Experience Details
document.querySelectorAll('.experience-box').forEach(box => {
    box.addEventListener('click', function () {
        const expId = this.getAttribute('data-exp-id');

        // Hide all experience details
        document.querySelectorAll('.experience-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show selected experience details
        document.getElementById(expId).style.display = 'block';
    });
});

// Toggle Project Details
document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function () {
        const projectId = this.getAttribute('onclick').split("'")[1];

        // Hide all project details
        document.querySelectorAll('.project-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show selected project details
        document.getElementById(projectId).style.display = 'block';
    });
});

// Close details when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest(".experience-box") && !event.target.closest(".experience-details")) {
        document.querySelectorAll('.experience-details').forEach(detail => {
            detail.style.display = 'none';
        });
    }

    if (!event.target.closest(".project-box") && !event.target.closest(".project-details")) {
        document.querySelectorAll('.project-details').forEach(detail => {
            detail.style.display = 'none';
        });
    }
});
function toggleSkills(skillId) {
    // Hide all skill details
    document.querySelectorAll('.skills-details').forEach(skill => {
        skill.style.display = 'none';
    });

    // Show selected skill
    document.getElementById(skillId).style.display = 'block';
}


// Close skills when clicking outside
function closeSkills(event) {
    if (!event.target.classList.contains('skill-box')) {
        document.querySelectorAll('.skills-details').forEach(skill => {
            skill.style.display = 'none';
        });
    }
}
document.querySelectorAll('.experience-box').forEach(box => {
    box.addEventListener('click', function () {
        const expId = this.getAttribute('data-exp-id');

        // Hide all experience details
        document.querySelectorAll('.experience-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show the selected experience details
        document.getElementById(expId).style.display = 'block';
    });
});

// Close details when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest(".experience-box")) {
        document.querySelectorAll('.experience-details').forEach(detail => {
            detail.style.display = 'none';
        });
    }
});
document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function () {
        const projectId = this.getAttribute('onclick').split("'")[1];

        // Hide all project details
        document.querySelectorAll('.project-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show the selected project details
        document.getElementById(projectId).style.display = 'block';
    });
});

// Close details when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest(".project-box")) {
        document.querySelectorAll('.project-details').forEach(detail => {
            detail.style.display = 'none';
        });
    }
});


window.onload = function () {
    document.body.style.overflow = "auto";
    typeWriter();
};
//contact section//
document.querySelector(".contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formMessage = document.querySelector("#form-message");

    // Convert form data to JSON
    const formData = new FormData(form);
    
    const response = await fetch(form.action, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        formMessage.style.display = "block";
        formMessage.style.color = "green";
        formMessage.textContent = "✅ Your message has been sent successfully!";
        form.reset();
    } else {
        formMessage.style.display = "block";
        formMessage.style.color = "red";
        formMessage.textContent = "❌ Error sending message. Please try again.";
    }
});
