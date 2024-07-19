import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, auto);
    gap: 20px;
    width: 100%;
    max-width: 1200px;
`;

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }

    h1 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #555;
    }

    h2 {
        font-size: 16px;
        color: #555;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;
