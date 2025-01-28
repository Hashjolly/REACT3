import React from 'react';
import './Title.css';

interface TitleProps {
    pizzaName: string;
}

const Title: React.FC<TitleProps> = ({ pizzaName }) => {
    return <h3>{pizzaName}</h3>;
};

export default Title;