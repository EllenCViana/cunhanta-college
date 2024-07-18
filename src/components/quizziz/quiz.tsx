import { CardContainer } from "./style";

interface CardProps {
  title: string;
  description: string;
}

const Quizziz: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardContainer >
      <h2>{title}</h2>
      <p>{description}</p>
    </CardContainer>
  );
};

export default Quizziz;
