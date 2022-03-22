import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';
import Admin from './Pages/Admin';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <NavBar/>
      <h1> API Workshop </h1>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/users' element={<UserList/>} />
        <Route exact path='/user/:id' element={<Profile/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route path='/admin' element={<PrivateRoute isAuth={isAuth}/>} > 
          <Route exact path='/admin' element={<Admin/>} />
        </Route>

        <Route exact path='/*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
