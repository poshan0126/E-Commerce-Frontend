import React, { useEffect, useState } from 'react';

const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        return response.json();
      })
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="list-group">
          {orders.map(order => (
            <li key={order.id} className="list-group-item">
              Order ID: {order.id} - Date: {order.order_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListOrders;
