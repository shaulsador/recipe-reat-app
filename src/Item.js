import React from 'react';
import style from './Item.module.css';

function Item({label, ingredients, image}) {
    return(
        <div className={style.item}>
            <h1>{label}</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))};
            </ul>
            <img src={image} alt=''/>
        </div>
    )
}

export default Item;