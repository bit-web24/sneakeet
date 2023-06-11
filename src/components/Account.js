import React from 'react';

function Account() {
  // Dummy user data for demonstration purposes
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    orders: [
      { id: 1, product: "Product 1", price: 29.99 },
      { id: 2, product: "Product 2", price: 39.99 },
      { id: 3, product: "Product 3", price: 19.99 },
    ],
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Order History</h3>
          {user.orders.map((order) => (
            <div key={order.id} className="flex justify-between mb-2">
              <p>{order.product}</p>
              <p>${order.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
