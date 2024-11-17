// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            document.querySelector('.download-btn').addEventListener('mousemove', function(e) {
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
            
            document.querySelector('.download-btn').addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });