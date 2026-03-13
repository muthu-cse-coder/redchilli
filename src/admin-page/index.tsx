import { useEffect, useState } from "react";
import style from './index.module.scss';
import SecondPage from "../second-page";

const AdminPage = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    // 1. Lock scroll immediately
    document.body.style.overflow = "hidden";

    // 2. Start Circular Animation after 2 seconds
    const animationTimer = setTimeout(() => {
      setIsAnimate(true);
    }, 2000);
    const unlockTimer = setTimeout(() => {
      setIsLocked(false);
      document.body.style.overflow = "auto";
    }, 3600);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(animationTimer);
      clearTimeout(unlockTimer);
    };
  }, []);

  return (
    <div className={style.stAdminWrapper}>
      <div className={style.stImageContainer}>

        {/* First Image (Background - stays static) */}
        <div className={style.stBaseLayer}>
          <img
            src="/d0eb82d0-5582-49de-be5a-57dba4d89413.jfif"
            alt="Background"
            className={style.stTruckImg}
          />
        </div>

        {/* Second Image (Appears as an expanding circle) */}
        <div
          className={`${style.stSlideLayer} ${isAnimate ? style.animateCircle : ""}`}
        >
          <img
            src="/a926c0ee-2705-4a97-84e1-3f2a4407e84c.jfif"
            alt="LED Advertising"
            className={style.stTruckImg}
          />
        </div>

      </div>

      {/* SecondPage Content */}
      <div className={isLocked ? style.stLockedContent : style.stUnlockedContent}>
        {/* <SecondPage /> */}
      </div>

      <div className={`${style.stSlideLayer} ${isAnimate ? style.animateCircle : ""}`}>
        <img
          src="/a926c0ee-2705-4a97-84e1-3f2a4407e84c.jfif"
          alt="LED Advertising"
          className={style.stTruckImg}
        />
        <div className={style.mobileOverlayContent}>
          <div className={style.tagline}>Leading The Future</div>
          <h2>BRIGHTEN YOUR BRAND <span>WITH MOBILE LED</span></h2>
          <div className={style.scrollIndicator}>
            <span>Scroll To Explore</span>
            <div className={style.mouse}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;