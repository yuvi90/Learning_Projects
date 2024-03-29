function animateSlides() {
    // Select some things
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');
    // Loop over each slides
    sliders.forEach((slide, index, slides) => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        // GSAP
        // Slide Animation
        const sliderT1 = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut", } })
        sliderT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });
        sliderT1.fromTo(img, { scale: "2" }, { scale: "1" }, "-=1"); //"-=1" decreases delay
        sliderT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
        sliderT1.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.75");
        // Page Animation
        let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1]; // Slide Hold Screen for some time
        const pageT1 = gsap.timeline()
        pageT1.fromTo(nextSlide, { y: "0%" }, { y: "50%" }, "-=0.5")
        pageT1.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 })
        pageT1.fromTo(nextSlide, { y: "50%" }, { y: "0%" })
        // Init Controller
        let controller = new ScrollMagic.Controller();
        // Create Scence
        let slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.25,
            reverse: false,
        })
            .setTween(sliderT1)
            .addIndicators({ colorStart: "white", colorTrigger: "white", name: "slide" })
            .addTo(controller);
        let pageScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0,
            duration: "100%",
        })
            .setTween(pageT1)
            .setPin(slide, { pushFollowers: false })
            .addIndicators({ colorStart: "white", colorTrigger: "white", name: "page", indent: 200 })
            .addTo(controller)
    });
}

let mouse = document.querySelector('.cursor')
let mouseTxt = document.querySelector('.cursor-text')
let burger = document.querySelector('.burger')

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

function activeCursor(e) {
    const item = e.target;
    if (item.id === "logo" || item.classList.contains("burger")) {
        mouse.classList.add("nav-active");
    } else {
        mouse.classList.remove("nav-active");
    }
    if (item.classList.contains("explore")) {
        mouse.classList.add("explore-active");
        gsap.to(".title-swipe", 1, { y: "0%" });
        mouseTxt.innerText = "Tap";
    } else {
        mouse.classList.remove("explore-active");
        gsap.to(".title-swipe", 1, { y: "100%" });
        mouseTxt.innerText = ""
    }
}

function navHandler(e) {
    if (!e.target.classList.contains('active')) {
        gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" })
        gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" })
        gsap.to("#logo", 0.5, { color: "black" })
        gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" })
        document.body.style.overflowY = "hidden";
        e.target.classList.add('active');
    } else 
    {
        gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" })
        gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" })
        gsap.to("#logo", 0.5, { color: "white" })
        gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" })
        e.target.classList.remove('active');
        document.body.style.overflowY = "visible";
    }
}

window.addEventListener('mousemove', cursor)
window.addEventListener('mouseover', activeCursor)
window.addEventListener('click', navHandler)

animateSlides();