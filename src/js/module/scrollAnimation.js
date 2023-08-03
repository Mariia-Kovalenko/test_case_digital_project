export default function enableScrollAnimation() {
    const scrollToTopBtn = document.querySelector(".scrolltop");

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    // scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // if second section visible - show back to top button
                if (entry.target.classList.contains("intro")) {
                    scrollToTopBtn.style.opacity = 0;
                }
                if (!entry.target.classList.contains("intro")) {
                    scrollToTopBtn.style.opacity = 0.8;
                }
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const sections = document.querySelectorAll(".section");
    const images = document.querySelectorAll(".images__img");
    const projects = document.querySelectorAll(".projects__item");

    sections.forEach((el) => observer.observe(el));
    images.forEach((el) => observer.observe(el));
    projects.forEach((el) => observer.observe(el));
}
