" use client "
import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    height: 270px;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;



interface InfoCourseProps {
    category: string; 
}

const categoryStyles: Record<string, { backgroundColor: string; borderTopColor: string; borderLeftColor: string }> = {
    'Informática Básica': {
        backgroundColor: '#099CE0',
        borderTopColor: '#12729E',
        borderLeftColor: '#12729E',
    },
    'Lógica de Programação': {
        backgroundColor: '#F7C607',
        borderTopColor: '#C89A13',
        borderLeftColor: '#C89A13',
    },
   'Inglês': {
        backgroundColor: '#F25CAF',
        borderTopColor: '#C21183',
        borderLeftColor: '#C21183',
    },
    'Desenvolvimento Web': {
        backgroundColor: '#34D399', 
        borderTopColor: '#059669', 
        borderLeftColor: '#059669', 
    },
};

export const InfoCourse = styled.div<InfoCourseProps>`
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 10px 0 0;
    padding: 10px 20px 26px 20px;
    background-color: ${({ category }) => categoryStyles[category]?.backgroundColor || '#fff'};
    width: 97%;
    border-top: 2px solid ${({ category }) => categoryStyles[category]?.borderTopColor || '#000'};
    border-left: 2px solid ${({ category }) => categoryStyles[category]?.borderLeftColor || '#000'};

    h1 {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    h2 {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }
`;
