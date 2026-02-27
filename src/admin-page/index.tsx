import { useEffect, useRef } from "react";
import style from './index.module.scss';


const AdminPage = () => {
  const truckImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const img = truckImgRef.current;
        if (img) {
          const scaleValue = 1 + window.scrollY / 1000;
          img.style.transform = `translateZ(0) scale(${scaleValue})`;
        }
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style.stAdminWrapper}>
      <div className={style.stImageContainer}>
        <img
          ref={truckImgRef}
          src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif"
          alt="Admin Truck"
          className={style.stTruckImg}
        />
      </div>
      <div className={style.stContentPage}>
        <div className={style.stLedWrapper}>
          <div className={style.stVideoContainer}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/Admin.png"
              className={style.stEmbeddedVideo}
            >
              <source src="/Untitled design.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
