import PizzaCard from "@molecules/PizzaCard/PizzaCard";
import "./HomePage.css";
import React from 'react';

const pizzas = [
    "Margherita", "Pepperoni", "Reine", "Quatre Fromages", "Hawaïenne",
    "Végétarienne", "Mexicaine", "Calzone", "Napolitaine", "Marinara",
    "Prosciutto", "Diavola", "Capricciosa", "Quatre Saisons", "Bolognaise",
    "Fruits de Mer", "Tartiflette", "Savoyarde", "Orientale", "Périgourdine"
];

const HomePage: React.FC = () => {
    const handleButtonClick = () => {
        alert("Pizza commandée !");
    };

    return (
        <div className="home-page">
            {pizzas.map((pizza, index) => (
                <PizzaCard
                    key={index}
                    title={pizza}
                    buttonText="Commander"
                    onButtonClick={handleButtonClick}
                />
            ))}
        </div>
    );
};

export default HomePage;