function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
  const arrow = document.querySelector('.arrow');
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  arrow.addEventListener('click', function() {
    scrollToNextSection();
  });

  // Update currentSectionIndex when the user scrolls
  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset + window.innerHeight / 2;
    sections.forEach((section, index) => {
      if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
        currentSectionIndex = index;
        toggleArrowVisibility(); // Check visibility on scroll
      }
    });
  });

  // Function to scroll to the next section
  function scrollToNextSection() {
    // Get the index of the current section
    const currentSection = sections[currentSectionIndex];

    // Determine the next section
    let nextSection;
    if (currentSectionIndex < sections.length - 1) {
      nextSection = sections[currentSectionIndex + 1];
      currentSectionIndex++;
    } else {
      nextSection = sections[0];
      currentSectionIndex = 0;
    }

    // Scroll to the next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Function to toggle arrow visibility based on section
  function toggleArrowVisibility() {
    const contactSection = document.getElementById('contact');
    if (window.innerWidth <= 768 && isElementInViewport(contactSection)) {
      arrow.style.display = 'none'; // Hide arrow in contact section on mobile
    } else {
      arrow.style.display = 'block'; // Show arrow otherwise
    }
  }

  // Function to check if an element is in viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Initial check for arrow visibility on page load
  toggleArrowVisibility();
});
