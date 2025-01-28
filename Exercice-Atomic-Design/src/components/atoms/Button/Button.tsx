import React, { MouseEvent } from 'react';
import './Button.css';

interface ButtonProps {
    buttonText: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText }) => {
    return (
        <button onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default Button;