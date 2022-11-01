import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { EasePack } from 'gsap/EasePack';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

import smoothScroll from './lib/smoothScroll';
import imagesLoaded from 'imagesloaded'

let tl,
desktopEverInit = false, 
mobileEverInit = false, 
charsLittle,
chars,
charsSubTitle,
charsTextEnd,
charsLittleEnd,
isMobile = false,
elsToClear = '',
restartTl = document.querySelector('.restart-tl'),
smoothScrollTrigger;
const breakpointWidth = 991;


gsap.registerPlugin(ScrollTrigger, EasePack, SplitText, CustomEase, ScrollToPlugin);
gsap.config({
  force3D: true,
});
ScrollTrigger.config({ ignoreMobileResize: true });

const initMobileWebsite = () => {
  isMobile = true;
  //console.log('initMobileWebsite');
  document.body.style.height = "unset";

  gsap.set(".section1-img-1", { rotate: 24 });
  gsap.set(".section1-img-2", { rotate: -32 });
  gsap.set(".section1-img-3", { rotate: 32 });

  
  
  gsap.set('.m-hero-top, .m-hero-img-ctn', {
    autoAlpha: 0, 
    y: 100
  });

  gsap.set('.m-step-6-thanks .textEl',
  {
    xPercent: 0
  });

  gsap.set('.m-step-5-bottom-txt',
  {
    xPercent: 0
  });


  if(mobileEverInit === false) {
    mobileEverInit = true;
    const mRestart = document.querySelector('.m-restart');
    mRestart.addEventListener('click', () => {
      gsap.to(window, {scrollTo: 0, ease: "power3.inOut", duration: 5});
    });

    
    //console.log('startMobileWebsite start')
    const boxes = gsap.utils.toArray('.fadeAtScroll');

    // Set things up
    gsap.set(boxes, {autoAlpha: 0, y: 100});
  
    

  boxes.forEach((box, i) => {
    //console.log('boxes', box);
    // Set up your animation
    const anim = gsap.to(box, {duration: 1, autoAlpha: 1, y: 0, paused: true});
    
    // Use callbacks to control the state of the animation
    ScrollTrigger.create({
      trigger: box,
      end: "bottom bottom",
      //once: true,
      onEnter: self => {
        //console.log('onEnter');
        if(anim.progress() === 0) {
          //console.log('onEnter play');
          anim.play().then(() => self.kill())
        }
      }
    });
  });
  }
}

const initWebste = () => {
  isMobile = false;
  gsap.set('.hero-shine, .enjoy-container', {
    opacity:0
  })
  elsToClear += '.hero-shine,'
  
  gsap.set('.hero-bottom', {
    opacity:0,
    yPercent: 10
  })
  elsToClear += '.hero-bottom,'

  gsap.set('.hero-imgs', {scale: 1.25, yPercent: 30});
  elsToClear += '.hero-imgs,'

  gsap.set(".thanks-text", {x: 50})
  elsToClear += '.thanks-text,'

  gsap.set(".section1-img img", {scale: 1.25})
  elsToClear += '.section1-img img,'

  gsap.set(".mansonaryCompo .img1, .mansonaryCompo .img2, .mansonaryCompo .img3", { scale: 1.1 });
  elsToClear += '.mansonaryCompo .img1, .mansonaryCompo .img2, .mansonaryCompo .img3,'

  gsap.set(".mansonaryCompo .img4", { scale: 0.65 });
  elsToClear += '.mansonaryCompo .img4,'

  gsap.set(".mansonaryCompo .imgCtn1.firstVisible", { xPercent: 213, yPercent: 40 });
  gsap.set(".mansonaryCompo .imgCtn2.firstVisible", { xPercent: 420, yPercent: -32, width: "96%", scale: 1.3 });
  gsap.set(".mansonaryCompo .imgCtn3.firstVisible", { xPercent: 147, yPercent: 45 });
  gsap.set(".mansonaryCompo .imgCtn4.firstVisible", { xPercent: -4, yPercent: -3 });
  gsap.set(".mansonaryCompo .imgCtn5.firstVisible", { xPercent: -89, yPercent: 7});
  gsap.set(".mansonaryCompo .imgCtn.firstVisible", {y: window.innerHeight});
  elsToClear += '.mansonaryCompo .imgCtn.firstVisible, .mansonaryCompo .imgCtn1.firstVisible, .mansonaryCompo .imgCtn2.firstVisible, .mansonaryCompo .imgCtn3.firstVisible, .mansonaryCompo .imgCtn4.firstVisible, .mansonaryCompo .imgCtn5.firstVisible,'

  gsap.set('.step-10-img-ctn-1', {xPercent: 10});
  elsToClear += '.step-10-img-ctn-1,'

  gsap.set('.step-10 .img-col-1', {x: 200})
  gsap.set('.step-10 .img-col-2', {x: 150})
  gsap.set('.step-10 .img-col-3', {x: 350})
  gsap.set('.step-10 .img-col-4', {x: 100})
  elsToClear += '.step-10 .img-col-1, .step-10 .img-col-2, .step-10 .img-col-3, .step-10 .img-col-4,'

  gsap.set(".section1-img-1", { rotate: -2 });
  gsap.set(".section1-img-2", { rotate: 14.3 });
  gsap.set(".section1-img-3", { rotate: 4 });
  elsToClear += '.section1-img-1, .section1-img-2, .section1-img-3,'

  gsap.set(".section2-img-ctn img", { scale: 0.5 });
  elsToClear += '.section2-img-ctn img,'

  // gsap.set(".first-col .section2-img-ctn", {x: 0.05 * window.innerWidth});
  gsap.set(".second-col .section2-img-ctn", { x: -0.185 * window.innerWidth });
  elsToClear += '.second-col .section2-img-ctn,'

  gsap.set(".so-good-ctn", { yPercent: 100 });
  elsToClear += '.so-good-ctn,'

  gsap.set('.step-4 .card', {x: window.innerWidth})
  elsToClear += '.step-4 .card,'

  gsap.set('.step-4 .second-col', {xPercent: 75})
  elsToClear += '.step-4 .second-col,'

  gsap.set('.step-4 .second-col .step-4-img-ctn', {y: window.innerHeight})
  elsToClear += '.step-4 .second-col .step-4-img-ctn,'

  gsap.set('.step-5-6-ctn, .step-5-img-ctn-1.second', {x: window.innerWidth})
  elsToClear += '.step-5-6-ctn, .step-5-img-ctn-1.second,'

  gsap.set('.step-5-img-ctn-1', {scale: 0.375})
  elsToClear += '.step-5-img-ctn-1,'

  gsap.set('.step-6-img-ctn-1', {yPercent: 10})
  elsToClear += '.step-6-img-ctn-1,'

  gsap.set('.step-6-img-ctn-2', {yPercent: 50})
  elsToClear += '.step-6-img-ctn-2,'

  gsap.set('.step-6-txt', {xPercent: 100})
  elsToClear += '.step-6-txt,'

  gsap.set('.step-6 .ctnMansonaryImg img', {scale: 1.2})
  elsToClear += '.step-6 .ctnMansonaryImg img,'


  gsap.set('.step-7-img-ctn-1', {width: "55%", scale: 0.3, x: window.innerWidth * 0.675, transformOrigin: 'top right'})
  gsap.set('.step-7-img-ctn-2', {width: "25%", x: window.innerWidth * 0.425})
  gsap.set('.step-7-img-ctn-4', {scale: 0.3, height: "136.92%", marginTop: "-18.46%"})
  gsap.set('.step-7-img-ctn-5', {yPercent: 100})
  elsToClear += '.step-7-img-ctn-1, .step-7-img-ctn-2, .step-7-img-ctn-4, .step-7-img-ctn-5,'

  
  gsap.set('.step-7 .card', {x: window.innerWidth})
  elsToClear += '.step-7 .card,'

  gsap.set('.step-9-img-ctn', {x: window.innerWidth})
  gsap.set('.step-9-img-ctn-1', {scale: 0.33, xPercent: -25})
  gsap.set('.step-9-img-ctn-2 .ctnMansonaryImg', {marginLeft: 100})
  gsap.set('.step-9-img-ctn-3 .ctnMansonaryImg', {marginLeft: 200})
  gsap.set('.step-9-img-ctn-4 .ctnMansonaryImg', {marginLeft: 300})
  gsap.set('.step-9-img-ctn-5 .ctnMansonaryImg', {marginLeft: 400})
  gsap.set('.step-9-img-ctn-6 .ctnMansonaryImg', {marginLeft: 500})
  gsap.set('.step-9-img-ctn .ctnMansonaryImg img', {scale: 1.3, xPercent: -15})
  elsToClear += '.step-9-img-ctn, .step-9-img-ctn-1, .step-9-img-ctn-2 .ctnMansonaryImg, .step-9-img-ctn-3 .ctnMansonaryImg, .step-9-img-ctn-4 .ctnMansonaryImg, .step-9-img-ctn-5 .ctnMansonaryImg, .step-9-img-ctn-6 .ctnMansonaryImg, .step-9-img-ctn .ctnMansonaryImg img'


  if(desktopEverInit === false) {
    desktopEverInit = true;

    gsap.set(".headerRunningLine", { scaleX: 0 });
    elsToClear += '.headerRunningLine,'
  
    gsap.set(".headerLine", { scaleX: 1 });
    elsToClear += '.headerLine,'

    restartTl.addEventListener('click', backToStart)
  
    
    let splitText = new SplitText(".headerRight .toAdd", { type: "words,chars" });
    chars = splitText.chars;
    const rightImg = document.querySelector('.headerRight img');
  
    gsap.set(chars, { display:"none"});
    gsap.set(rightImg, { opacity: 0});
  
    let tween1 = gsap.to(".headerRight .toRemove", {
      duration: 0,
      display:"none",
      paused: true
    }),
    tween2 = gsap.to(chars, {
      duration: 0.1,
      display:"inline",
      stagger: {
        from: "start",
        amount: 0.5
      },
      paused: true
    }),
    tween3 =  gsap.to(rightImg, {
      duration: 0.3,
      opacity: 1,
      paused: true
    });
  
    const headerRight = document.querySelector('.headerRight');
    headerRight.addEventListener('mouseenter', ()=> {
      tween1.play().then(() => {
        tween2.play().then(() => {
          tween3.play();
        })
      });
    })
    headerRight.addEventListener('mouseleave', ()=> {
      tween3.reverse().then(() => {
        tween2.reverse().then(() => {
          tween1.reverse();
        });
      });
    })
  
    splitText = new SplitText(".step-11-text-big", { type: "words,chars" });
    charsTextEnd = splitText.chars;
  
    const splitTextEnd = new SplitText(".step-11-text-small", { type: "words,chars" });
    charsLittleEnd = splitTextEnd.chars;
  
    gsap.set(charsTextEnd, {opacity: 0, yPercent: 50})
    gsap.set(charsLittleEnd, {opacity: 0, yPercent: 50})

    splitText = new SplitText(".hero-txt .big", { type: "words,chars" });
    chars = splitText.chars;
  
    splitText = new SplitText(".hero-txt .small", { type: "words,chars" });
    charsLittle = splitText.chars;
  
    splitText = new SplitText('.hero-subtitle', { type: "lines" });
    charsSubTitle = splitText.lines;

    gsap.set([chars,charsLittle ], {
      opacity: 0, 
      yPercent: 50
    });
    gsap.set(charsSubTitle, {
      opacity: 0, 
      yPercent: 50
    })

  } else {

    gsap.set(".headerRunningLine", { scaleX: 0, opacity:1 });
    elsToClear += '.headerRunningLine,'
  
    gsap.set(".headerLine", { scaleX: 1, opacity:1 });
    elsToClear += '.headerLine,'
  }
}

const startMobileWebsite = () => {
  //console.log('startMobileWebsite')
  gsap.set(".m-step-8-imgs-ctn", {xPercent: 100});
  
  gsap.to('.m-hero-top, .m-header', {
    duration: 1, 
    autoAlpha: 1, 
    y: 0
  });

  gsap.to('.m-step-6-thanks .textEl',
  {
    duration: 10,
    xPercent: -100,
    ease: 'linear',
    repeat:-1
  });

  gsap.to('.m-step-5-bottom-txt',
  {
    duration: 6.23,
    xPercent: -100,
    ease: 'linear',
    repeat:-1
  });

  gsap.to('.m-hero-img-ctn', {
    duration: 1, 
    autoAlpha: 1, 
    y: 0
  })

  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".m-step-8-imgs-ctn",
      start: "top bottom-=100", 
      end: "bottom top", 
      scrub: 1,
      //markers: true
    }
  });

  tl.to('.m-step-8-imgs-ctn', {
    xPercent: -120
  });

  let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".m-thanks-text-container",
      start: "top bottom", 
      end: "bottom-=50 top", 
      scrub: true
    }
  });

  tl2.to('.section1-img-1', {
    rotate: -16
  })
  .to('.section1-img-2', {
    rotate: 8
  }, "<")
  .to('.section1-img-3', {
    rotate: -8
  }, "<");
}

const startWebSite = () => {
  //console.log('startWebSite')
  const horizontal = document.querySelector('.horizontalScroll'),
    mansonaryCompo = document.querySelector('.mansonaryCompo'),
    mansonaryCompoGrid = mansonaryCompo.querySelector('.container'),
    mansonaryCompoImgs = mansonaryCompo.querySelectorAll('.firstCtn img'),
    hero = horizontal.querySelector('.hero');
  const totalTime = 21.1325, // 83.805 
        totalPixelScrollable = 7 * window.innerWidth + 12 * window.innerHeight;
    
        
    gsap.to('.hero-shine, .enjoy-container', {
      duration: 0.6,
      opacity:1
    })
    gsap.to('.hero-bottom', {
      duration: 0.6,
      opacity:1,
      yPercent: 0
    })
    gsap.to(chars, {
      duration: 0.75,
      opacity: 1, 
      yPercent: 0,
      stagger: 0.05,
      ease: "expo.inOut"
    });
    gsap.to(charsLittle, {
      duration: 0.3,
      opacity: 1, 
      yPercent: 0,
      stagger: 0.03,
      delay: 0.5,
      ease: "expo.inOut"
    })
  
    gsap.to(charsSubTitle, {
      duration: 0.9,
      opacity: 1, 
      yPercent: 0,
      stagger: 0.05,
      delay: 0.7,
      ease: "expo.inOut"
    })
  //console.log('timeline',totalPixelScrollable )
  tl = gsap.timeline({
    defaults: { duration: 3, ease: 'none' },
    scrollTrigger: {
      trigger: horizontal,
      start: 'top top',
      end: 'top+=' + totalPixelScrollable,
      scrub: 0.3,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      // markers: true
    }
  })
   .addLabel('start')
    .to('.hero-txt', {
      yPercent: -50,
      duration: 1.9,
      ease: "power1.in"
    })                                //0   // 0.5
    .to(".hero-top", {
      yPercent: -100,
      duration: 1.8,
      ease: "power1.in"
    }, "<")                           //0.2   // 1.2
    .to('.hero-imgs', {
      scale: 1,
      duration: 1.8,
      //ease: "power1.out"
    }, "<")                                //0.2   // 1.2
    .to('.hero-imgs', {
      yPercent: 0,
      duration: 1.8,
      ease: "power1.out"
    }, "<")                                //0.2   // 1.4
    .to(".step-1", {
      x: -window.innerWidth * 0.68,
     // x: window.innerWidth,
      duration: 2.4
    }, ">")                                //1.3   // 2.3
    .to('.hero-imgs', {
      width: "50.3%",
      duration: 2.4
    }, "<")                             //1.4   // 3.4
    .to(".step-hero-1 .step-ctn", {
   //   xPercent: -68.5,
      x: -window.innerWidth * 0.78,
      duration: 2.4
    }, ">")                                //3.4   // 5.4   
    .to('.hero-imgs', {
      xPercent: -15,
      duration: 2.4
    }, "<") 
    .to(".section1-img-1", {
      rotate: 8,
      duration: 2.4
    }, "<")                                //3.4   // 5.4
    .to(".section1-img-2", {
      rotate: -1.3,
      duration: 2.4
    }, "<")                                //3.4   // 5.4
    .to(".section1-img-3", {
      rotate: -7,
      duration: 2.4
    }, "<")                                //3.4   // 5.4
    .to(".step-1-black-bg", {
      "clip-path": "inset(0 0 0 0%)",
      duration: 2.4
    }, ">")                                //5.4   // 5.7
    .to(".thanks-text", {
      x: -50,
      duration: 2.4
    }, "<")                                //5.4   // 5.7
    .to('.section1-img img', {
      scale: 1,
      duration: 2.4
    }, "<")                                //5.4   // 5.7
    .to(".section1-img-1", {
      rotate: 18,
      duration: 2.4
    }, ">")                                // 5.7   // 8.7
    .to(".section1-img-2", {
      rotate: -16.3,
      duration: 2.4
    }, "<")                                // 5.7   // 8.7
    .to(".section1-img-3", {
      rotate: -28,
      duration: 2.4
    }, "<")                                // 5.7   // 8.7
    .to(horizontal, {
      xPercent: -(hero.clientWidth * 2) / horizontal.clientWidth * 100,
      x: window.innerWidth,
      duration: 2.4
    }, "<")                                // 5.7   // 6.7
    .to(".section2-img-ctn", {
      x: 0,
      duration: 1.2
    }, "<+=1.2")                          // 6.2   // 6.7
    .to(".section2-img-ctn img", {
      scale: 1,
      ease: "power1.out",
      duration: 1.2
    }, "<+=1.2")                           // 6.7   // 7.2
    .to(".so-good-ctn", {
      yPercent: 0,
      y: -window.innerHeight,
      duration: 2
    }, ">")                               // 7.2   // 8.2
    .to(".section2-img-ctn img", {
      scale: 1.05,
      ease: "linear",
      duration: 2.3
    }, "<")
    .to(".first-col .section2-img-ctn", {
      y: -window.innerHeight,
     // ease: "power1.out",
      duration:  2
    }, ">-=0.88")                          // 8    // 9
    .to(".second-col .section2-img-ctn", {
      y: -window.innerHeight,
      ease: "power1.in",
      duration: 1.9
    }, "<+=0.88")                          // 8.3    // 9.05
    .to('.mansonaryCompo', {
      yPercent: -100,
      duration: 0
    }, "<-=0.1")                          // 8.4    // 8.4
    .to(".mansonaryCompo .imgCtn5", {
      y: 0,
      duration: 1.2,
      ease: "power1.out",
    }, "<")                               // 8.4    // 8.7
    .to(".mansonaryCompo .imgCtn3", {
      y: 0,
      duration: 1,
      ease: "power1.out",
    }, "<+=0.4")                          // 8.5    // 8.75
    .to(".mansonaryCompo .imgCtn2", {
      y: 0,
      duration: 1,
      ease: "power1.out",
    }, "<+=0.4")                          // 8.6     // 8.85
    .to(".mansonaryCompo .imgCtn1", {
      y: 0,
      duration: 0.8,
      ease: "power1.out",
    }, "<+=0.8")                          // 8.8    // 9
    .to(".mansonaryCompo .imgCtn4", {
      y: 0,
      duration: 1,
      ease: "power1.out",
    }, "<+=0.3")                        // 8.925    // 9.175
    .to(".mansonaryCompo .imgCtn1, .mansonaryCompo .imgCtn2, .mansonaryCompo .imgCtn3, .mansonaryCompo .imgCtn5, .mansonaryCompo .imgCtn6", {
      xPercent: 0,
      yPercent: 0,
      width: "100%",
      scale: 1,
      ease: "power4.out",
      duration: 2
    }, ">")                               // 9.175    // 10.175
    .to(".mansonaryCompo .imgCtn4.firstVisible", {
      xPercent: 0,
      yPercent: 0,
      width: "100%",
      scale: 1.15,
      ease: "power4.out",
      duration: 2
    }, "<")   
    .to(mansonaryCompoImgs, {
      scale: 1,
      ease: "power4.out",
      duration: 2
    }, "<")                               // 9.175    // 10.175
    .to('.firstCtn .innerImg', {
      "clip-path": "inset(0% 0 0 0)", 
      ease: "power1.out",
      duration: 1.5
    }, ">-=0.1")                            // 10.175   // 10.375
    .to('.mansonaryCompo .scrollableImg', {
      y: -window.innerHeight * 2,
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 4,
    }, ">")                               // 10.375   // 11.375
    .to('.mansonaryCompo .scrollableImgRight', {
      y: -window.innerHeight * 2.5,
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 3.5,
    }, "<")                               // 10.375   // 11.125
    .to('.mansonaryCompo .semiFastScrollableImg', {
      y: -window.innerHeight * 2,
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 3.2,
    }, "<")                               // 10.375   // 11.175
    .to('.mansonaryCompo .semiFastScrollableImgBis', {
      y: -window.innerHeight * 2.5,
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 3.75,
    }, "<")                               // 10.375   // 11,3125
    .to('.mansonaryCompo .fastScrollableImg', {
      y: -window.innerHeight * 2,
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 2.4,
    }, "<");                               // 10.375   // 10.975
    const lastImg = document.querySelector(".mansonaryCompo .fastScrollableImglast");
    tl.to('.mansonaryCompo .fastScrollableImglast', {
      y: -(lastImg.offsetTop + lastImg.clientHeight * 0.8 - window.innerHeight),
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 3.6,
    }, "<")                              // 10.375    // 11.275
    .to('.mansonaryCompo .fastScrollableImgBis', {
      y: -window.innerHeight * 2,
      ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 2.8,
    }, "<+=0.4")                         // 10.475    // 11.075
    .to('.mansonaryCompo .fastScrollableImgBeforelast', {
      y: -window.innerHeight * 3,
    //  ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 3.2
    }, "<+=0.8")                     // 10.625     // 11.425
    .to('.mansonaryCompo .fastScrollableImgBeforelastBis', {
      y: -window.innerHeight * 3,
     // ease: CustomEase.create("custom", "M0,0 C0.188,0 0.33,0.175 0.476,0.322 0.74,0.587 0.95,0.91 1,1 "),
      duration: 3.1
    }, "<")                             // 10.625  // 11.375
    .to('.firstCtn .ctnMansonaryImg', {
      y: -window.innerHeight,
      duration: 1.2,
    }, "<+=0.8")                        // 10.825    // 11.125 
    .to('.step-4 .second-col .step-4-img-ctn', {
      y: 0,
      stagger: {
        amount: 0.1
      },
      duration: 1
    }, "<+=0.8")                      // 11.025     // 12.275
    .to('.step-4 .second-col', {
      xPercent: 0,
      ease: "power1.out",
      duration: 0.8
    }, ">")                          // 12.275      // 12.375
    .to('.mansonaryCompo .fastScrollableImglast', {
      x: -hero.clientWidth * 0.25,
      ease: "power1.in",
      duration: 0.8
    }, "<")                          // 12.275     // 12.375
    .to('.step-4 .card', {
      x: 0,
      ease: "power1.out",
      duration: 2.5//0.3
    }, ">")                          // 12.375     // 12.675
    .to('.step-4-img-ctn-bigger .innerImg', {
      "clip-path": "inset(0 0 0 0%)",
      ease: "power3.in",
      duration: 2.0
    }, "<+=0.4")                   // 12.525     // 12.675
    .to('.mansonaryCompo .fastScrollableImglast', {
      x: -hero.clientWidth * 1.25 ,
      ease: "power1.in",
      duration: 1.25
    }, "<+=0.775")                     // 12.625    // 12.825
    .to('.step-4-img-ctn-bigger', {
      scale: 2.67,
      duration: 1.9
    }, ">")                    // 12.675   // 12.975
    .to('.step-4 .card .innerCard', {
      "clip-path": "inset(0 0 0 0%)",
      duration: 1.0977
    }, "<+=0.758")                    // 12.795   // 12.9675
    .to('.step-4-txt', {
      yPercent: -100,
      y: -window.innerHeight,
      duration: 5
    }, ">")                         // 12.9675    // 13.6675
    /*.to(horizontal, {
      xPercent: -(hero.clientWidth * 3) / horizontal.clientWidth * 100,
      x: window.innerWidth,
      duration: 0.5
    }, ">-=0.3")*/
    .to('.step-5-6-ctn', {
      x: 0,
      duration: 2.5
    }, ">")                          // 13.6675    // 14.1675
    .to('.step-4 .card', {
      x: -window.innerWidth,
      duration: 2.5
    }, "<+=1.65")                    // 13.9975    // 14.4975
    .to('.step-5-img-ctn-1.first', {
      scale: 1,
      ease: "power2.out",
      duration: 1.65
    }, "<+=1")                   // 14.1675     // 14.4975
    .to('.step-4',{
      opacity: 0,
      duration: 0
    } ,'>')                         // 14.4975     // 14.4975
    .to('.step-5-img-ctn-1.second', {
      x: 0,
      duration: 2.5
    }, ">-=1.3")                         // 14.4975     // 14.8275
    .to('.step-5-img-ctn-2 .inner', {
      "clip-path": "inset(0 0 0 0%)",
      ease: "power1.out",
      duration: 1
    }, "<+=1.5")                   // 14.5475     // 14.8275
    .to('.step-5-img-ctn-1.second', {
      scale: 1,
      ease: "power2.out",
      duration: 1.65
    }, ">")                         // 14.8275     // 15.1575
 /*   .to('.step-5-img-ctn-2', {
      x: -window.innerWidth * 0.29,
      duration: 0.33
    }, "<")*/
    /*.to('.step5-txt', {
      yPercent: -200,
      duration: 1.65
    }, ">")   */                      // 14.8275     // 15.1575
    .to('.step5-txt-bottom', {
      y: -500,
      duration: 2
    }, ">")
    .to('.step5-txt-top', {
      y: -500,
      duration: 2
    }, "<+=0.25")
    .to('.step5-txt-top, .step5-txt-bottom', {
      opacity: 0,
      duration: 1
    }, "<")
    .to('.step-5-img-ctn-1 img', {
      transformOrigin: 'top left',
      height: "150%",
      scale: 0.375,
      ease: "power1.in",
      duration: 2
    }, ">-=1")                        // 15.1575      // 15.4075
    .to('.step-5-img-ctn-2 img', {
      height: "45%",
      ease: "power1.in",
      duration: 1.8
    }, "<+=0.4")                   // 15.2575      // 15.5075
    .to('.step-6', {
      y: -window.innerHeight * 2,
      ease: "power1.out",
      duration:  1.8
    }, ">-=1")                 // 15.3325      // 15.5825
    .to('.step-6-img-ctn-1', {
      yPercent: -10,
      duration: 1.8
    }, "<")    
    .to('.step-6-img-ctn-2', {
      yPercent: 0,
      duration: 1.8
    }, "<")     
    .to('.step-5', {
      y: -window.innerHeight,
      ease: "power1.out",
      duration: 2.1
    }, "<+=0.4")                  // 15.3325      // 15.5825
    .to('.step-6-txt', {
      xPercent: 0,
      duration: 5
    }, "<+=0.5")                 // 15.4825     // 15.9825
    .to(".step-6 .ctnMansonaryImg img", {
      scale: 1,
      duration: 5
    }, "<")
    .to(horizontal, {
      xPercent: -(hero.clientWidth * 3) / horizontal.clientWidth * 100,
      x: window.innerWidth,
      duration: 2.7
    }, ">")                      // 15.9825     // 16.4825
    .to('.step-7-img-ctn-1', {
      x: 0,
      width: '100%',
      scale: 1,
      transformOrigin: 'top right',
      ease: "power2.out",
      duration: 2.5
    }, ">")                      // 16.4825     // 16.7825
    .to('.step-7-img-ctn-2', {
      width: '100%',
      x: 0,
      ease: "power2.out",
      duration: 2.5
    }, "<")                      // 16.4825     // 16.7825
    .to('.step-7-img-ctn-3', {
      y: -window.innerHeight * 2,
      duration: 4
    }, ">")                     // 16.7825      // 17.3825
    .to('.step-7-img-ctn-4', {
      y: -window.innerHeight * 2,
      duration: 4
    }, ">-=4")                     // 17.3825     // 17.9825
    .to('.step-7-img-ctn-4', {
      height: "100%",
      marginTop: 0,
      scale: 1,
      ease: "power1.out",
      duration: 2.25
    }, ">")                     // 17.9825      // 18.2325
    .to('.step-7-img-ctn-5', {
      yPercent: 0,
      ease: "power1.out",
      duration: 2.25
    }, "<")                     // 17.9825      // 18.2325
    .to('.step-7-txt', {
      x: -window.innerWidth,
      ease: "power2.in",
      duration: 2.1
    }, ">-=1")               // 18.2325      // 18.4325
    .to('.step-7 .card', {
      x: 0,
      ease: "power1.out",
      duration: 2.1
    }, "<")               // 18.1325       // 18.3325
    .to(horizontal, {
      xPercent: -(hero.clientWidth * 4) / horizontal.clientWidth * 100,
      x: window.innerWidth,
      duration: 2.7
    }, ">")                    // 18.4325      // 18.9325
    .to('.step-9-img-ctn-1', {
      xPercent: 0,
      duration: 2.7
    }, "<")                   // 18.4325      // 18.9325
    .to('.step-9-img-ctn-1', {
      scale: 1,
      ease: "power2.out",
      duration: 3
    }, ">")                   // 18.9325      // 19.1825
    .to('.step-9-img-ctn', {
      x:0,
      duration: 3
    }, ">")                  // 19.1825      // 19.4325
    .to('.step-9-img-ctn .ctnMansonaryImg', {
      marginLeft:0,
      duration: 3
    }, "<")                  // 19.1825      // 19.4325
    .to('.step-9-img-ctn .ctnMansonaryImg img', {
      xPercent: 15,
      duration: 3
    }, "<")
    .to(horizontal, {
      xPercent: -(hero.clientWidth * 5) / horizontal.clientWidth * 100,
      x: window.innerWidth,
      duration: 2.7
    }, ">")                 // 19.4325       // 19.9325
    .to('.step-10-img-ctn-1', {
      xPercent: 0,
      ease: "power1.in",
      duration: 2.7
    }, "<")                 // 19.4325       // 19.9325
    .to('.step-10 .img-col', {
      x: 0,
      ease: "power2.in",
      duration: 2.7
    }, "<")                 // 19.4325       // 19.9325
    .to('.step-10-txt', {
      /*yPercent: -85,
      duration: 7.95*/
      yPercent: -100,
      duration: 9.35
    }, ">-=0.375")           // 19.6825      // 20.4325
    .to('.step-10 .img-col-1', {
      y: -window.innerHeight * 1,
      duration: 2.65
    }, "<+=1.35")           // 19.9325      // 20.4325
    .to('.step-10 .img-col-2', {
      y: -window.innerHeight * 1.5,
      duration: 4.5
    }, "<")                 // 19.9325     // 20.4325
    .to('.step-10 .img-col-3', {
      y: -window.innerHeight * 1.5,
      duration: 3.75
    }, "<")                // 19.9325     // 20.4325
    .to('.step-10 .img-col-4', {
      y: -1.5 * window.innerHeight,
      duration: 4.9
    }, "<")                // 19.9325     // 20.4325
    .to('.step-10 .img-col-5', {
      y: -window.innerHeight * 2,
      duration: 6
    }, "<")                // 20.1325     // 20.7325
    .to('.step-10 .img-col-6', {
      y: -window.innerHeight * 3,
      duration: 8.175
    }, "<")                // 19.9325     // 20.5325
    .to('.step-10 .img-col-7', {
      y: -window.innerHeight * 2.5,
      duration: 7.5
    }, "<");         // 20.1825      // 20,7325
    const img1 = document.querySelector('.step-10 .img-col-8');
    tl.to(img1, {
      y: -img1.offsetTop /*-window.innerHeight * 2.2*/,
      duration: 6.6
    }, "<");                  // 19.6825     // 20.6325
    const img2 = document.querySelector('.step-10 .img-col-10');
    tl.to(img2, {
      y: -img2.offsetTop + (window.innerHeight - img2.clientHeight),
      duration: 5.8
    }, "<+=0.8");           // 20.1325     // 20.6325
    const img3 = document.querySelector('.step-10 .img-col-9');
    tl.to(img3, {
      y: -img3.offsetTop + (window.innerHeight/2 - img3.clientHeight/2) /*-window.innerHeight * 2.2*/,
      duration: 7.6
    }, "<-=1.8")           // 20.0325     // 20.6325
    .to('.step-10-img-ctn-1 img', {
      scale: 1.033,
      duration: 4.85
    }, "<+=2.65")
    .to(horizontal, {
      xPercent: -(hero.clientWidth * 6 + 3) / horizontal.clientWidth * 100,
      x: window.innerWidth,
      duration: 2.7
    }, ">+=0.1")         // 20.6325     // 21.1325
    .call(()=> {
      //console.log('call');
      gsap.to(charsTextEnd, {
        duration: 0.75,
        opacity: 1,
        yPercent:0,
        stagger: 0.05,
        ease: "expo.inOut"
      });
      gsap.to(charsLittleEnd, {
        duration: 0.3,
        opacity: 1,
        yPercent:0,
        stagger: 0.03,
        delay: 0.5,
        ease: "expo.inOut"
      })
    }, [], "<+=1");
    const duration = tl.duration();
    tl.to('.headerRunningLine', {
      scaleX: 1,
      duration: duration,
     // ease: "power1.out"
    }, "start")
    .to('.headerLine', {
      scaleX: 0,
      duration: duration,
     // ease: "power1.out"
    }, "<");
}

const backToStart = () => {
  //console.log('backToStart');
  if(tl) {
  //  tl.pause(0);
    gsap.to(window, {scrollTo: tl.scrollTrigger.labelToScroll("start"), ease: CustomEase.create("custom", "M0,0 C0.173,0 0.32,0.036 0.4,0.13 0.479,0.223 0.488,0.364 0.502,0.506 0.514,0.628 0.496,0.824 0.602,0.916 0.675,0.98 0.869,1 1,1 "), duration: 5});
    //tl.timeScale(2).reverse(0);
  }
}

/***********************************/
/********** Preload stuff **********/

// Preload images
const preloadImages = () => {
  return new Promise((resolve, reject) => {
    imagesLoaded(document.querySelectorAll('section img'), resolve);
  });
};

const resizeStuff = () => {
  //console.log('resizeStuff tl : ', tl);
  if(tl) {
   clearScene(tl);
  }
  if( breakpointWidth < window.innerWidth) {
    if(desktopEverInit === false) {
      smoothScrollTrigger = smoothScroll("#content");
    } else {
      ScrollTrigger.defaults({scroller: "#content"});
    }
    initWebste();
    startWebSite();
  } else if(isMobile === false) {
    isMobile = true;
    ScrollTrigger.defaults({scroller: window});
    initMobileWebsite();
    startMobileWebsite();
    //to mobile stuff
  }
}

function clearScene(timeline) {
    /*let Alltrigger = ScrollTrigger.getAll()
    for (let i = 0; i < Alltrigger.length; i++) {
      console.log(Alltrigger[i]);
      Alltrigger[i].kill(true)
      Alltrigger[i].refresh()
    }*/
    if(smoothScrollTrigger) {
      smoothScrollTrigger.kill(true);
    }

  var targets = timeline.getChildren();
  for (var i=0; i<targets.length; i++) {
    if (targets[i].target != null) {
       gsap.set(targets[i].target.selector, {clearProps:"all"});
    }
  }
  if(elsToClear) {
    gsap.set(elsToClear, {clearProps:"all"});
  }
  if(timeline.scrollTrigger) {
    timeline.scrollTrigger.kill(true);
  }
  timeline.pause(0).kill(true);
}
function loadingTimeline() {

  gsap.set('.loadingCtn .happyCtn, .loadingCtn .shineCtn', {
    yPercent: -50,
    opacity: 0
  })
  gsap.set('.headerItem', {
    y: -100,
    opacity: 0
  })
  gsap.to('.headerItem', {
    y: 0,
    opacity: 1,
    duration: 0.5
  })
  gsap.to('.loadingCtn .happyCtn, .loadingCtn .shineCtn', {
    opacity: 1,
    delay: 0.75,
    duration: 0.5
  })

  let loadingTl = gsap.timeline({repeat: -1, delay: 0.75});

  loadingTl.to('.loadingCtn .shineCtn', {
    yPercent: 50,
    rotateZ: 180
  })
  .to('.loadingCtn .happyCtn', {
    xPercent: 100,
    rotateZ: 90
  })
  .to('.loadingCtn .shineCtn', {
    xPercent: -100,
    rotateZ: 90
  })
  .to('.loadingCtn .happyCtn', {
    yPercent: 50,
    rotateZ: 0
  })
  .to('.loadingCtn .shineCtn', {
    yPercent: -50,
    rotateZ: 270
  })
  .to('.loadingCtn .happyCtn', {
    xPercent: 0,
    rotateZ: -90
  })
  .to('.loadingCtn .shineCtn', {
    xPercent: 0,
    rotateZ: 180
  })
  .to('.loadingCtn .happyCtn', {
    yPercent: -50,
    rotateZ: 0
  })
  .call(() => {
    if(siteReady) {
      loadingTl.kill();
      gsap.to('.loadingCtn', {
        opacity: 0,
        duration: 0.25
      })
      gsap.to('#content, #mobile-content', {
        opacity: 1,
        duration: 0.5
      })
      runSite();
    }
  })
}

function runSite() {
  if(breakpointWidth < window.innerWidth) {
    smoothScrollTrigger = smoothScroll("#content");
    //console.log('preloadImages run website');
    startWebSite();
  } else {
    //console.log('preloadImages mobile');
    startMobileWebsite();
    //to mobile stuff
  }
  document.body.classList.remove('loading');
}

let imgLoaded = false, domLoaded = false, siteReady = false;

loadingTimeline();
if(breakpointWidth < window.innerWidth) {
  initWebste();
} else {
  initMobileWebsite();
}

preloadImages().then(() => {
  //console.log('preloadImages done');
  imgLoaded = true;
  if (domLoaded) {
    siteReady = true;
  }
});

window.addEventListener('load', () => {
  //console.log('DOMContentLoaded done');
  domLoaded = true;
  if (imgLoaded) {
    siteReady = true;
  } 
})

window.addEventListener('resize', resizeStuff)