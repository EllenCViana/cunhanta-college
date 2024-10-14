// InformaticaBasicaComponent.tsx
import React from 'react';
import { informaticabasica } from '@/src/constants'; 
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';
import * as styledA from '../../styles/global';

export default function InformaticaBasicaComponent() {
    const informaticabasicaTitle = Title.find(t => t.id === 4)?.title;

    return (
        <div>
            <styled.Categorias>
                {informaticabasicaTitle}
            </styled.Categorias>

            <CarouselComponent>
                {informaticabasica.map(data => (
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
