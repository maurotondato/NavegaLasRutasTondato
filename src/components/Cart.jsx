import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {cart.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.title} - ${item.price}
              <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
