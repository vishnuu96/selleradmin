import React from 'react'
import Button from './Button'

const ProductList = (props) => {
    const deleteHandler=(productid)=>{
      
      const updatedProductList = props.products.filter((product)=>{
      return product.productId!==productid
      })

      props.ondelete(updatedProductList)
    }
  return (
    <div>
      <ul>
      {props.products.map((product) => (
          <li key={product.Id}>
           {product.productId} {product.Name} {product.price} <Button type='delete' onClick={()=>deleteHandler(product.productId)}>delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
