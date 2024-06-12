import React from 'react';
import { continuarassistindo } from '@/src/constants'; 
import ParametroComponent from '../Parametro';
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';

export default function RecomendadosComponent() {
    const continuarassistindoTitle = Title.find(t => t.id === 1)?.title;

    return (
        <div>
            <styled.Categorias>
                {continuarassistindoTitle}
            </styled.Categorias>
            <CarouselComponent>
                {continuarassistindo.map(data => (
                    <styled.Item key={data.id}>
                        <ParametroComponent imageUrl={data.imageUrl} title={data.title} instructor={data.instructor} />
                    </styled.Item>
                ))}
            </CarouselComponent>
        </div>
    );
}
