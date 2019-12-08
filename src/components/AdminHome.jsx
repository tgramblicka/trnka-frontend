import React from 'react';
//import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
//import {makeStyles} from "@material-ui/core";
import { Link } from 'react-router-dom';

function AdminHome(props) {

        return (
            <div>
                <h2>Admin Home</h2>
                <br />
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   <ul className="navbar-nav mr-auto">
                   <li><Link to={'/'} className="nav-link"> Admin Home </Link></li>
                   <li><Link to={'/classes'} className="nav-link">Class Management</Link></li>
                   <li><Link to={'/users'} className="nav-link">User Management</Link></li>
                   </ul>
                 </nav>

            </div>
        );
}

export default AdminHome;
