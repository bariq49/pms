"use client";

import React, { useState } from 'react';

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [orderSummary, setOrderSummary] = useState({
    itemsTotal: 100, // Replace this with the dynamic value based on cart
    shippingCost: 10,
    tax: 5,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const calculateTotalAmount = () => {
    const { itemsTotal, shippingCost, tax } = orderSummary;
    return itemsTotal + shippingCost + tax;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and other checkout logic here
    alert('Checkout Successful!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-12 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Details Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">User Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={userDetails.city}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={userDetails.postalCode}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={userDetails.country}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2">
            <p><strong>Items Total:</strong> ${orderSummary.itemsTotal}</p>
            <p><strong>Shipping:</strong> ${orderSummary.shippingCost}</p>
            <p><strong>Tax:</strong> ${orderSummary.tax}</p>
            <p className="font-bold text-lg"><strong>Total Amount:</strong> ${calculateTotalAmount()}</p>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Payment Method</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input type="radio" name="paymentMethod" value="creditCard" className="form-radio text-indigo-600" />
              <span className="ml-2">Credit Card</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="paymentMethod" value="paypal" className="form-radio text-indigo-600" />
              <span className="ml-2">PayPal</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
