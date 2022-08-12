import {useState} from 'react'
import "./ProductList.css"
import Categories from '../categories/Categories'
import Search from '../search/Search'
import Product from './Product'

import{products as productData} from "../../Products-data"

const ProductList = () => {
const[products, setProducts]= useState(productData)

  return (
    <>
    <div className='header'>
    <header className='container'>
        <h1 className='--color-white --text-center'><span className='--color-danger'>
            Product</span> Filter</h1>
        <div className='--flex-between --flex-dir-column --py'>
            <Search/>
            <Categories/>
        </div>
    </header>
      </div>
      <div className='product-container --py'>
        <div className='products container --grid-25 --py-2'>
            {products.map((product) =>{
                const{id, title, img, price}=product;
                return(
                    <div key={id}>
                         <Product title={title} img={img} price={price}/>


                    </div>
                )

            })}
        </div>
      </div>
    </>
  )
}

export default ProductList
