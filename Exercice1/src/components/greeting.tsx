import React from 'react';

interface IGreetingProps {
    name: string;
    age?: number;
}

const Greeting: React.FC<IGreetingProps> = ({ name, age }) => {
    return (
        <div>
            <p>Hello, {name}!</p>
            {age !== undefined && <p>You are {age} years old.</p>}
        </div>
    );
};

export default Greeting;