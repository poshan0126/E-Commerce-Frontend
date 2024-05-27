import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div>
          {products.map(product => (
            <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListProducts;
