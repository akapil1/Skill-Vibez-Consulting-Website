const words = [
  "Communication-Focused",
  "Leadership-Oriented",
  "Workplace-Ethics-Driven",
  "Skill-Development-Centered",
  "Confidence-Building"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentWord.substring(0, j + 1);
    j++;

    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1400);
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      currentWord.substring(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 70);
}

typeEffect();

// HAMBURGER MENU TOGGLE

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Read More toggle
const readMoreBtn = document.getElementById("readMoreBtn");
const aboutFullContent = document.getElementById("aboutFullContent");

readMoreBtn.addEventListener("click", () => {
  if (aboutFullContent.style.display === "none") {
    aboutFullContent.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    aboutFullContent.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});

// PROFESSIONAL JOURNEY DATA
const journeyData = [
  {
    position: "Senior Process Associate",
    company: "Siemens Technology and Services Pvt. Ltd.",
    description: "At Siemens, I worked in a structured corporate environment where precision, accountability, and cross-functional collaboration were essential. I was involved in process coordination, documentation accuracy, stakeholder communication, and maintaining operational efficiency within global standards.",
    quote: "Working in a global corporate environment taught me the power of clarity, structure, and professional communication — skills I now help my clients master with confidence."
  },
  {
    position: "Executive – HR",
    company: "Crossdomain Pvt. Ltd.",
    description: "In my HR role, I handled recruitment coordination, onboarding processes, employee communication, and HR operations. I closely interacted with employees across levels, gaining insight into workplace behavior, organizational culture, and professional expectations.",
    quote: "My HR journey showed me that confidence isn’t just about speaking well — it’s about understanding people, culture, and professional boundaries."
  },
  {
    position: "Associate",
    company: "TeamLease",
    description: "At TeamLease, I supported workforce coordination and administrative processes, contributing to smooth employee lifecycle management and compliance tracking. The role strengthened my understanding of employability skills and workplace readiness.",
    quote: "I realized that technical knowledge gets you hired, but communication and attitude determine how far you grow."
  },
  {
    position: "Research Assistant",
    company: "CIStems Software Ltd.",
    description: "As a Research Assistant, I worked on data organization, analytical documentation, and structured reporting. This role sharpened my analytical thinking and attention to detail.",
    quote: "Research trained my mind to observe deeply and think critically — qualities that now help me design thoughtful, impactful training programs."
  }
];

const logos = document.querySelectorAll(".journey-logo");
const summaryEl = document.getElementById("journey-summary");
const detailsEl = document.getElementById("journey-details");
const positionEl = document.getElementById("journey-position");
const companyEl = document.getElementById("journey-company");
const descriptionEl = document.getElementById("journey-description");
const quoteEl = document.getElementById("journey-quote");

logos.forEach(logo => {
  logo.addEventListener("click", () => {
    // Remove active from all logos
    logos.forEach(l => l.classList.remove("active"));
    logo.classList.add("active");

    // Hide general summary
    summaryEl.style.display = "none";

    // Show role details
    detailsEl.style.display = "block";

    const index = logo.dataset.index;
    const data = journeyData[index];

    positionEl.textContent = data.position;
    companyEl.textContent = data.company;
    descriptionEl.textContent = data.description;
    quoteEl.textContent = data.quote;
  });
});
// IMAGE SLIDER FUNCTIONALITY

const sliderTrack = document.querySelector(".slider-track");
const leftArrow = document.querySelector(".left-btn");
const rightArrow = document.querySelector(".right-btn");

let currentIndex = 0;
const sliderImages = document.querySelectorAll(".slider-track img");
const imgWidth = 520; // must match CSS width

rightArrow.addEventListener("click", () => {
  if (currentIndex < sliderImages.length - 1) {
    currentIndex++;
    sliderTrack.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    sliderTrack.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  }
});
const slider = document.getElementById("servicesSlider");
const progress = document.getElementById("sliderProgress");

slider.addEventListener("scroll", () => {
  const scrollLeft = slider.scrollLeft;
  const scrollWidth = slider.scrollWidth - slider.clientWidth;
  const scrolled = (scrollLeft / scrollWidth) * 100;
  progress.style.width = scrolled + "%";
});
// =============================
// SHOW INLINE CALENDLY
// =============================

window.addEventListener("load", function () {

  const bookBtn = document.getElementById("bookBtn");
  const calendlyContainer = document.getElementById("calendlyContainer");

  if (bookBtn && calendlyContainer) {
    bookBtn.addEventListener("click", function () {
      calendlyContainer.style.display = "block";

      // Optional: scroll smoothly to calendar
      calendlyContainer.scrollIntoView({ behavior: "smooth" });
    });
  }

});