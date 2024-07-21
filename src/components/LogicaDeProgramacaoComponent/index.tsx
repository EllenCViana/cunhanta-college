// InglesComponent.tsx
import React from 'react';
import { logicadeprogramacao } from '@/src/constants'; 
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';
import * as styledA from '../../styles/style';

export default function InglesComponent() {
    const logicadeprogramacaoTitle = Title.find(t => t.id === 5)?.title;

    return (
        <div>
            <styled.Categorias>
                {logicadeprogramacaoTitle}
            </styled.Categorias>

            <CarouselComponent>
                {logicadeprogramacao.map(data => (
                    <styled.Item key={data.id}>
                        <styledA.Card>
                            <styledA.Image src={data.imageUrl} alt={data.title} />
                            <styledA.InfoCourse category={data.category as 'Informática Básica' | 'Lógica de Programação' | 'Inglês' | 'Desenvolvimento Web'}>
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
