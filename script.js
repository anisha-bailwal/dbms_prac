// Toggle solution visibility
function toggleSolution(button) {
    const solution = button.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (solution.classList.contains('hidden')) {
        solution.classList.remove('hidden');
        button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Solution';
    } else {
        solution.classList.add('hidden');
        button.innerHTML = '<i class="fas fa-eye"></i> Show Solution';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe category cards and question cards
document.addEventListener('DOMContentLoaded', function() {
    document