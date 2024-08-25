"use client";

import React from 'react';
import { Container, Main, Card, Title, QuizImage, Button } from './style';
import { quiz } from '@/src/constants';

const Quizzes: React.FC = () => {
    return (
        <div>
            <Container>
                <Title>Quizzes</Title>
                <Main>
                    {quiz.map(data => (
                        <Card key={data.id}>
                            <QuizImage src={data.image} alt={data.title} />
                            <h1>{data.title}</h1>
                            <h2>{data.questions} questões</h2>
                            <p>Professor {data.professor}</p>
                            <Button>Jogar agora!</Button>
                        </Card>
                    ))}
                </Main>
            </Container>
        </div>
    );
};

export default Quizzes;
