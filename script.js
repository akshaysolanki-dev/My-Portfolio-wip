const containerEl = document.querySelector(".typing");
const aboutEL = document.querySelector(".about");
const hamburgerEl = document.querySelector(".hamburger");
const navLinkEl = document.querySelector(".nav-links");

const careers = [
  "Frontend Developer",
  "HTML • CSS • JavaScript",
  "Learning Full-Stack Development",
  "Open to Opportunities",
];

let careerIndex = 0;
let characterIndex = 0;
let isDeleting = false;

updateText();

function updateText() {
  const currentCareer = careers[careerIndex];

  containerEl.innerHTML = `<p>&#8618 ${currentCareer.slice(0, characterIndex)}</p>`;

  if (!isDeleting) {
    characterIndex++;
  } else {
    characterIndex--;
  }

  let speed = 50;

  // finished typing
  if (characterIndex - 1 === currentCareer.length) {
    isDeleting = true;
    speed = 1000; // pause
  }

  // finished deleting
  if (characterIndex === 0 && isDeleting) {
    isDeleting = false;
    careerIndex++;

    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }

  setTimeout(updateText, speed);
}

const counters = document.querySelectorAll(".stat h3");
const aboutSection = document.querySelector("#about");

let hasAnimated = false; // to run only once

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;

        counters.forEach((counter) => {
          const target = +counter.dataset.target;
          let current = 0;

          const steps = 100;
          const increment = target / steps;

          const updateCounter = () => {
            current += increment;

            if (current < target) {
              counter.innerHTML = Math.ceil(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerHTML = target + "+";
            }
          };

          updateCounter();
        });
      }
    });
  },
  {
    threshold: 0.4,
    rootMargin: "0px 0px -80px 0px",
  },
);

observer.observe(aboutSection);

hamburgerEl.addEventListener("click", () =>
  navLinkEl.classList.toggle("active"),
);
(function () {
  emailjs.init("uVDKwgdEop2X52nkj");
})();

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_iyut4jo", "template_s1yjscs", params)
    .then(function () {
      const btn = document.querySelector(".submit-btn");
      btn.innerHTML = "Message Sent ✅";
      setTimeout(() => {
        btn.innerHTML = "Send Message";
      }, 2000);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      alert("Failed to send ❌");
      console.log(error);
    });
}
