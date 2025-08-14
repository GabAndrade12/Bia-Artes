import React from "react";
import './ProductCard.css';

function ProductCard({name, price}){
    return (
        <div className="product-card">
            {/* Aqui pode adicionar uma iamgem no futuro */}
            <img src="https://via.placeholder.com/150" alt="{name}" />
            <h3>{name}</h3>
            <p>R$ {price}</p>
            <button>Adicionar ao carrinho</button>
        </div>
    );
}

export default ProductCard;