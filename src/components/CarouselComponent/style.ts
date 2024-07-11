import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    border: 1px solid red;
`;

export const Carousel = styled.div`
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
    /* width: 100%; */
    border: 1px solid blue;
    gap: 10px;
`;

export const Button = styled.button`
    position: absolute;
    top: 30%;
    /* transform: translateY(-50%); */
    /* background: none; */
    border: none;
    cursor: pointer;
    /* z-index: 1; */
    border: 1px solid green;

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
    /* background-size: cover; */
    /* margin-bottom: 15px; */
    /* background-color: yellow; */
    border: 1px solid yellow;
`;

export const Categorias = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 33px 0 21px;
    border: 1px solid orange;
`;
