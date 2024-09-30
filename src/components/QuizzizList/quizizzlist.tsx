import React from 'react';
import { GridContainer } from './style';
import Quizziz from '../quizziz/quiz';


interface CardData {
  title: string;
  description: string;
}

interface QuizzizlistProps {
  cards: CardData[];
}

const Quizzizlist: React.FC<QuizzizlistProps> = ({ cards }) => {
  return (
    <GridContainer>
      {cards.map((card, index) => (
        <Quizziz key={index} title={card.title} description={card.description} />
      ))}
    </GridContainer>
  );
};

export default Quizzizlist;
