import React from 'react';
import styles from './Shop.css';
import Card from './Card';

const products = [
    {
        id: 1,
        name: 'Смартфон',
        price: 10000,
        img: 'https://red.prostoshop.site/image/cache/catalog/demo/category/tablet-160x120.jpg',
    },
    {
        id: 2,
        name: 'Ноутбук',
        price: 50000,
        img: 'https://avatars.mds.yandex.net/i?id=efe84e5bcb4697a210f3956e785492ca33b0b249-7550039-images-thumbs&ref=rim&n=33&w=285&h=188',
    },
    {
        id: 3,
        name: 'Планшет',
        price: 15000,
        img: 'https://red.prostoshop.site/image/cache/catalog/demo/category/tablet-160x120.jpg',
    },
];

const Shop = () => {
    return (
        <div className={styles.shop}>
            {products.map(({ id, name, price, img }) => (
                <Card key={id} name={name} price={price} img={img} />
            ))}
        </div>
    );
};

export default Shop;
