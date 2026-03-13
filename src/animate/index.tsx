import React from 'react';
import style from './index.module.scss';

const Animate = () => {
    const images = [
        "public/683333f2-729a-4ab0-88df-08ef35eb03c5.jfif",
        "public/e448edee-fb65-403d-98db-dcf687530646.jfif",
        "public/070a349f-2444-4541-9375-53fa2de58b83.jfif",
        "public/805a4593-b9d9-4c0f-9653-e5cce600b5a6.jfif",
        "public/7ceae2ef-eed8-47f3-8f88-42e9eb19b23e.jfif",
        "public/34cbc7ea-fe8c-4a90-b33e-3d4040c97db0.jfif",
        "public/03a8bde8-874d-42b7-b9dd-bba8bb16af87.jfif",
        "public/ebd8132c-d9e2-471c-92ff-961ab1629748.jfif"
    ];
    return (
        <div id="demos" className={style.stHoleImageWrapper}>
            <h1>LIVE SCREENS</h1>
            <div className={style.stImageWrapper}>
                {images.concat(images).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`img-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Animate;
