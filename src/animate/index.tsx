import React from 'react';
import style from './index.module.scss';

const Animate = () => {
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
