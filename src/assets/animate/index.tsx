import React from 'react';
import style from './index.module.scss';

const Animate = () => {
    const images = [
        "public/2e8d0414-d13b-4369-aa3a-722f44b4c838.jfif",
        "public/3a640dbc-5a80-42d7-9525-04294509533d.jfif",
        "public/63b00d5d-5f3d-495e-b159-8c4435351e66.jfif",
        "public/0411c8e0-07a1-408d-a2aa-e5b4b2721c67.jfif",
        "public/671210a8-aa51-4b5b-a33c-2ce814f5ca67.jfif",
        "public/a2283803-09f8-4d37-9e7c-baad5f56e5f9.jfif",
        "public/a-modern-indian-city-at-night-with-a-tall-building.jpeg",
        "public/3a640dbc-5a80-42d7-9525-04294509533d.jfif"
    ];
    return (
        <div className={style.stHoleImageWrapper}>
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
            {/* <h1 className="text-center">sdfghujio</h1> */}
        </div>
    );
};

export default Animate;