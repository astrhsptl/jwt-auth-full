import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthSystem from '../API/server';
import Links from '../UI/Links';


const LoginComponent = ({user, setUser}) => {
  let [localData, setLocalData] = useState({
    username: '',
    email: '',
    password: '',
    access: '',
    refresh: '',
  });

  async function getSetTokens() {
    try{
      let result = await AuthSystem.getTokens({
        username: localData.username, 
        password: localData.password
      });
      await setLocalData({
        username: localData.username,
        email: result.email,
        password: localData.password,
        access: result.access,
        refresh: result.refresh,
      });
      await setUser({
        username: localData.username,
        email: result.email,
        password: localData.password,
        access: result.access,
        refresh: result.refresh,
      });
    } catch {
      alert('Vrong Data');
    };    
  }

  return (
    <div>
      <div>
        <Links></Links>
      </div>
      <h1>Login</h1>
      <input type="text" onChange={(e)=>setLocalData({
        username: e.target.value, 
        password: localData.password, 
        access: localData.access, 
        refresh: localData.refresh})}/>
      <input type="password" onChange={(e)=>setLocalData({
        username: localData.username, 
        password: e.target.value, 
        access: localData.access, 
        refresh: localData.refresh})}/>
      <button onClick={getSetTokens}>Send</button>
    
    </div>
  );
};

export default LoginComponent;