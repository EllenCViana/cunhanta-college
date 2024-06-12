import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const Carousel = styled.div`
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
    width: 100%;
`;

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1;

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }

    img {
        width: 24px;
        height: 24px;
    }
`;

export const Item = styled.div`
    flex: 0 0 auto;
    width: 356px;
    height: 273px;
    margin-right: 10px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    z-index: -1;
`;

export const Informacoes = styled.div`
    width: 347px;
    height: 81px;
    padding: 10px 0 0 25px;
    background-color: #099CE0;
    border: 2px solid #12729E;
    border-radius: 8px 0 8px 8px;
    margin-left: 9px;
`;

export const Title = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: 19px;
    font-weight: 500;
    height: 22px;
    margin-bottom: 6px;
`;

export const Caption = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
`;

export const Categorias = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`;
