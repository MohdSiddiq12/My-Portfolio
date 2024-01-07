// Get the button elements
const aboutBtn = document.getElementById('aboutme');
const projectsBtn = document.getElementById('projects');

// Get the page elements
const aboutPage = document.querySelector('.newpg');
const projectsPage = document.querySelector('.thirdpg');

// Add click event listeners to the buttons
aboutBtn.addEventListener('click', () => {
  // Scroll to the About Me page
  window.scrollTo({
    top: aboutPage.offsetTop,
    behavior: 'smooth'
  });
});

projectsBtn.addEventListener('click', () => {
  // Scroll to the Projects page
  window.scrollTo({
    top: projectsPage.offsetTop,
    behavior: 'smooth'
  });
});
