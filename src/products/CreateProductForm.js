import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateProductForm = ({ onCreate, onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price }),
      });
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
      const data = await response.json();
      onCreate(data); // Assuming onCreate will update the UI with the new product
      setName('');
      setPrice('');
      onClose(); // Close the form after successful creation
    } catch (error) {
      console.error('Error creating product:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="productName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          required
        />
      </Form.Group>
      <Form.Group controlId="productPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Product
      </Button>
    </Form>
  );
};

export default CreateProductForm;
