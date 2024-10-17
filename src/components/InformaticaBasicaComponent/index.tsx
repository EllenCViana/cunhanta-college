import React from 'react';
import { informaticabasica } from '@/src/constants'; 
import CarouselComponent from '../CarouselComponent';
import * as styled from '../CarouselComponent/style';
import { Title } from '../../constants';
import * as styledA from '../../styles/global';
import Link from 'next/link';

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
                            <Link href="../Retomar"> {/* Redireciona para a página Retomar ao clicar na imagem */}
                                <styledA.Image 
                                    src={data.imageUrl} 
                                    alt={data.title} 
                                    style={{ cursor: 'pointer' }} // Estilo de ponteiro para indicar clique
                                />
                            </Link>
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
