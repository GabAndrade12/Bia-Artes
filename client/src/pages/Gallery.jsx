// client/src/pages/Gallery.jsx
import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

export default function Gallery() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (!error) setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image_url} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}
