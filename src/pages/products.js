import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CreateProductForm from '../products/CreateProductForm'; // Assuming you have a CreateProductForm component
import ListProducts from '../products/ListProducts';  // Assuming you have a ListProducts component
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <ListProducts />
        </Col>
      </Row>
      <Button variant="primary" onClick={handleShowForm}>Create Product</Button>
      {showForm && <CreateProductForm onClose={handleCloseForm} />}
      
    </Container>
  );
};

export default Products;
