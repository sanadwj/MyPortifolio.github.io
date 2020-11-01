const tl = gsap.timeline({ defaultes: { ease: "power1.out"}});

tl.to(".firstg", { y: "0%", duration: 2 });


gsap.to(".box1" ,{ scrollTrigger: ".box1", x: "0%", duration: 3});

