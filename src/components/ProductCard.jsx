import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">Más detalles</Link>
        </div>
      </div>
    </div>
  );
}
