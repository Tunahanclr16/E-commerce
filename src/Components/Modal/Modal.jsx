import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../../redux/modalSlice.js";
import { fetchProductData } from "../../redux/productSlice.js";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading.jsx";

export default function Modal({ title }) {
  const { modal } = useSelector((state) => state.modal);
  const { loading, products } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  const navigate = useNavigate();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  const navigateDetail = (product) => {
    navigate(`/detail/${product.id}`);
    dispatch(modalFunc());
  };

  return (
    <>
      <div className="fixed left-0 bottom-0 right-0 top-0 flex justify-center items-center z-50 h-full">
        <div className="w-[95%] sm:w-[700px] bg-white p-4 h-[400px] rounded-lg shadow-xl overflow-auto">
          <div className="flex justify-between items-center">
            <h2 className="mx-auto text-3xl font-semibold">{title}</h2>
            <IoMdClose
              size={24}
              onClick={() => dispatch(modalFunc())}
              className="z-50 cursor-pointer"
            />
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Product Search..."
            className="mt-8 shadow-md w-full h-9 outline-black/50 border rounded-md"
          />
          {loading ? (
            <Loading />
          ) : (
            <div className="flex gap-1 flex-col">
              {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500">No Products Found</p>
              ) : (
                <>
                  {filteredProducts.slice(0, 20).map((product, index) => (
                    <div className="flex mt-2 items-center gap-2" key={index}>
                      <img
                        onClick={() => navigateDetail(product)}
                        src={product.image}
                        className="cursor-pointer object-cover w-20"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <h3>{product.title}</h3>
                        <p className="mt-1 text-gray-500">
                          {product.description.substring(0, 100)}...
                        </p>
                      </div>
                      <div className="border-b "></div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
