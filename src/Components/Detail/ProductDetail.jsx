import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { addTocart } from "../../redux/cartSlice";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const dispatch = useDispatch()


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

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    }
  };

  const addToBasket = () => {
    if (isAuthenticated) {
      // Sepete ekleme işlemleri
            dispatch(addTocart({
                id:product.id,
                title:product.title,
                price:product.price,
                image:product.image,
                description:product.description,
                category:product.category,
                quantity:1
            }))
            setQuantity(quantity + 1)
      toast.success(`Added to Cart: ${product.title}`);
    } else {
      // Kullanıcı giriş yapmadıysa
      toast.error("Please log in");
    }
  };

  return (
    <>
      <div className="flex max-w-[1440px] mx-auto justify-center items-center h-screen">
        <div className="flex  sm:flex-row  flex-col items-center">
          <div className="mx-auto">
            <img
              className=" h-[300px] sm:max-w-[250px] md:max-w-[550px] xs:h-[400px] mx-auto   md:h-[650px] object-contain"
              src={product.image}
              alt=""
            />
          </div>
          <div className="p-2 text-center md:text-left ">
            <h1 className="text-black font-bold text-3xl">{product.title}</h1>
            <p className=" mt-2 md:text-left text-center  text-gray-500  sm:max-w-[400px]">
              {" "}
              {product.description}
            </p>
            <div className="flex mt-10 gap-2 justify-center sm:justify-start sm:mx-0 mx-auto  items-center  w-32  h-9">
              <div className="mx-auto border  border-gray-800 rounded-md p-2  flex items-center justify-center ">
                <p className="text-lg">QUANTİTY</p>
                <span onClick={increment} className="text-2xl cursor-pointer">
                  +
                </span>
                <span className="text-2xl">{quantity}</span>
                <span onClick={decrement} className="text-2xl cursor-pointer">
                  -
                </span>
              </div>
              <div className="flex mb-4 items-center">
                <button
                  onClick={addToBasket}
                  className="mt-4 bg-black text-white h-14 whitespace-nowrap px-10 rounded hover:bg-gray-300 hover:text-black transition-all 
                  "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      />
    </>
  );
}
