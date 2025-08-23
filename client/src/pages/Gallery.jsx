import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter'

function Gallery(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if(!response.ok){
                    throw new Error('Erro ao carregar os produtos');
                }
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error){
                console.error('Falha ao buscar produtos', error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (isLoading){
        return <p>Carregando produtos...</p>;
    }

    return (
        <section className="gallery-section">
            <CategoryFilter />
            <h2>Nossos produtos</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Gallery;