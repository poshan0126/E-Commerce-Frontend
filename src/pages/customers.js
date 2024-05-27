import React from 'react';
import ListCustomers from '../customers/ListCustomer';
import CreateCustomerForm from '../customers/CreateCustomerForm';

const Customers = () => {
  return (
    <div>
      <ListCustomers />
      <CreateCustomerForm />
    </div>
  );
};

export default Customers;
