import React from 'react'
import { useState ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, getAllProducts } from '../actions/productActions'
import {Link} from 'react-router-dom'
//import { getAllProductsReducer } from '../reducer/productReducer'
//import { getAllProductsReducer } from '../reducer/productReducer'
export default function Productslist() {

    const getallproductreducer = useSelector(state => state.getAllProductsReducer)
    const{products,loading,error}=getallproductreducer;
     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getAllProducts()) 
     }, [])
    return (
        <div>
            <h1>productslist</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(product=>{
                        return(
                            <tr>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.countInStock}</td>
                                <td><i class="far fa-trash-alt" onClick={()=>{dispatch(deleteProduct(product._id))}}></i>
                                <Link to={`/admin/editproduct/${product._id}`}><i class="far fa-edit"></i></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}
