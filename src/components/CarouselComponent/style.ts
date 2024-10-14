import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;  
`;

export const Carousel = styled.div`
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
    gap: 10px;
`;

export const Button = styled.button`
    position: absolute;
    top: 30%;
    border: none;
    cursor: pointer;

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }

    img {
        width: 50px;
        height: 111px;
    }
`;

export const Item = styled.div`
    flex: 0 0 auto;
    width: 356px;
    height: 270px;
    border-radius: 8px;
    overflow: hidden;
`;

export const Categorias = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 33px 0 21px;
`;
