const letters = document.querySelectorAll(".lttr");
const lineLeft = document.querySelector(".line--left");
const lineRight = document.querySelector(".line--right");
const heart = document.querySelector(".heart");

const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1.2,
  defaults: { ease: "power3.out" }
});

// RESET
tl.set(letters, { opacity: 0, y: 12, scale: 0.95 });
tl.set([lineLeft, lineRight], { scaleY: 0 });
tl.set(heart, { opacity: 0, scale: 0 });

// LINES DRAW
tl.to(lineLeft, {
  scaleY: 1,
  transformOrigin: "top",
  duration: 0.6
});
tl.to(lineRight, {
  scaleY: 1,
  transformOrigin: "top",
  duration: 0.6
}, "<");

// LETTERS IN
tl.to(letters, {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.8,
  stagger: 0.08
});

// FLOAT EFFECT
tl.to(letters, {
  y: -5,
  duration: 1.2,
  ease: "sine.inOut",
  stagger: {
    each: 0.12,
    yoyo: true,
    repeat: 1
  }
});

// HEART BEAT
tl.to(heart, {
  opacity: 1,
  scale: 1,
  duration: 0.4,
  ease: "elastic.out(1, 0.4)"
});
tl.to(heart, {
  scale: 1.15,
  duration: 0.25,
  yoyo: true,
  repeat: 1
});

// EXIT
tl.to(letters, {
  opacity: 0,
  y: -10,
  duration: 0.6,
  stagger: 0.05
});
tl.to(heart, {
  opacity: 0,
  scale: 0,
  duration: 0.4
});
