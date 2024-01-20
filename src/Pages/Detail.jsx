import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/productSlice";
import ProductDetail from "../Components/Detail/ProductDetail";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  console.log(loading, product);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <div className="h-full ">
        <ProductDetail product={product} />
        </div>
        </>
      )}
    </div>
  );  
};

export default Detail;