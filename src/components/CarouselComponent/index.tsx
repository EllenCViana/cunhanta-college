"use client";
import React, { useRef, useEffect, useState } from 'react';
import * as styled from "./style";

interface CarouselComponentProps {
    children: React.ReactNode;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ children }) => {
    const carousel = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth / 2; // Alterado para metade do offsetWidth
        }
    };

    const handleRightClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth / 2; // Alterado para metade do offsetWidth
        }
    };

    const checkCarouselPosition = () => {
        if (carousel.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = carousel.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + offsetWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            checkCarouselPosition();
        };

        const currentCarousel = carousel.current;

        if (currentCarousel) {
            currentCarousel.addEventListener('scroll', handleScroll);
        }

        checkCarouselPosition();

        return () => {
            if (currentCarousel) {
                currentCarousel.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <styled.CarouselContainer>
            <styled.Carousel ref={carousel}>
                {children}
            </styled.Carousel>
            <styled.Button className="left" onClick={handleLeftClick} style={{ visibility: showLeftButton ? 'visible' : 'hidden' }}>
                <img src="left-arrow.svg" alt="Left" />
            </styled.Button>
            <styled.Button className="right" onClick={handleRightClick} style={{ visibility: showRightButton ? 'visible' : 'hidden' }}>
                <img src="right-arrow.svg" alt="Right" />
            </styled.Button>
        </styled.CarouselContainer>
    );
};

export default CarouselComponent;
