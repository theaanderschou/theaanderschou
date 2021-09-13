let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".god", 10, { y: -300 })
  .to(".like", 10, { y: -100 }, "-=10")
  .to(".fish", 10, { y: -300 }, "-=10")
  .to(".gun", 10, { y: -500 }, "-=10")
  .to(".like", 10, { y: -200 }, "-=10")
  .to(".shadow", 10, { y: -400 }, "-=10")
  .to(".main-title", 10, { y: -600 }, "-=10")
  .to(".undertitle", 10, { y: -600 }, "-=10")
//  .to(".fight", 10, { y: -200 }, "-=10")
//  .to(".femur", 10, { y: -100 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
