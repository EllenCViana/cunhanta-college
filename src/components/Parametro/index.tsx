import React from 'react';
import * as styledParametro from './style';

interface Dados {
    imageUrl: string;
    title: string;
    instructor: string;
}

const ParametroComponent: React.FC<Dados> = (data: Dados) => {
    return (
        <styledParametro.Informacoes>
            <styledParametro.Image src={data.imageUrl}/>
            <styledParametro.Title>{data.title}</styledParametro.Title>
            <styledParametro.Caption>{data.instructor}</styledParametro.Caption>
        </styledParametro.Informacoes>
    );
};

export default ParametroComponent;
