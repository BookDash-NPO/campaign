
/* ==========================================
   STORIES START WITH US | BOOK DASH
   COMPLETE WEBSITE JAVASCRIPT
========================================== */


/* 1. WELCOME MESSAGE */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Stories Start With Us!");

});


/* 2. SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 3. BUTTON CLICK FEEDBACK */

document.querySelectorAll("a").forEach(function (button) {

    button.addEventListener("click", function () {

        this.classList.add("button-clicked");

        setTimeout(() => {
            this.classList.remove("button-clicked");
        }, 250);

    });

});


/* 4. BACK TO TOP BUTTON */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.setAttribute("aria-label", "Back to top");

backToTop.id = "backToTop";

document.body.appendChild(backToTop);


/* BACK TO TOP BUTTON STYLING */

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.backgroundColor = "#F47721";
backToTop.style.color = "#FFFFFF";
backToTop.style.fontSize = "28px";
backToTop.style.fontWeight = "bold";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";
backToTop.style.boxShadow = "0 5px 0 #C75B15";


/* SHOW BUTTON WHEN SCROLLING */

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


/* RETURN TO TOP */

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* 5. SCROLL PROGRESS INDICATOR */

const progressBar = document.createElement("div");

progressBar.id = "scrollProgress";

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.width = "0%";
progressBar.style.backgroundColor = "#F47721";
progressBar.style.zIndex = "2000";
progressBar.style.transition = "width 0.1s linear";

document.body.appendChild(progressBar);


window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = pageHeight > 0
        ? (scrollTop / pageHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";

});


/* 6. FRIENDLY IMAGE INTERACTION */

document.querySelectorAll("figure img").forEach(function (image) {

    image.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.02)";

    });

    image.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

    image.style.transition = "transform 0.3s ease";

});


/* 7. CURRENT YEAR FOR FOOTER */

const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

/* ==========================================
   STORIES START WITH US | BOOK DASH
   PAGE NAVIGATION JAVASCRIPT
========================================== */


/* 1. NAVIGATION BETWEEN PAGES */

document.addEventListener("DOMContentLoaded", function () {

    const pageLinks = document.querySelectorAll(".nav-link");

    pageLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const page = this.getAttribute("href");

            if (page) {
                window.location.href = page;
            }

        });

    });


    /* 2. MOBILE NAVIGATION MENU */

    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuButton.setAttribute("aria-expanded", isOpen);

            menuButton.textContent = isOpen ? "✕" : "☰";

        });

    }


    /* 3. BACK TO TOP BUTTON */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            backToTop.style.display =
                window.scrollY > 300 ? "block" : "none";

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. MOBILE NAVIGATION MENU
    // =====================================

    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu after selecting a page
        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";

            });

        });

    }


    // =====================================
    // 2. SCROLL REVEAL ANIMATIONS
    // =====================================

    const revealElements = document.querySelectorAll(
        "main h1, main h2, main p, main figure, main li, .book-card, .book-gallery"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

    }


    // =====================================
    // 3. ANIMATED COUNTERS
    // =====================================

    const counters = document.querySelectorAll("[data-count]");

    function animateCounter(counter) {

        const target = Number(counter.dataset.count);

        if (!Number.isFinite(target)) return;

        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const currentNumber = Math.floor(target * progress);

            counter.textContent = currentNumber.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }

        }

        requestAnimationFrame(updateCounter);

    }

    if ("IntersectionObserver" in window) {

        const counterObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateCounter(entry.target);
                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });

    } else {

        counters.forEach(animateCounter);

    }


    // =====================================
    // 4. BOOK CAROUSEL
    // =====================================

    const carousel = document.querySelector(".book-carousel");

    if (carousel) {

        const track = carousel.querySelector(".book-track");
        const cards = carousel.querySelectorAll(".book-card");
        const nextButton = carousel.querySelector(".carousel-next");
        const previousButton = carousel.querySelector(".carousel-prev");

        let currentIndex = 0;

        function getVisibleCards() {

            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 900) return 2;

            return 3;

        }

        function updateCarousel() {

            if (!track || cards.length === 0) return;

            const visibleCards = getVisibleCards();
            const maxIndex = Math.max(0, cards.length - visibleCards);

            currentIndex = Math.min(currentIndex, maxIndex);

            const cardWidth = cards[0].getBoundingClientRect().width;

            const trackStyle = window.getComputedStyle(track);
            const gap = parseFloat(trackStyle.columnGap) || 0;

            track.style.transform =
                `translateX(-${currentIndex * (cardWidth + gap)}px)`;

            if (previousButton) {
                previousButton.disabled = currentIndex === 0;
            }

            if (nextButton) {
                nextButton.disabled = currentIndex >= maxIndex;
            }

        }

        if (nextButton) {

            nextButton.addEventListener("click", function () {

                currentIndex++;
                updateCarousel();

            });

        }

        if (previousButton) {

            previousButton.addEventListener("click", function () {

                currentIndex--;
                updateCarousel();

            });

        }

        window.addEventListener("resize", updateCarousel);

        updateCarousel();

    }


    // =====================================
    // 5. IMAGE LIGHTBOX
    // =====================================

    const images = document.querySelectorAll(
        ".book-gallery img, .lightbox-image"
    );

    if (images.length > 0) {

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close image">×</button>
            <img src="" alt="Enlarged book image">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector("img");
        const closeButton = lightbox.querySelector(".lightbox-close");

        function closeLightbox() {

            lightbox.classList.remove("active");
            document.body.style.overflow = "";

        }

        images.forEach(function (image) {

            image.style.cursor = "zoom-in";

            image.addEventListener("click", function () {

                lightboxImage.src = image.currentSrc || image.src;
                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";

            });

        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeLightbox();
            }

        });

    }


    // =====================================
    // 6. BACK TO TOP BUTTON
    // =====================================

    const backToTop = document.createElement("button");

    backToTop.id = "backToTop";
    backToTop.innerHTML = "↑";
    backToTop.setAttribute("aria-label", "Back to top");

    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =====================================
    // 7. READING PROGRESS BAR
    // =====================================

    const progressBar = document.createElement("div");

    progressBar.id = "readingProgress";

    progressBar.innerHTML = `
        <div id="readingProgressFill"></div>
    `;

    document.body.appendChild(progressBar);

    const progressFill = document.getElementById("readingProgressFill");


    // =====================================
    // 8. SCROLL EFFECTS
    // =====================================

    function handleScroll() {

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = pageHeight > 0
            ? (scrollTop / pageHeight) * 100
            : 0;

        progressFill.style.width = progress + "%";

        backToTop.classList.toggle("visible", scrollTop > 300);

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();


    // =====================================
    // 9. SMOOTH SCROLLING
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // =====================================
    // 10. CURRENT PAGE NAVIGATION
    // =====================================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navigation a").forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active-page");
            link.setAttribute("aria-current", "page");

        }

    });


    console.log("Stories Start With Us website is ready!");

});
