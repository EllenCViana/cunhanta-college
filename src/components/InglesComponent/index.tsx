"use client";
import React from 'react';
import { ingles } from '@/src/constants'; 
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';

import * as styledA from '../../styles/style';

export default function InglesComponent() {
    const inglesTitle = Title.find(t => t.id === 6)?.title;

    return (
        <div>
            <styled.Categorias>
                {inglesTitle}
            </styled.Categorias>

            <CarouselComponent>
                {ingles.map(data => (
                    <styled.Item key={data.id}>
                        <styledA.Card>
                            <styledA.Image src={data.imageUrl} alt={data.title} />
                            <styledA.InfoIngles>
                                <h1>{data.title}</h1>
                                <h2>{data.instructor}</h2>
                            </styledA.InfoIngles>
                        </styledA.Card>
                    </styled.Item>
                ))}
            </CarouselComponent>
        </div>
    );
}
