"use client"
import React from 'react';

import { Container, Main, Card, Title } from './style';
import { quiz } from '@/src/constants'; 

const Quizzes: React.FC = () => {
    return (
        <div>
            <Container>
                <Title>Quizzes</Title>
                <Main>
                    {quiz.map(data => (
                        <Card key={data.id}>
                            <h1>{data.title}</h1>
                            <h2>{data.description}</h2>
                        </Card>
                    ))}
                </Main>
            </Container>
        </div>
    );
};

export default Quizzes;
