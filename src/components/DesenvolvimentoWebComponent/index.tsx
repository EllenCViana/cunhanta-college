"use client";
import React from 'react';
import { desenvolvimentoweb } from '@/src/constants'; 
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';

import * as styledA from '../../styles/style';

export default function DesenvolvimentoWebComponent() {
    const desenvolvimentowebTitle = Title.find(t => t.id === 7)?.title;

    return (
        <div>
            <styled.Categorias>
                {desenvolvimentowebTitle}
            </styled.Categorias>

            <CarouselComponent>
                {desenvolvimentoweb.map(data => (
                    <styled.Item key={data.id}>
                        <styledA.Card>
                            <styledA.Image src={data.imageUrl} alt={data.title} />
                            <styledA.InfoDesenvolvimentoWeb>
                                <h1>{data.title}</h1>
                                <h2>{data.instructor}</h2>
                            </styledA.InfoDesenvolvimentoWeb>
                        </styledA.Card>
                    </styled.Item>
                ))}
            </CarouselComponent>
        </div>
    );
}
