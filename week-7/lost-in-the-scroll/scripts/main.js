gsap.registerPlugin(ScrollTrigger);

const heroTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=300%",     /* longer scroll distance so the animation has room to breathe */
    scrub: 1,          /* slight lag makes the parallax feel weightier, not instant */
    pin: true,
    pinSpacing: true,  /* holds the scroll distance — required for the animation to play */
    anticipatePin: 1
  }
});

heroTL
  /* bg drifts slightly — stadium is always visible behind the tunnel */
  .to(".hero__bg", {
    y: -window.innerHeight * 0.2,
    scale: 1.12,
    ease: "none"
  }, 0)
  /* tunnel fades and lifts out, revealing the stadium underneath */
  .to(".hero__mid", {
    y: -window.innerHeight * 0.8,
    opacity: 0,
    ease: "none"
  }, 0)
  /* grain fades out */
  .to(".hero__front", {
    y: -window.innerHeight * 1.0,
    opacity: 0,
    ease: "none"
  }, 0)
  /* title fades out in the first third of the scroll so it's gone before chapter 1 */
  .fromTo(".hero__content",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -60, ease: "none" },
    0
  );


/* =========================
   KICKOFF PARALLAX
   Slow background drift so the stadium feels
   alive when chapter 1 is in view
========================= */

gsap.to("#kickoff", {
  backgroundPositionY: "60%",
  ease: "none",
  scrollTrigger: {
    trigger: "#kickoff",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


/* =========================
   FLOATING SECTION IMAGES
========================= */

gsap.utils.toArray(".section__image img").forEach(img => {
  gsap.fromTo(img,
    { y: 80, opacity: 0 },
    {
      y: -40,
      opacity: 1,
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        end: "bottom 20%",
        scrub: true
      }
    }
  );
});


/* =========================
   TEXT REVEAL ANIMATION
========================= */

gsap.utils.toArray(".section__content").forEach(section => {
  gsap.from(section.children, {
    y: 30,
    opacity: 0,
    stagger: 0.08,
    scrollTrigger: {
      trigger: section,
      start: "top 75%"
    }
  });
});


/* =========================
   FINAL WHISTLE LIGHT DIM
========================= */

gsap.to("#final-whistle", {
  backgroundColor: "#0a0a0a",
  scrollTrigger: {
    trigger: "#final-whistle",
    start: "top center",
    end: "bottom bottom",
    scrub: true
  }
});