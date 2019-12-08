import React from 'react';
import './App.css';
import AdminHome from './components/AdminHome';
import ClassesList from './components/ClassesList';
import UserList from './components/UserList';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
                   return (
                         <div>
                            <NavBar />
                             <Router>
                             <Switch>
                                 <Route exact path='/dash' component={Dashboard} />
                                 <Route exact path='/signin' component={SignIn} />
                                 <Route exact path='/' component={AdminHome} />
                                 <Route path='/users' component={UserList} />
                                 <Route path='/classes' component={ClassesList} />
                             </Switch>
                             </Router>
                         </div>
                   );
               }

               export default App;
