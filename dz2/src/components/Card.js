import React, { useState } from 'react';
import styles from './Card.css';

const Card = ({ name, price, img }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleClear = () => {
        setCount (count === 0 );
    };

    return (
        <div className={styles.card}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Цена: {price} руб.</p>
            <div className={styles.counter}>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleClear}>clear</button>
            </div>
        </div>
    );
};

export default Card;
