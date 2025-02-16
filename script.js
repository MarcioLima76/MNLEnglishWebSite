// Testimonial Slider
const testimonials = [{
        text: "Thanks to the interview prep, I landed a job at Google UK!",
        author: "Frontend Developer, Berlin"
    },
    // Add more testimonials
];

function populateTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `
            <p>"${testimonial.text}"</p>
            <h4>${testimonial.author}</h4>
        `;
        slider.appendChild(div);
    });
}

// Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic
    alert('Thank you! We will contact you within 24 hours.');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});