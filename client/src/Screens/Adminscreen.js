
import React from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import Productslist from './Productslist'
import Userslist from './Userslist'
import Addnewproduct from './Addnewproduct'
import Orderlist from './Orderlist'

export default function Adminscreen() {
    return (
        <div>
            <div className="row mt-5">
                <div className=".col-md-10">
                    <ul className="admin">
                        <li><Link to="/admin/userslist">User List</Link></li>
                        <li><Link to="/admin/productslist">Product List</Link></li>
                        <li><Link to="/admin/addnewproduct">Add New Product</Link></li>
                        <li><Link to="/admin/orderlist">Order List</Link></li>

                    </ul>
                    <Switch>
                        <Route path="/admin/userslist" component={Userslist} />
                        <Route path="/admin/productslist" component={Productslist} />
                        <Route path="/admin/addnewproduct" component={Addnewproduct} />
                        <Route path="/admin/orderlist" component={Orderlist} />
                    </Switch>

                </div>
            </div>

        </div>


    )

}
