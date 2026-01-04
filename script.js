/**
 * Portfolio Website JavaScript
 * Includes: Smooth scrolling, animations, and dark mode toggle
 */

// ===================================
// DARK MODE TOGGLE FUNCTIONALITY
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        console.log('✓ Theme toggle button found');
        
        /**
         * Get saved theme from localStorage
         * @returns {string} 'dark' or 'light'
         */
        function getSavedTheme() {
            return localStorage.getItem('theme') || 'light';
        }
        
        /**
         * Apply theme to body
         * @param {string} theme - 'dark' or 'light'
         */
        function applyTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
        
        /**
         * Save theme to localStorage
         * @param {string} theme - 'dark' or 'light'
         */
        function saveTheme(theme) {
            localStorage.setItem('theme', theme);
        }
        
        /**
         * Toggle between themes
         */
        function toggleTheme() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                document.body.classList.remove('dark-mode');
                saveTheme('light');
            } else {
                document.body.classList.add('dark-mode');
                saveTheme('dark');
            }
            
            updateAriaLabel();
        }
        
        /**
         * Update ARIA label for accessibility
         */
        function updateAriaLabel() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
            themeToggle.setAttribute('aria-label', label);
        }
        
        // Apply saved theme on page load
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        updateAriaLabel();
        
        console.log('✓ Dark mode initialized. Current theme:', savedTheme);
        
        // Add click event listener
        themeToggle.addEventListener('click', function(event) {
            event.preventDefault();
            toggleTheme();
        });
        
        // Add keyboard support
        themeToggle.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleTheme();
            }
        });
        
    } else {
        console.error('✗ Theme toggle button not found');
    }
    
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// PROJECT CARDS ANIMATION ON SCROLL
// ===================================

const projectCards = document.querySelectorAll('.project-card, .project');

if (projectCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Set initial styles for animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===================================
// DOWNLOAD BUTTON HOVER EFFECT
// ===================================

const downloadBtn = document.querySelector('.download-btn');

if (downloadBtn) {
    // Mouse move effect
    downloadBtn.addEventListener('mousemove', function(e) {
        const btn = this;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / 8;
        const deltaY = (y - centerY) / 8;
        
        btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
    
    // Reset on mouse leave
    downloadBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
}

// ===================================
// LOG SUCCESSFUL INITIALIZATION
// ===================================

console.log('✓ Portfolio JavaScript loaded successfully');
console.log('✓ Smooth scrolling: Active');
console.log('✓ Project animations: Active');
console.log('✓ Download button effects: Active');
console.log('✓ Dark mode toggle: Active');