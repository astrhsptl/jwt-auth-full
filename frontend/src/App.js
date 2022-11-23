import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import {BrowserRouter,Outlet,Route, Routes,} from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegiterComponent from "./components/RegiterComponent";
import { paths } from "./configure/pages";


function App() {
  let [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    access: '',
    refresh: '',
  });

  useEffect(() => {
    console.log(`user: ${user.access}`) 
  }, [user])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {paths.map(route => 
            <Route path={route.path} element={<route.component user={user} setUser={setUser}/>}/>
          )}

          {/*<Route path="/" element={<HomePage user={user} />} exact/>   {/*Start Page
          <Route path="/login" element={<LoginComponent user={user} setUser={setUser} />} /> {/* Login Form 
          <Route path="/register" element={<RegiterComponent user={user} setUser={setUser}/>}/> {/* Register form */} 
        </Routes>
      </BrowserRouter>
      <Outlet/>
    </div>
  );
}

export default App;
