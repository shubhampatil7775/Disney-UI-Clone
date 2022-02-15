import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className="my-4" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/badging4.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/scale6.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/badging5.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/images/scale16.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSlider;
