import React, { MouseEvent } from 'react';
import Button from '@atoms/Button/Button.tsx';
import Title from '@atoms/Title/Title.tsx';
import './PizzaCard.css';

interface PizzaCardProps {
    title: string;
    buttonText: string;
    onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ title, onButtonClick, buttonText }) => {
    return (
        <div className="pizza-card">
            <Title pizzaName={title} />
            <Button onClick={onButtonClick} buttonText={buttonText}></Button>
        </div>
    );
};

export default PizzaCard;