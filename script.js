const textEl = document.getElementById("loveText");
const lineLeft = document.querySelector(".line--left");
const lineRight = document.querySelector(".line--right");
const heart = document.querySelector(".heart");

// NAME TYPING
const nameText = "Rova BUBU";
const typedText = document.getElementById("typed-text");
let charIndex = 0;

function resetTyping() {
  typedText.textContent = "";
  charIndex = 0;
}

function typeName() {
  if (charIndex < nameText.length) {
    typedText.textContent += nameText.charAt(charIndex);
    charIndex++;
    setTimeout(typeName, 90);
  }
}

// DYNAMIC LINE HEIGHT BASED ON TEXT WIDTH
function setDynamicLineHeight() {
  const textWidth = textEl.offsetWidth;
  const height = textWidth * 0.45;

  lineLeft.style.height = height + "px";
  lineRight.style.height = height + "px";
}

setDynamicLineHeight();
window.addEventListener("resize", setDynamicLineHeight);

// GSAP TIMELINE
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// TEXT ENTRANCE
tl.from(textEl, {
  opacity: 0,
  y: -30,
  duration: 0.8,
  ease: "power3.out"
});

// LINES GROW
tl.fromTo(
  [lineLeft, lineRight],
  { scaleY: 0 },
  { scaleY: 1, duration: 0.6, ease: "power3.out" },
  "-=0.4"
);

// LINE PULSE
tl.to([lineLeft, lineRight], {
  scaleY: 1.15,
  duration: 0.5,
  yoyo: true,
  repeat: 1,
  ease: "sine.inOut"
});

// HEART BEAT
// HEART BEAT (REALISTIC + FEMININE)
tl.fromTo(
  ".heart",
  { scale: 1 },
  {
    scale: 1.18,
    duration: 0.35,
    ease: "power2.inOut",
    yoyo: true,
    repeat: 1
  }
);

// subtle secondary pulse
tl.to(".heart", {
  scale: 1.08,
  duration: 0.25,
  ease: "sine.inOut",
  yoyo: true,
  repeat: 1
});


// START NAME TYPING
tl.call(() => {
  resetTyping();
  typeName();
});

// EXIT
tl.to([lineLeft, lineRight], {
  scaleY: 0,
  duration: 0.5,
  ease: "power2.in"
}, "+=1");

tl.to([textEl, heart], {
  opacity: 0,
  duration: 0.6
});

tl.call(() => {
  resetTyping();
  gsap.set([textEl, heart], { opacity: 1 });
});
