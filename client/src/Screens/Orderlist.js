import React from 'react';
import { useState ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrders } from '../actions/orderActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Card from 'react-bootstrap/esm/Card';
export default function Orderlist() {
  const getallordersreducer = useSelector(state => state.getAllOrdersReducer);
  const {loading ,error ,orders}=getallordersreducer;
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllOrders())
  }, [])
  return (
    <>
    <center>
    <Card className="cardContainer" style={{marginTop:'20px' , padding:'15px' , width:'90%' }}   >
    <Card.Body>
    {loading && (<Loader/>)}
    {error && <Error error="something went wrong"/>}
    <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>userId</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>date</th>
                        <th>transition</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order=>{
                        return(
                            //<tr onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                              <tr onClick={()=>{window.location.href='/orderinfo'}}>
                                <td>s</td>
                                <td>s</td>
                                <td>cd</td>
                                <td>g</td>
                                <td>v</td>
                                <td>g</td>
                                                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </Card.Body>
            </Card>
            </center>
    </>
  );
}
