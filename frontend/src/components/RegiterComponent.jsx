import AuthSystem from '../API/server';
import React, { useEffect, useState } from 'react';
import Links from '../UI/Links';


const RegiterComponent = ({user, setUser}) => {
  let [localData, setLocalData] = useState({
    username: '',
    email: '',
    password: '',
  });

  function getFullUserData(data, jwtTokens) {
    return {
      username: data.username,
      email: data.email,
      password: data.password,
      access: jwtTokens.access,
      refresh: jwtTokens.refresh,
    }
  }

  async function registerAndGetTokens(e) {
    e.preventDefault();
    console.log(localData);
    let tokens;
      let result = await AuthSystem.register(localData);
      await console.log(result);
      tokens = await AuthSystem.getTokens({
        username: localData.username,
        password: localData.password,
      });
      await setUser(
        getFullUserData(localData, tokens)
      )
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      <Links></Links>
      <h1>Form:</h1> <h1>{user.username}</h1>
      <div>
        <input type="text" onChange={(e) => setLocalData({username: e.target.value, email:localData.email, password:localData.password})}/>
        <input type="email" onChange={(e) => setLocalData({username: localData.username, email:e.target.value, password:localData.password})}/>
        <input type="password" onChange={(e) => setLocalData({username: localData.username, email:localData.email, password:e.target.value})}/>
        <button onClick={registerAndGetTokens}>I love suck some dicks</button>
      </div>
    </div>
  );
};

export default RegiterComponent;