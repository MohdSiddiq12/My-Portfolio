document.addEventListener('DOMContentLoaded', function () {
  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  });

  // Typewriter Effect
  const introText = document.getElementById('intro-text');
  const subText = document.getElementById('sub-text');
  const texts = ["Hey, I am Sidd", "an aspiring Data Scientist/ AI-ML Developer"];
  let index = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[index].length) {
      if (index === 0) {
        introText.textContent += texts[index].charAt(charIndex);
      } else {
        subText.textContent += texts[index].charAt(charIndex);
      }
      charIndex++;
      setTimeout(type, 100);
    } else {
      charIndex = 0;
      if (index === 0) {
        index++;
        setTimeout(type, 1000);
      }
    }
  }

  type();

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
