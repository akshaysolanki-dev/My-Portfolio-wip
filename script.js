const containerEl = document.querySelector(".typing");
const aboutEL = document.querySelector(".about");

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

// const counters = document.querySelectorAll(".stat h3");

// counters.forEach((counter) => {
//   const target = +counter.dataset.target; // convert string to number
//   let current = 0;

//   const interval = setInterval(() => {
//     current++;

//     counter.innerHTML = current + "+";

//     if (current === target) {
//       clearInterval(interval);
//     }
//   }, 20); // speed
// });

const counters = document.querySelectorAll(".stat h3");

counters.forEach((counter) => {
  const target = +counter.dataset.target;
  let current = 0;

  const steps = 50; // total animation steps
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

aboutEL.addEventListener("click", () => {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let current = 0;

    const steps = 50; // total animation steps
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
});
