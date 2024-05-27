import React from 'react';
import ListOrders from '../orders/ListOrders';
import CreateOrderForm from '../orders/CreateOrderForm';

const Orders = () => {
  return (
    <div>
      <ListOrders />
      <CreateOrderForm />
    </div>
  );
};

export default Orders;
