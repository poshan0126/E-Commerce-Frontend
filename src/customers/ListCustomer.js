import React, { useEffect, useState } from 'react';

const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/customers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        return response.json();
      })
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Customers</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul className="list-group">
          {customers.map(customer => (
            <li key={customer.id} className="list-group-item">
              {customer.name} - {customer.email} - {customer.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListCustomers;
