import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../../redux/productSlice';

export default function ProductsCard() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    console.log(products, loading, "Ürünler ve Yükleme Durumu");

    return (
        <div className=''>
            {loading ? (
                <p>Loading...</p>
            ) : (
               <>
               products
                <div className='grid grid-cols-4 max-w-[1440px] gap-3 mx-auto'>
                    {products.slice(0,8).map((product, i) => (
                        <div key={i} className='flex items-center flex-col'>
                            <img className='object-cover h-[600px]' src={product.image} alt={product.title} />
                            <div className='bg-red-500 h-10 w-full'>
                                dsaasd
                            </div>
                        </div>
                    ))}
                </div>
               </>
            )}
        </div>
    );
}
