// Smooth fade-in effect for the header
gsap.from("header", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });

// Hero section animation
gsap.from(".overlay", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5, ease: "power2.out" });

// Collection images hover effect
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        gsap.to(img, { scale: 1.1, duration: 0.3 });
    });
    img.addEventListener("mouseout", () => {
        gsap.to(img, { scale: 1, duration: 0.3 });
    });
});

// Scroll animations for sections
gsap.from(".collection h2", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from(".gallery img", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    delay: 0.5
});

