import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Productslist from "./Productslist";
import Userslist from "./Userslist";
import Addnewproduct from "./Addnewproduct";
import Orderlist from "./Orderlist";
import Editproduct from "./Editproduct";
// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
// import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
export default function Adminscreen() {
  return (
    <div>
      <div className="row mt-5">
        <div className=".col-md-10">
          <ul className="admin">
            <li>
              <Link to="/admin/userslist">User List</Link>
            </li>
            <li>
              <Link to="/admin/productslist">Product List</Link>
            </li>
            <li>
              <Link to="/admin/addnewproduct">Add New Product</Link>
            </li>
            <li>
              <Link to="/admin/orderlist">Order List</Link>
            </li>
            {/* <li><Link to="/admin/editproduct/:product">Order List</Link></li> */}
          </ul>
          <Switch>
            <Route path="/admin/userslist" component={Userslist} />
            <Route path="/admin/productslist" component={Productslist} />
            <Route path="/admin/addnewproduct" component={Addnewproduct} />
            <Route path="/admin/orderlist" component={Orderlist} />
            <Route
              path="/admin/editproduct/:productid"
              component={Editproduct}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
//****************//

//   const [show, setShow] = useState(false);

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
