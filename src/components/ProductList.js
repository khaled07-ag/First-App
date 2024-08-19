import React from 'react'
import '../index.css'
import items from '../data'
import ProductItem from './ProductItem'
const ProductList = () => {
    const displayProducts = items.map((item)=>{
        return <ProductItem
        productImage={item.image}
        productTitle={item.title}
        productPrice={item.price}
        />;
    });

  return (
    <div className='item-section'>{displayProducts}</div>
  )
}

export default ProductList