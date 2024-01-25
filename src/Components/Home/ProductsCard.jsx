import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux/productSlice";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import Sorting from "./Sorting";
import ReactPaginate from "react-paginate";
import {addTocart } from "../../redux/cartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function ProductsCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sortingOption, setSortingOption] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // Başlangıç sayfası 0'dır.
  const productsPerPage = 8;
  // useEffect hook'u, component'in ilk render edildiğinde
  // ve sortingOption değiştiğinde çalışacak.
  useEffect(() => {
    // Ürün verilerini Redux üzerinden getiren fonksiyonu çağır.
    dispatch(fetchProductData());
  }, [dispatch]);

  // Ürünleri sıralamak için klon bir array oluştur.
  const sortedProducts = [...products];

  // Eğer sortingOption değeri "increasing" ise, ürünleri artan fiyat sırasına göre sırala.
  if (sortingOption === "increasing") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  // Eğer sortingOption değeri "decreasing" ise, ürünleri azalan fiyat sırasına göre sırala.
  else if (sortingOption === "decreasing") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Kullanıcının sıralama seçeneğini değiştirmesini takip eden fonksiyon.
  const handleSortingChange = (e) => {
    // Seçilen sıralama seçeneğini state'e kaydet.
    setSortingOption(e.target.value);
  };

  //paginate start
  // Sayfa başına gösterilecek ürünleri filtrele

  // Sayfa başına gösterilecek ürünleri filtrele
  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Clean up
    return () => unsubscribe();
  }, []); // Sadece bir kez çalıştırılması için boş bir dependency array kullanılır

  const addToBasket = (product) => {
    if (isAuthenticated) {
      // Sepete ekleme işlemleri
        dispatch(addTocart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        }))
      toast.success(`Added to Cart: ${product.title}`);
    } else {
      // Kullanıcı giriş yapmadıysa
      toast.error("Please log in");
    }
  };
  



  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-center">
            <h1 className=" sm:text-2xl  text-xl md:text-4xl text-black  py-2 w-52 sm:w-[750px] text-center mx-auto mt-4">
              New Arrival Products
            </h1>
            <Sorting handleSortingChange={handleSortingChange} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[400px] mt-3 sm:max-w-[1100px] md:max-w-full gap-3 mx-auto">
            {currentProducts.map((product, i) => (
              <div
                key={i}
                className="flex group group-hover:scale-120 items-center flex-col"
              >
                <img
                  onClick={() => navigate(`/detail/${product.id}`)}
                  className="object-contain w-72 h-full cursor-pointer duration-500 "
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
                        <p className="font-semibold">${product.price}</p>
                      </div>
                      <p onClick={()=>addToBasket(product)} className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
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
          <div className="flex items-center p-4 justify-end mt-4">
            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageChange}
              pageRangeDisplayed={5}
              pageCount={Math.ceil(sortedProducts.length / productsPerPage)}
              previousLabel="< "
              renderOnZeroPageCount={null}
              containerClassName={"pagination flex gap-2"}
              subContainerClassName={"pages pagination flex gap-2"}
              activeClassName={"active bg-blue-500 w-12 text-center text-white"}
              pageClassName={"rounded-full cursor-pointer transition-colors duration-300"}
              previousClassName={"rounded-full text-lg cursor-pointer transition-colors duration-300"}
              nextClassName={"rounded-full text-lg cursor-pointer transition-colors duration-300"}
              breakClassName={"rounded-full cursor-pointer transition-colors duration-300"}
            />
          </div>
        </>
      )}
<ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>    </div>
  );
}
