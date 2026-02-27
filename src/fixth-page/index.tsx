import React, { FunctionComponent } from 'react';
import style from "./index.module.scss";

const FixthPage: FunctionComponent = () => {
    return (
        <div className={style.stFixthWrapper}>
            <div className={style.stRowWrapper}>
                 
                <div className={style.stFristColumnWrapper} data-aos="fade-up-right" data-aos-offset="0" data-aos-duration="900">
                    <h2>RedChilli LED Truck Advertising</h2>
                    <ul>
                        <li>360-degree visibility across cities and crowded locations.</li>
                        <li>High-definition display crystal clear Day and Night.</li>
                        <li>Ideal for product launches, political campaigns, and roadshows.</li>
                        <li>Supports live video, animations, and real-time advertisements.</li>
                    </ul>
                    <button>Book Your Campaign</button>
                </div>

                <div className={style.stSecondColumnWrapper}
                    data-aos="fade-left"
                    data-aos-duration="900"><img src="/93560a11-9928-4426-ab0c-3650b09fdaf8.jfif" alt="" />

                </div>
            </div>
        </div>
    );
};

export default FixthPage;
