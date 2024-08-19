import React from 'react'
import product from '../data'
import '../index.css'
const ProductItem = ({productImage,productTitle,productPrice}) => {
  return (
    <div className= 'item-container'>
    <img height={300} width={200} src={productImage} alt="product"/>
    <h3>{productTitle}</h3>
    <p>{productPrice}</p>
  </div>
  )
}

export default ProductItem