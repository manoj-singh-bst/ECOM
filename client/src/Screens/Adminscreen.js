

import React from 'react'
 import { Link, Switch, Route, BrowserRouter,} from 'react-router-dom'
 import { NavLink } from 'react-router-dom'
import Productslist from './Productslist'
import Userslist from './Userslist'
import Addnewproduct from './Addnewproduct'
import Orderlist from './Orderlist'
import Editproduct from './Editproduct'
import Notfound from './Notfound'
import Welcome from './Welcome'
import Button from 'react-bootstrap/Button'

export default function Adminscreen() {
    return (
  
        <div style={{backgroundColor:'',height:'100vh' ,}}>
            <div className="row">
                <div className=".col-md-10">
                    <ul className="admin">
                    <Button variant="secondary"> <li><NavLink to="/admin/userslist" activeStyle={{color:'red'}} >User List</NavLink></li></Button>{' '}
                    <Button variant="secondary"><li><NavLink to="/admin/productslist" activeStyle={{color:'red'}}>Product List</NavLink></li></Button>{' '}
                    <Button variant="secondary"><li><NavLink to="/admin/addnewproduct" activeStyle={{color:'red'}}>Add New Product</NavLink></li></Button>{' '}
                    <Button variant="secondary"><li><NavLink to="/admin/orderlist" activeStyle={{color:'red'}}>Order List</NavLink></li></Button>{' '}
                         
                        {/* <li><Link to="/admin/editproduct/:product">Order List</Link></li> */}

                    </ul>
                    <Switch>
                    
                        <Route path="/admin/userslist" component={Userslist} />
                        <Route path="/admin/productslist" component={Productslist} />
                        <Route path="/admin/addnewproduct" component={Addnewproduct} />
                        <Route path="/admin/orderlist" component={Orderlist} />
                        <Route path="/admin/editproduct/:productid" component={Editproduct} />
                        <Route path ="/admin/"component={Welcome} /> 
                        <Route path ="/admin/:id"component={Notfound} /> 
                    </Switch>

                </div>
            </div>
        

//****************//



//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div>
//             <div className="row mt-5">
//               <div className=".col-md-10">
//                 <ul className="admin">
//                   <li>
//                     <Link to="/admin/userslist">User List</Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/productslist">Product List</Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/addnewproduct">Add New Product</Link>
//                   </li>
//                   <li>
//                     <Link to="/admin/orderlist">Order List</Link>
//                   </li>
//                   {/* <li><Link to="/admin/editproduct/:product">Order List</Link></li> */}
//                 </ul>
//                 <Switch>
//                   <Route path="/admin/userslist" component={Userslist} />
//                   <Route path="/admin/productslist" component={Productslist} />
//                   <Route
//                     path="/admin/addnewproduct"
//                     component={Addnewproduct}
//                   />
//                   <Route path="/admin/orderlist" component={Orderlist} />
//                   <Route
//                     path="/admin/editproduct/:productid"
//                     component={Editproduct}
//                   />
//                 </Switch>
//               </div>
//             </div>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
