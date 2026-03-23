import React, { FunctionComponent } from 'react';
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';

const FixthPage: FunctionComponent = () => {
      const navigate=useNavigate()
const hanldlenavigate=()=>{
navigate("/form")
}
    return (
        <div className={style.stFixthWrapper}>
            <div className={style.stRowWrapper}>
                 
                <div className={style.stFristColumnWrapper} data-aos="fade-right" data-aos-duration="1000">
                    <span className={style.topLabel}>PREMIUM MOBILE BILLBOARDS</span>
                    <h2>RedChilli LED <br/> <span>Truck Advertising</span></h2>
                    <div className={style.redDivider}></div>
                    <ul>
                        <li><span>360° Visibility</span> across cities and crowded locations.</li>
                        <li><span>HD Display</span> crystal clear during Day and Night.</li>
                        <li><span>Versatile Use</span> for product launches and political campaigns.</li>
                        <li><span>Live Streaming</span> supports video, animations, and real-time ads.</li>
                    </ul>
                    
                    <div className={style.btnContainer}>
                        <button className={style.mainBtn} onClick={hanldlenavigate}>Book Your Campaign</button>
                    </div>
                </div>
                <div className={style.stSecondColumnWrapper} data-aos="zoom-in-up" data-aos-duration="1200">
                    <div className={style.imageFrame}>
                        <div className={style.neonCorner}></div>
                        <img src="/93560a11-9928-4426-ab0c-3650b09fdaf8.jfif" alt="RedChilli LED Truck" />
                        <div className={style.floatingTag}>LIVE NOW</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixthPage;