"use client";

import React from 'react';
import { Button } from 'antd'; 
import { quiz } from '@/src/constants';
import MenuQuizz from '@/src/components/menu_quizz';
import { Section } from "./style";

const Quiz: React.FC = () => {
    return (
        <main>
            <Section>
                </Section>
                <div style={{ padding: '24px', display: 'flex', gap: '24px' }}>
                    <div style={{ minWidth: '200px' }}>
                        <MenuQuizz />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Quizzes</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                            {quiz.map(data => (
                                <div
                                    key={data.id}
                                    style={{
                                        fontSize: '12px',
                                        width: 350,
                                        display: 'flex',
                                        border: '1px solid #d9d9d9',
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        height: 150
                                    }}
                                >
                                    <img
                                        alt={data.title}
                                        src={data.image}
                                        style={{ width: '120px', height: '100px', marginTop: 20 }}
                                    />
                                    <div style={{ padding: '16px', flex: 1 }}>
                                        <h3 style={{ margin: 0 }}>{data.title}</h3>
                                        <p>{`${data.questions} questões`}</p>
                                        <p style={{ marginTop: '8px' }}>Professor {data.professor}</p>
                                        <Button type="primary" style={{ width: "100%" }}>Jogar agora!</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </main>
    );
};

export default Quiz;
