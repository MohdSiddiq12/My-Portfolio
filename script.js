// Enhanced smooth scrolling for anchor navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Project card animation on scroll (use CSS class for animation)
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});
projectCards.forEach(card => {
    observer.observe(card);
});

// Download button hover animation (organized outside scroll logic)
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / 8;
        const deltaY = (y - centerY) / 8;
        this.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
    downloadBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
}