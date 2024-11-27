import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error al cargar el producto:', error));
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} className="img-fluid" />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button className="btn btn-primary">Añadir al carrito</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
