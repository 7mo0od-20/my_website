// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});
// Animate skill bars on scroll
function animateSkills() {
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
const width = bar.style.width;
bar.style.width = '0';
setTimeout(() => {
bar.style.width = width;
}, 500);
});
}
// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
if (entry.target.id === 'skills') {
animateSkills();
}
entry.target.classList.add('animate-fade-in');
}
});
}, { threshold: 0.1 });
// Observe sections
document.querySelectorAll('section').forEach(section => {
observer.observe(section);
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const navLinks = document.querySelector('.hidden.md\\:flex');
mobileMenuButton.addEventListener('click', () => {
navLinks.classList.toggle('hidden');
navLinks.classList.toggle('flex');
navLinks.classList.toggle('flex-col');
navLinks.classList.toggle('absolute');
navLinks.classList.toggle('top-full');
navLinks.classList.toggle('left-0');
navLinks.classList.toggle('w-full');
navLinks.classList.toggle('bg-black');
navLinks.classList.toggle('p-4');

});
// Form submission handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
e.preventDefault();
const formData = new FormData(contactForm);
const data = {
name: formData.get('name'),
email: formData.get('email'),
message: formData.get('message')
};
try {
const response = await fetch('http://localhost:3000/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
});
const result = await response.json();
if (response.ok) {
alert(result.message);
contactForm.reset();
} else {
alert(result.error || ' حدث خطأ ما');
}
} catch (error) {
alert(' تعذر الإتصال بالخادم');
console.error(error);
}
});
// Add animation class to elements when they enter viewport
const animateOnScroll = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-fade-in');
}
});
}, {
threshold: 0.1
});
// Observe all elements with animation class
document.querySelectorAll('.experience-card, .certification-badge').forEach(el => {
animateOnScroll.observe(el);
});
// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
// Add fade-in animation to all sections
document.querySelectorAll('section').forEach(section => {
section.classList.add('opacity-0');
setTimeout(() => {
section.classList.add('transition-opacity');
section.classList.add('duration-700');
section.classList.remove('opacity-0');
}, 100);
});
});