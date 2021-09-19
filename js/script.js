// BURGERMENU
const navslide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  function toggleBurger() {
      //Toggle Nav
      nav.classList.toggle('nav-active');

      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.4}s`;
          }
      });

      //Burger Animation
      burger.classList.toggle('toggle');
  }

  burger.addEventListener('click', () => {
      toggleBurger();
  });

  nav.addEventListener('click', () => {
      toggleBurger();
  });

}

navslide();





// PARRALAX EFFECT
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".god", 10, { y: -300 })
  .to(".like", 10, { y: -100 }, "-=10")
  .to(".fish", 10, { y: -300 }, "-=10")
  .to(".gun", 10, { y: -400 }, "-=10")
  .to(".like", 10, { y: -200 }, "-=10")
  .to(".shadow", 10, { y: -400 }, "-=10")
  .to(".main-title", 10, { y: -600 }, "-=10")
  .to(".undertitle", 10, { y: -600 }, "-=10")
//  .to(".fight", 10, { y: -200 }, "-=10")
//  .to(".femur", 10, { y: -100 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
//  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
//  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

  // BRUG OPACITY PÅ ALLE IMG'ER, SÅ DE FADER IND


  let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);
  