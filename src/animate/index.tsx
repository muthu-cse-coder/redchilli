// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // import style from './index.module.scss';

// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // const Animate = () => {
// // // // //   const sectionRef = useRef(null);
// // // // //   const triggerRef = useRef(null);

// // // // //   const images = [
// // // // //     "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
// // // // //     "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
// // // // //     "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
// // // // //     "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
// // // // //     "/1702ce06-93d8-4118-8751-795135678c39.jfif",
// // // // //     "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
// // // // //     "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
// // // // //     "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif"
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const section = sectionRef.current;
// // // // //     const trigger = triggerRef.current;

// // // // //     const pin = gsap.to(section, {
// // // // //       x: () => -(section.offsetWidth - window.innerWidth),
// // // // //       ease: "none",
// // // // //       scrollTrigger: {
// // // // //         trigger: trigger,
// // // // //         start: "top top",
// // // // //         end: () => `+=${section.offsetWidth}`,
// // // // //         scrub: 0.6,
// // // // //         pin: true,
// // // // //         invalidateOnRefresh: true,
// // // // //         anticipatePin: 1,
// // // // //       },
// // // // //     });

// // // // //     return () => {
// // // // //       pin.kill();
// // // // //       ScrollTrigger.getAll().forEach(t => t.kill());
// // // // //     };
// // // // //   }, []);

// // // // //   const handleNav = (direction) => {
// // // // //     const totalWidth = sectionRef.current.offsetWidth;
// // // // //     const windowWidth = window.innerWidth;
// // // // //     const scrollDistance = totalWidth - windowWidth;
// // // // //     const step = scrollDistance / (images.length - 1);
// // // // //     if (direction === 'next') {
// // // // //       window.scrollBy({ top: step, behavior: 'smooth' });
// // // // //     } else {
// // // // //       window.scrollBy({ top: -step, behavior: 'smooth' });
// // // // //     }
// // // // //   };
  
// // // // //   return (
// // // // //     <section className={style.scrollSectionOuter} id='demos'>
// // // // //       <div className={style.titleWrapper}>
// // // // //         <h1>LIVE SCREENS</h1>
// // // // //       </div>
// // // // //       <div ref={triggerRef} className={style.pinContainer}>
        
// // // // //         <button className={`${style.arrowBtn} ${style.left}`} onClick={() => handleNav('prev')}>
// // // // //           &#10094;
// // // // //         </button>
// // // // //         <button className={`${style.arrowBtn} ${style.right}`} onClick={() => handleNav('next')}>
// // // // //           &#10095;
// // // // //         </button>
// // // // //         <div ref={sectionRef} className={style.scrollSectionInner}>
// // // // //           {images.map((src, index) => (
// // // // //             <div key={index} className={style.scrollImageCard}>
// // // // //               <img src={src} alt={`screen-${index}`} />
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Animate;
// // // // import React, { useEffect, useRef } from 'react';
// // // // import { gsap } from 'gsap';
// // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // import style from './index.module.scss';

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // const Animate = () => {
// // // //   const sectionRef = useRef<HTMLDivElement | null>(null);
// // // //   const triggerRef = useRef<HTMLDivElement | null>(null);

// // // //   const images = [
// // // //     "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
// // // //     "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
// // // //     "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
// // // //     "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
// // // //     "/1702ce06-93d8-4118-8751-795135678c39.jfif",
// // // //     "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
// // // //     "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
// // // //     "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif"
// // // //   ];

// // // //   useEffect(() => {
// // // //     const section = sectionRef.current;
// // // //     const trigger = triggerRef.current;
// // // //     if (!section || !trigger) return;

// // // //     const pin = gsap.to(section, {
// // // //       x: () => -(section.offsetWidth - window.innerWidth),
// // // //       ease: "none",
// // // //       scrollTrigger: {
// // // //         trigger: trigger,
// // // //         start: "top top",
// // // //         end: () => `+=${section.offsetWidth}`,
// // // //         scrub: 0.6,
// // // //         pin: true,
// // // //         invalidateOnRefresh: true,
// // // //         anticipatePin: 1,
// // // //       },
// // // //     });

// // // //     return () => {
// // // //       pin.kill();
// // // //       ScrollTrigger.getAll().forEach((t) => t.kill());
// // // //     };
// // // //   }, []);

// // // //   const handleNav = (direction: 'next' | 'prev') => {
// // // //     const section = sectionRef.current;
// // // //     if (!section) return;

// // // //     const totalWidth = section.offsetWidth;
// // // //     const windowWidth = window.innerWidth;
// // // //     const scrollDistance = totalWidth - windowWidth;
// // // //     const step = scrollDistance / (images.length - 1);

// // // //     if (direction === 'next') {
// // // //       window.scrollBy({ top: step, behavior: 'smooth' });
// // // //     } else {
// // // //       window.scrollBy({ top: -step, behavior: 'smooth' });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className={style.scrollSectionOuter} id="demos">
// // // //       <div className={style.titleWrapper}>
// // // //         <h1>LIVE SCREENS</h1>
// // // //       </div>
// // // //       <div ref={triggerRef} className={style.pinContainer}>
// // // //         <button
// // // //           className={`${style.arrowBtn} ${style.left}`}
// // // //           onClick={() => handleNav('prev')}
// // // //         >
// // // //           &#10094;
// // // //         </button>

// // // //         <button
// // // //           className={`${style.arrowBtn} ${style.right}`}
// // // //           onClick={() => handleNav('next')}
// // // //         >
// // // //           &#10095;
// // // //         </button>
// // // //         <div ref={sectionRef} className={style.scrollSectionInner}>
// // // //           {images.map((src, index) => (
// // // //             <div key={index} className={style.scrollImageCard}>
// // // //               <img src={src} alt={`screen-${index}`} />
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };
// // // // export default Animate;
// // // import React, { useRef } from 'react';
// // // import style from './index.module.scss';

// // // const Animate = () => {
// // //   const sectionRef = useRef<HTMLDivElement | null>(null);

// // //   const images = [
// // //     "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
// // //     "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
// // //     "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
// // //     "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
// // //     "/1702ce06-93d8-4118-8751-795135678c39.jfif",
// // //     "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
// // //     "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
// // //     "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif"
// // //   ];

// // //   const handleNav = (direction: 'next' | 'prev') => {
// // //     const section = sectionRef.current;

// // //     if (!section) return;

// // //     const moveAmount = window.innerWidth * 0.8;

// // //     section.scrollBy({
// // //       left: direction === 'next' ? moveAmount : -moveAmount,
// // //       behavior: 'smooth',
// // //     });
// // //   };

// // //   return (
// // //     <section className={style.scrollSectionOuter} id="demos">
// // //       <div className={style.titleWrapper}>
// // //         <h1>LIVE SCREENS</h1>
// // //       </div>

// // //       <div className={style.sliderWrapper}>
// // //         <button
// // //           className={`${style.arrowBtn} ${style.left}`}
// // //           onClick={() => handleNav('prev')}
// // //           aria-label="Previous"
// // //         >
// // //           &#10094;
// // //         </button>

// // //         <div
// // //           ref={sectionRef}
// // //           className={style.scrollSectionInner}
// // //         >
// // //           {images.map((src, index) => (
// // //             <div
// // //               key={index}
// // //               className={style.scrollImageCard}
// // //             >
// // //               <img
// // //                 src={src}
// // //                 alt={`screen-${index}`}
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <button
// // //           className={`${style.arrowBtn} ${style.right}`}
// // //           onClick={() => handleNav('next')}
// // //           aria-label="Next"
// // //         >
// // //           &#10095;
// // //         </button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Animate;
// // import React, { useRef, useEffect, useCallback } from 'react';
// // import style from './index.module.scss';

// // const SPEED = 1.2;     
// // const RESUME_DELAY = 1500;  

// // const Animate = () => {
// //   const sectionRef      = useRef<HTMLDivElement | null>(null);
// //   const animFrameRef    = useRef<number | null>(null);
// //   const directionRef    = useRef<1 | -1>(1);   
// //   const isPausedRef     = useRef(false);
// //   const resumeTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
// //   const touchStartXRef  = useRef(0);

// //   const images = [
// //     "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
// //     "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
// //     "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
// //     "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
// //     "/1702ce06-93d8-4118-8751-795135678c39.jfif",
// //     "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
// //     "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
// //     "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif",
// //   ];
// //   const tripleImages = [...images, ...images, ...images];
// //   const scheduleResume = useCallback((dir?: 1 | -1) => {
// //     isPausedRef.current = true;
// //     if (dir !== undefined) directionRef.current = dir;
// //     if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
// //     resumeTimerRef.current = setTimeout(() => {
// //       isPausedRef.current = false;
// //     }, RESUME_DELAY);
// //   }, []);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;
// //     const initScroll = () => {
// //       section.scrollLeft = section.scrollWidth / 3;
// //     };
// //     const initTimer = setTimeout(initScroll, 50);
// //     const tick = () => {
// //       if (section) {
// //         if (!isPausedRef.current) {
// //           section.scrollLeft += SPEED * directionRef.current;
// //         }
// //         const singleSetWidth = section.scrollWidth / 3;
// //         if (section.scrollLeft >= singleSetWidth * 2) {
// //           section.scrollLeft -= singleSetWidth;  
// //         } else if (section.scrollLeft <= 0) {
// //           section.scrollLeft += singleSetWidth;   
// //         }
// //       }
// //       animFrameRef.current = requestAnimationFrame(tick);
// //     };
// //     animFrameRef.current = requestAnimationFrame(tick);
// //        const onWheel = (e: WheelEvent) => {
// //       const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
// //       scheduleResume(delta > 0 ? 1 : -1);
// //     };
// //        const onTouchStart = (e: TouchEvent) => {
// //       touchStartXRef.current = e.touches[0].clientX;
// //     };
// //     const onTouchEnd = (e: TouchEvent) => {
// //       const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
// //       if (Math.abs(deltaX) > 10) {                
// //         scheduleResume(deltaX > 0 ? 1 : -1);
// //       }
// //     };

// //     section.addEventListener('wheel',      onWheel,      { passive: true });
// //     section.addEventListener('touchstart', onTouchStart, { passive: true });
// //     section.addEventListener('touchend',   onTouchEnd,   { passive: true });

// //     return () => {
// //       clearTimeout(initTimer);
// //       if (animFrameRef.current)   cancelAnimationFrame(animFrameRef.current);
// //       if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
// //       section.removeEventListener('wheel',      onWheel);
// //       section.removeEventListener('touchstart', onTouchStart);
// //       section.removeEventListener('touchend',   onTouchEnd);
// //     };
// //   }, [scheduleResume]);

// //   const handleNav = (direction: 'next' | 'prev') => {
// //     const section = sectionRef.current;
// //     if (!section) return;
// //     const dir = direction === 'next' ? 1 : -1;
// //     section.scrollBy({ left: dir * window.innerWidth * 2.8, behavior: 'smooth' });
// //     scheduleResume(dir);  
// //   };

// //   return (
// //     <section className={style.scrollSectionOuter} id="demos">
// //       <div className={style.titleWrapper}>
// //         <h1>LIVE SCREENS</h1>
// //       </div>

// //       <div className={style.sliderWrapper}>
// //         <button
// //           className={`${style.arrowBtn} ${style.left}`}
// //           onClick={() => handleNav('prev')}
// //           aria-label="Previous"
// //         >
// //           &#10094;
// //         </button>

// //         <div ref={sectionRef} className={style.scrollSectionInner}>
// //           {tripleImages.map((src, index) => (
// //             <div key={index} className={style.scrollImageCard}>
// //               <img src={src} alt={`screen-${index % images.length}`} />
// //             </div>
// //           ))}
// //         </div>

// //         <button
// //           className={`${style.arrowBtn} ${style.right}`}
// //           onClick={() => handleNav('next')}
// //           aria-label="Next"
// //         >
// //           &#10095;
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Animate;
// import React, { useRef, useEffect, useCallback } from 'react';
// import style from './index.module.scss';

// const SPEED = 1.5;
// const RESUME_DELAY = 1500;

// const IMAGES = [
//   "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
//   "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
//   "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
//   "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
//   "/1702ce06-93d8-4118-8751-795135678c39.jfif",
//   "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
//   "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
//   "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif",
// ];

// const DOUBLED = [...IMAGES, ...IMAGES];

// const Animate = () => {
//   const containerRef  = useRef<HTMLDivElement>(null);
//   const trackRef      = useRef<HTMLDivElement>(null);
//   const posRef        = useRef(0);           // current translateX in px
//   const dirRef        = useRef<1 | -1>(1);   // 1 = left (forward), -1 = right (backward)
//   const pausedRef     = useRef(false);
//   const rafRef        = useRef<number>(0);
//   const resumeTimer   = useRef<ReturnType<typeof setTimeout>>();
//   const touchStartX   = useRef(0);
//   const singleW       = useRef(0);           // px width of ONE image set

//   const scheduleResume = useCallback((dir?: 1 | -1) => {
//     pausedRef.current = true;
//     if (dir !== undefined) dirRef.current = dir;
//     clearTimeout(resumeTimer.current);
//     resumeTimer.current = setTimeout(() => {
//       pausedRef.current = false;
//     }, RESUME_DELAY);
//   }, []);

//   useEffect(() => {
//     const track     = trackRef.current;
//     const container = containerRef.current;
//     if (!track || !container) return;
//     const measureWidth = () => {
//       singleW.current = track.scrollWidth / 2;
//     };
//     const ro = new ResizeObserver(measureWidth);
//     ro.observe(track);
//     const initTimer = setTimeout(measureWidth, 50);
//     const tick = () => {
//       const sw = singleW.current;

//       if (!pausedRef.current && sw > 0) {
//         posRef.current -= SPEED * dirRef.current;
//       }
//       if (sw > 0) {
//         while (posRef.current <= -sw) posRef.current += sw;
//         while (posRef.current >   0)  posRef.current -= sw;
//       }

//       track.style.transform = `translateX(${posRef.current}px)`;
//       rafRef.current = requestAnimationFrame(tick);
//     };
//     rafRef.current = requestAnimationFrame(tick);

// const onWheel = (e: WheelEvent) => {
//   if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
//   e.preventDefault();
//   posRef.current -= e.deltaX;
//   scheduleResume(e.deltaX > 0 ? 1 : -1);
// };
//     const onTouchStart = (e: TouchEvent) => {
//       touchStartX.current = e.touches[0].clientX;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       const dx = touchStartX.current - e.touches[0].clientX;
//       posRef.current  -= dx;
//       touchStartX.current = e.touches[0].clientX;
//       if (Math.abs(dx) > 1) scheduleResume(dx > 0 ? 1 : -1);
//     };

//     container.addEventListener('wheel',      onWheel,      { passive: false });
//     container.addEventListener('touchstart', onTouchStart, { passive: true  });
//     container.addEventListener('touchmove',  onTouchMove,  { passive: true  });

//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       clearTimeout(resumeTimer.current);
//       clearTimeout(initTimer);
//       ro.disconnect();
//       container.removeEventListener('wheel',      onWheel);
//       container.removeEventListener('touchstart', onTouchStart);
//       container.removeEventListener('touchmove',  onTouchMove);
//     };
//   }, [scheduleResume]);

//   const handleNav = (dir: 'next' | 'prev') => {
//     const d: 1 | -1 = dir === 'next' ? 1 : -1;
//     const jump = (containerRef.current?.offsetWidth ?? 600) * 0.8;
//     posRef.current -= d * jump;

//     const sw = singleW.current;
//     if (sw > 0) {
//       while (posRef.current <= -sw) posRef.current += sw;
//       while (posRef.current >   0)  posRef.current -= sw;
//     }
//     scheduleResume(d);
//   };

//   return (
//     <section className={style.scrollSectionOuter} id="demos">
//       <div className={style.titleWrapper}>
//         <h1>LIVE SCREENS</h1>
//       </div>

//       <div className={style.sliderWrapper}>
//         <button
//           className={`${style.arrowBtn} ${style.left}`}
//           onClick={() => handleNav('prev')}
//           aria-label="Previous"
//         >
//           &#10094;
//         </button>
//         <div ref={containerRef} className={style.scrollSectionInner}>
//           <div ref={trackRef} className={style.track}>
//             {DOUBLED.map((src, i) => (
//               <div key={i} className={style.scrollImageCard}>
//                 <img
//                   src={src}
//                   alt={`screen-${i % IMAGES.length}`}
//                   draggable={false}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className={`${style.arrowBtn} ${style.right}`}
//           onClick={() => handleNav('next')}
//           aria-label="Next"
//         >
//           &#10095;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Animate;
import React, { useRef, useEffect, useCallback } from 'react';
import style from './index.module.scss';

const SPEED = 1.5;
const RESUME_DELAY = 1500;

const IMAGES = [
  "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
  "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
  "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
  "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
  "/1702ce06-93d8-4118-8751-795135678c39.jfif",
  "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
  "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
  "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif",
];

const DOUBLED = [...IMAGES, ...IMAGES];

const Animate = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLDivElement>(null);
  const posRef        = useRef(0);
  const dirRef        = useRef<1 | -1>(1);
  const pausedRef     = useRef(false);
  const hoveredRef    = useRef(false); // ✅ hover state track பண்ண
  const rafRef        = useRef<number>(0);
  const resumeTimer   = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX   = useRef(0);
  const singleW       = useRef(0);

  const scheduleResume = useCallback((dir?: 1 | -1) => {
    pausedRef.current = true;
    if (dir !== undefined) dirRef.current = dir;
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      // ✅ hover-ல இருந்தா resume பண்ணாதே
      if (!hoveredRef.current) {
        pausedRef.current = false;
      }
    }, RESUME_DELAY);
  }, []);

  useEffect(() => {
    const track     = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const measureWidth = () => {
      singleW.current = track.scrollWidth / 2;
    };
    const ro = new ResizeObserver(measureWidth);
    ro.observe(track);
    const initTimer = setTimeout(measureWidth, 50);

    const tick = () => {
      const sw = singleW.current;

      if (!pausedRef.current && !hoveredRef.current && sw > 0) { // ✅ hover check
        posRef.current -= SPEED * dirRef.current;
      }
      if (sw > 0) {
        while (posRef.current <= -sw) posRef.current += sw;
        while (posRef.current >   0)  posRef.current -= sw;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
      e.preventDefault();
      posRef.current -= e.deltaX;
      scheduleResume(e.deltaX > 0 ? 1 : -1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      const dx = touchStartX.current - e.touches[0].clientX;
      posRef.current  -= dx;
      touchStartX.current = e.touches[0].clientX;
      if (Math.abs(dx) > 1) scheduleResume(dx > 0 ? 1 : -1);
    };

    // ✅ Mouse enter — pause
    const onMouseEnter = () => {
      hoveredRef.current = true;
      pausedRef.current = true;
      clearTimeout(resumeTimer.current);
    };

    // ✅ Mouse leave — resume
    const onMouseLeave = () => {
      hoveredRef.current = false;
      pausedRef.current = false;
    };

    container.addEventListener('wheel',      onWheel,      { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true  });
    container.addEventListener('touchmove',  onTouchMove,  { passive: true  });
    container.addEventListener('mouseenter', onMouseEnter);  // ✅
    container.addEventListener('mouseleave', onMouseLeave);  // ✅

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resumeTimer.current);
      clearTimeout(initTimer);
      ro.disconnect();
      container.removeEventListener('wheel',      onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove',  onTouchMove);
      container.removeEventListener('mouseenter', onMouseEnter); // ✅
      container.removeEventListener('mouseleave', onMouseLeave); // ✅
    };
  }, [scheduleResume]);

  const handleNav = (dir: 'next' | 'prev') => {
    const d: 1 | -1 = dir === 'next' ? 1 : -1;
    const jump = (containerRef.current?.offsetWidth ?? 600) * 0.8;
    posRef.current -= d * jump;

    const sw = singleW.current;
    if (sw > 0) {
      while (posRef.current <= -sw) posRef.current += sw;
      while (posRef.current >   0)  posRef.current -= sw;
    }
    scheduleResume(d);
  };

  return (
    <section className={style.scrollSectionOuter} id="demos">
      <div className={style.titleWrapper}>
        <h1>LIVE SCREENS</h1>
      </div>

      <div className={style.sliderWrapper}>
        <button
          className={`${style.arrowBtn} ${style.left}`}
          onClick={() => handleNav('prev')}
          aria-label="Previous"
        >
          &#10094;
        </button>

        <div ref={containerRef} className={style.scrollSectionInner}>
          <div ref={trackRef} className={style.track}>
            {DOUBLED.map((src, i) => (
              <div key={i} className={style.scrollImageCard}>
                <img
                  src={src}
                  alt={`screen-${i % IMAGES.length}`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${style.arrowBtn} ${style.right}`}
          onClick={() => handleNav('next')}
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Animate;