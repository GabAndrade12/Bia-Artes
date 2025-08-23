import React from "react";
import './CategoryFilter.css'

function CategoryFilter(){
    const categories = ['Todos', 'Acessórios', 'Decoração', 'Brinquedos'];

    return (
        <div className="category-filter">
            <h3>Filtrar por Categoria</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <button>{category}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryFilter;