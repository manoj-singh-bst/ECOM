import React from 'react'
import { useState ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { deleteProduct, getAllProducts } from '../actions/productActions'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
//import { getAllProductsReducer } from '../reducer/productReducer'
//import { getAllProductsReducer } from '../reducer/productReducer'
import Loader from '../components/Loader'
import Error from '../components/Error'
export default function Productslist() {

    const getallproductreducer = useSelector(state => state.getAllProductsReducer)
    const{products,loading,error}=getallproductreducer;
     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getAllProducts()) 
     }, [])
    return (
        <div>
             <center>
            <Card className="cardContainer"  style={{marginTop:'20px' , padding:'15px' , width:'90%' }} >
                <Card.Body>
         
          <Card.Title>PRODUCTS</Card.Title>
            {loading && <Loader/>}
            {error && <Error error="something went worng"/>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>Product Image</th>
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
                                <td style={{height:'20px',width:'20px'}}><img height={30} src={product.image}/></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.countInStock}</td>
                                <td><i class="far fa-trash-alt" style={{color:'red' ,fontSize:'20px'}} onClick={()=>{dispatch(deleteProduct(product._id))}}></i>
                                <Link to={`/admin/editproduct/${product._id}`}><i class="far fa-edit m-2" style={{color:'blue' ,fontSize:'20px'}}></i></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            
            </Card.Body>
            </Card>
            </center>
        </div>
    )
}
