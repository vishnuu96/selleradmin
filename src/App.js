import React,{ useState } from 'react'
import InputForm from './components/InputForm'
import ProductList from './components/ProductList'

const App = () => {
  const [productLists, setproductLists] = useState([])
  const [worth, setWorth] = useState(0)

  const addProductHandling=(productId,price,Name)=>{
    setproductLists((prevProduct)=>{
     return [
      ...prevProduct,
      {
        id:Math.random().toString(),
        productId:productId,
        price:parseInt(price),
        Name:Name
        
      }
     ] 
    }
    )
    setWorth((prevworth)=>{
      return (prevworth + parseInt(price))
    })

  } 
  
  const deleteHandling=(updatedProductList)=>{
    setproductLists(updatedProductList)
  }
 

     
  return (
    <div>
      hello
     <InputForm onAddProduct={addProductHandling}/>
     <ProductList  products={productLists} ondelete={deleteHandling} />
      Total worth ={worth}
    </div>
  )
}

export default App

