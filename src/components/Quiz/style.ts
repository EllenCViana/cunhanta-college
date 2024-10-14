import styled from 'styled-components';

export const Section = styled.section`
    height: 30px;
    padding-left: 130px;
    display: flex;
    gap: 14px;
    margin-bottom: 30px;
    margin-top: 89px;
`;

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
    width: 384px;
    max-width: 1200px;
`;

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 380px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
    }

    h1 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #333;
    }

    h2 {
        font-size: 16px;
        color: #777;
    }

    p {
        font-size: 14px;
        color: #777;
        margin-bottom: 20px;
    }
`;

export const QuizImage = styled.img`
    width: 100%;
    max-width: 100px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;
