import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function UserView() {
  const params = useParams()
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams);

  const [userData, setUserData] = useState({})

  useEffect(() => {
    loaduser()
  }, [])

  let loaduser = async () => {
    try {
      let user = await axios.get(`https://62fe35d041165d66bfbb1342.mockapi.io/users/${params.id}`);
      setUserData(user.data)
      console.log(user.data);
    } catch (error) {

    }
  }

  return (
    //  <h1>{params.id}</h1>
    <>
      <h2 style={{color:"Blue"}}>{userData.name}</h2>
      <h3 style={{color:"Black"}}>{userData.position}</h3>
      <h3 style={{color:"Black"}}>{userData.office}</h3>
      <h3 style={{color:"Black"}}>{userData.age}</h3>
      <h3 style={{color:"Black"}}>{userData.startData}</h3>
      <h3 style={{color:"Black"}}>{userData.salary}</h3>
    </>

  )
}

export default UserView