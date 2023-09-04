import React,{useState} from 'react'
import Button from './Button'

const InputForm = (props) => {
    const [enteredProductId, setEnteredProductId] = useState('')
    const [enteredSellingprice, setEnteredSellingprice] = useState('')
    const [enteredproductName, setEnteredProductName] = useState('')
 
const productIdChangeHandler=(event)=>{
    setEnteredProductId(event.target.value)
}

const priceChangeHandler=(event)=>{
    setEnteredSellingprice(event.target.value)
}

const productNameChangeHandler=(event)=>{
    setEnteredProductName(event.target.value)
}

const addProductHandler=(event)=>{
event.preventDefault();

   const productId=enteredProductId
    const price=enteredSellingprice
    const Name=enteredproductName
console.log(productId,price,Name)
  props.onAddProduct(productId,price,Name)

}


  return (
    <div>
 <form onSubmit={addProductHandler}>
          <label htmlFor="productId">Product Id</label>
          <input
            id="PrductId"
            type="text"
            value={enteredProductId}
            onChange={productIdChangeHandler}
            // ref={nameInputRef}
          />
          <label htmlFor="sellingPrice">selling Price </label>
          <input
            id="sellingPrice"
            type="number"
            value={enteredSellingprice}
            onChange={priceChangeHandler}
            // ref={ageInputRef}
          />
          <label htmlFor="product-name">product name </label>
          <input
            id="product-name"
            type="text"
            value={enteredproductName}
            onChange={productNameChangeHandler}
            // ref={collegeNameInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
    </div>
  )
}

export default InputForm
