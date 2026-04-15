import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';

const SecondPage = () => {
      const navigate=useNavigate()
const hanldlenavigate=()=>{
navigate("/form")
}
    return (
        <div className={`${style.stSeconPageWrapper} row w-100 m-0`} data-aos="fade-up">
            <div className={`${style.stLeftSideWrapper} col-lg-7 col-md-12`}
                data-aos="fade-right"
                data-aos-duration="1200">

                <h1 className={style.mainHeading}>
                    <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
                    <span className={style.highlight}>Your Brand On The Move</span>
                </h1>

                <div className={style.subHeadingWrapper}>
                    <p className={style.subHeading}>
                        Transform city streets into your showroom with high-impact mobile digital billboards that capture every eye.
                    </p>
                </div>

                <ul className={style.featureList}>
                    <li><span className={style.checkIcon}>●</span> High-Definition Outdoor LED Screens</li>
                    <li><span className={style.checkIcon}>●</span> GPS Tracked Routes for Real-time Data</li>
                    <li><span className={style.checkIcon}>●</span> 24/7 Dynamic Content Management</li>
                </ul>

                <div className={style.ctaButtons}>
                    <button className={style.stButtonWrapper} onClick={hanldlenavigate}>
                        Get Free Quote <span>→</span>
                    </button>
                    <a href="tel:7550188731" className={style.stSecondButtonWrapper}>
                        Call Now <span>⚡</span>
                    </a>
                </div>
                <div className={style.statsContainer}>
                    <div className={style.statItem}>
                        <h3>50K+</h3>
                        <p>Daily Views</p>
                    </div>
                    <div className={style.statDivider}></div>
                    <div className={style.statItem}>
                        <h3>100%</h3>
                        <p>Mobile Reach</p>
                    </div>
                    <div className={style.statDivider}></div>
                    <div className={style.statItem}>
                        <h3>20+</h3>
                        <p>Cities Covered</p>
                    </div>
                </div>
            </div>

            <div className={`${style.stRightSideWrapper} col-lg-5 col-md-12 p-0`}
                data-aos="zoom-in-left"
                data-aos-duration="1300">
                <div className={style.imageContainer}>
                    <div className={style.redFloatingCard}>LIVE ADVERTISING</div>
                    <img src="/ecb01452-b655-42b5-8fcf-da57b35acbd2.jfif" alt="Mobile LED Truck" />

                    <div className={style.mobileOnlyContent}>
                        <div className={style.statItem}>
                            <h3>50K+</h3>
                            <p>Daily Views</p>
                        </div>
                        <div className={style.statItem}>
                            <h3>100%</h3>
                            <p>Mobile Reach</p>
                        </div>
                        <div className={style.statItem}>
                            <h3>20+</h3>
                            <p>Cities Covered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;