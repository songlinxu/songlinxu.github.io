// Dynamic footer year

document.getElementById("year").textContent =
  new Date().getFullYear();


// Fade-in animation

const animatedElements = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.animate(
        [
          {
            opacity: 0,
            transform: "translateY(20px)"
          },

          {
            opacity: 1,
            transform: "translateY(0px)"
          }
        ],

        {
          duration: 700,
          easing: "ease-out",
          fill: "forwards"
        }
      );

      observer.unobserve(entry.target);
    }
  });

}, {
  threshold: 0.15
});

animatedElements.forEach((element) => {
  observer.observe(element);
});


// Active navigation highlighting

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

});



function showCurrentStudents() {
    event.preventDefault();
    document.getElementById("currentStudentPopup").style.display = "block";
}

function closeCurrentStudents() {
    document.getElementById("currentStudentPopup").style.display = "none";
}

