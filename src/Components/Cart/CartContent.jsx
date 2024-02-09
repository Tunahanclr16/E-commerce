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
    <div className="p-4 overflow-auto  h-screen">
      {!isAuthenticated ? (
        <p className="text-black text-center font-bold text-xl sm:text-2xl md:text-5xl">
          Please log in to view your cart.
        </p>
      ) : carts.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        
        <div className="bg-white overflow-auto p-4 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
          <div className="flex justify-end">
            <button
              onClick={resetProduct}
              className="text-red-500 text-lg font-bold cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
          <div className="overflow-auto">
            <table className=" sm:min-w-full min-w-[600px] mt-4">
              <thead className=''>
                <tr className=''>
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
                        className=" w-14 sm:w-32  h-14 sm:h-32 object-contain rounded"
                      />
                      <div className=''>
                        <h2 className=" text-base sm:text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-500">${item.price}</p>
                      </div>
                    </td>
                    <td className="text-center">${item.price}</td>
                    <td className="text-center">{item.quantity}</td>
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
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
