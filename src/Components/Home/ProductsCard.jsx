import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux/productSlice";
import { Link, useNavigate } from "react-router-dom";

export default function ProductsCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  console.log(products)

  return (  
    <div className="">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="text-center">
            <h1 className="text-xl xs:text-2xl bg-black text-white py-2 w-52 xs:w-80 text-center mx-auto mt-4">
              shopping everyday
            </h1>
            <Link className="text-blue-500 underline text-xs text-center mx-auto">
              All Products
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[400px] mt-6 sm:max-w-[1100px] md:max-w-[1440px] gap-3 mx-auto">
            {products.slice(0, 8).map((product, i) => (
              <div
                key={i} 
                className="flex group group-hover:scale-120 items-center flex-col"
              >
                <img
                  onClick={() => navigate(`/detail/${product.id}`)}
                  className="object-cover w-full cursor-pointer duration-500 h-full"
                  src={product.image}
                  alt={product.title}
                />
              
                <div className="w-full">
                  <div className="flex justify-between bg-white h-16 p-2 border-gray-300 border items-center">
                    <div>
                      <h2 className="font-titleFont md:text-lg text-base font-bold">
                        {product.title.substring(0, 14)}
                      </h2>
                      <p className="md:text-base text-xs">{product.category}</p>
                    </div>
                    <div className="text-sm relative w-28 flex justify-end overflow-hidden">
                      <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                        <p className="line-through text-gray-500">
                          ${product.oldPrice}
                        </p>
                        <p className="font-semibold">${product.price}</p>
                      </div>
                      <p className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
                        add to cart
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            ></path>
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 