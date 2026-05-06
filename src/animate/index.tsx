import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from './index.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Animate = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const images = [
    "/cbe03955-5a2b-453c-bc98-494763a551f0.jfif",
    "/b5c44bab-3acc-48d8-9fe3-3206cdc40723.jfif",
    "/d9a98836-72f2-422c-a4e8-084c9268fc27.jfif",
    "/595cbb3f-f435-4f24-b4f6-26cf1653674f.jfif",
    "/1702ce06-93d8-4118-8751-795135678c39.jfif",
    "/8381c6c6-f7bc-4b9f-834f-b02d16eaaab3.jfif",
    "/23f647b3-168c-4083-83d4-584b759f15b4.jfif",
    "/963f0369-e2b0-45f7-84ce-f981fe7ddba8.jfif"
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    let ctx = gsap.context(() => {
      gsap.to(section, {
        x: () => -(section.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${section.scrollWidth}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, triggerRef);

    return () => ctx.revert(); // Cleanup lebih bersih pakai ctx.revert()
  }, []);

  const handleNav = (direction) => {
    // Navigasi manual berdasarkan scroll position
    const scrollST = ScrollTrigger.getAll()[0];
    if (!scrollST) return;

    const currentScroll = window.scrollY;
    const totalScroll = scrollST.end - scrollST.start;
    const step = totalScroll / (images.length);

    if (direction === 'next') {
      window.scrollTo({ top: currentScroll + step, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: currentScroll - step, behavior: 'smooth' });
    }
  };

  return (
    <section className={style.scrollSectionOuter}>
      <div className={style.titleWrapper}>
        <h1>LIVE SCREENS</h1>
      </div>
      
      <div ref={triggerRef} className={style.pinContainer}>
        <button 
          className={`${style.arrowBtn} ${style.left}`} 
          onClick={() => handleNav('prev')}
          aria-label="Previous"
        >
          &#10094;
        </button>
        
        <button 
          className={`${style.arrowBtn} ${style.right}`} 
          onClick={() => handleNav('next')}
          aria-label="Next"
        >
          &#10095;
        </button>

        <div ref={sectionRef} className={style.scrollSectionInner}>
          {images.map((src, index) => (
            <div key={index} className={style.scrollImageCard}>
              <img src={src} alt={`screen-${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Animate;