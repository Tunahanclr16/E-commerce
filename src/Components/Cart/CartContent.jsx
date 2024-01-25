import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal, removeFromCart, resetCart } from '../../redux/cartSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const CartContent = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount } = useSelector((state) => state.carts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const calculateTotal = () => {
    dispatch(getCartTotal());
    return totalAmount;
  };

  const resetProduct = () => {
    dispatch(resetCart());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Clean up
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {!isAuthenticated ? (
        <p className="text-red-500 text-center font-bold text-xl sm:text-2xl md:text-5xl">
          Please log in to view your cart.
        </p>
      ) : carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-lg overflow-x-auto" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <div className="flex justify-end">
            <button
              onClick={() => resetProduct()}
              className="text-red-500 text-lg font-bold cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-2 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </td>
                  <td className="text-center">${item.price}</td>
                  <td className="text-center">
                    <p>{item.quantity}</p>
                  </td>
                  <td className="text-center">${item.price * item.quantity}</td>
                  <td className="text-center">
                    <button
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
