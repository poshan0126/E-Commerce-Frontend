import React, { useState, useEffect } from 'react';

const CreateOrderForm = () => {
  const [orderDate, setOrderDate] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddItem = () => {
    if (selectedProduct && quantity) {
      setItems([...items, { product_id: selectedProduct, quantity }]);
      setSelectedProduct('');
      setQuantity('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ order_date: orderDate, customer_id: customerId, items })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Order created:', data);
      setOrderDate('');
      setCustomerId('');
      setItems([]);
    })
    .catch(error => console.error('Error creating order:', error));
  };

  return (
    <div className="container mt-5">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="date" className="form-control" placeholder="Order Date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="product">Product:</label>
          <select id="product" className="form-control" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
            <option value="">Select Product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddItem} disabled={!selectedProduct || !quantity}>Add Item</button>
        <ul className="list-group mt-3">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.product_id} - {item.quantity}
            </li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary mt-3">Create</button>
      </form>
    </div>
  );
};

export default CreateOrderForm;
