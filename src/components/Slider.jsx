import React, { useState } from 'react'


import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { SliderData } from '../SliderData'
import { SliderContainer, Content, ShopButton, LeftArrow, RightArrow } from './Slider.styles'
function Slider() {
    const [position, setPosition] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        // advance slide track to go forward until end, then reset to 0
        setPosition(position === length - 1 ? 0 : position + 1);
    };

    const prevSlide = () => {
        // reverse track until at 0 then reset to end of length
        setPosition(position === 0 ? length - 1 : position - 1);
    };
    return (
        <SliderContainer>
            <LeftArrow onClick={prevSlide}>
                <ArrowBackIosNewOutlinedIcon />
            </LeftArrow>
            <RightArrow onClick={nextSlide}>
                <ArrowForwardIosOutlinedIcon />
            </RightArrow>
            <Content>
                <h1>Summer Sale</h1>
                <p>Check out our latest styles</p>
                <ShopButton>SHOP NOW</ShopButton>
            </Content>
            {
                SliderData.map((slide, idx) => {
                    return (
                        <div
                            className={idx === position ? "slide active" : "slide"}
                            key={idx}
                        >
                            {idx === position && (
                                <img
                                    src={slide.image}
                                    alt="hype beast content"
                                    className="image"
                                />
                            )}
                        </div>
                    )
                })
            }
        </SliderContainer>
    )
}

export default Slider


