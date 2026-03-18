/**
 * Asfiya Asim Portfolio | script.js
 * Ultra-Premium Interactivity Engine
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
            
            // Animate hamburger to X
            const lines = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'translateY(8px) rotate(45deg)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // 2. Typing Engine 2.0 (Vercel Style)
    const typingElement = document.getElementById('typed-text');
    const phrases = [
        "Architecting Premium Digital Solutions.",
        "Precision in Every Line of Code.",
        "Full Stack Mastery.",
        "Where Logic Meets Visual Excellence."
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            delay = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            delay = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            delay = 3000; // Wait at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    if (typingElement) type();

    // 3. Advanced Scroll Reveal (Intersection Observer)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger Skill Bars if they are within this section
                const skillBars = entry.target.querySelectorAll('.progress-fill');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => bar.style.width = width, 100);
                });

                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. Navbar Scroll State
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.height = '60px';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.7)';
            navbar.style.height = '70px';
        }
    });

    // 5. Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSector = document.querySelector(targetId);
            
            if (targetSector) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                const lines = menuToggle.querySelectorAll('span');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';

                targetSector.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});