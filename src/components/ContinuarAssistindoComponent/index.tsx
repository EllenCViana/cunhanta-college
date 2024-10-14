"use client";
import React from 'react';
import { continuarassistindo } from '@/src/constants'; 
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';
import * as styledA from '../../styles/global';

export default function ContinuarAssistindoComponent() {
    const continuarassistindoTitle = Title.find(t => t.id === 1)?.title;

    return (
        <div>
            <styled.Categorias>
                {continuarassistindoTitle}
            </styled.Categorias>

            <CarouselComponent>
                {continuarassistindo.map(data => (
                    <styled.Item key={data.id}>
                        <styledA.Card>
                            <styledA.Image src={data.imageUrl} alt={data.title} />
                            <styledA.InfoCourse category={data.category}>
                                <h1>{data.title}</h1>
                                <h2>{data.instructor}</h2>
                            </styledA.InfoCourse>
                        </styledA.Card>
                    </styled.Item>
                ))}
            </CarouselComponent>
        </div>
    );
}
