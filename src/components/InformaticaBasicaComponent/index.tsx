import React from 'react';
import { shorts } from '@/src/constants'; 
import ParametroComponent from '../Parametro';
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';

export default function InformaticaBasicaComponent() {
    const shortsTitle = Title.find(t => t.id === 4)?.title;

    return (
        <div>
            <styled.Categorias>
                {shortsTitle}
            </styled.Categorias>
            <CarouselComponent>
                {shorts.map(data => (
                    <styled.Item key={data.id}>
                        <ParametroComponent imageUrl={data.imageUrl} title={data.title} instructor={data.instructor} />
                    </styled.Item>
                ))}
            </CarouselComponent>
        </div>
    );
}