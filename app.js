const tl = gsap.timeline({ defaultes: { ease: "power1.out"}});

tl.to(".firstg", { y: "0%", duration: 2 });


gsap.to(".box1" ,{ scrollTrigger: ".box1", x: "0%", duration: 3});
gsap.to(".box2" ,{ scrollTrigger: ".box1", x: "0%", duration: 4});
gsap.to(".box3" ,{ scrollTrigger: ".box1", x: "0%", duration: 2});
gsap.to(".box4" ,{ scrollTrigger: ".box1", x: "0%", duration: 7});
gsap.to(".box5" ,{ scrollTrigger: ".box1", x: "0%", duration: 8});
gsap.to(".box6" ,{ scrollTrigger: ".box1", x: "0%", duration: 5});

