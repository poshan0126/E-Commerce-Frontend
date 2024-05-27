import React, { useState } from 'react';
import BASE_URL from '../base_url';

const CreateCustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('${BASE_URL}/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone })
    })
    .then(response => response.json())
    .then(data => console.log('Customer created:', data))
    .catch(error => console.error('Error creating customer:', error));

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="container mt-5">
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="tel" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateCustomerForm;
