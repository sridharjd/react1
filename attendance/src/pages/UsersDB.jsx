import React from 'react'
import { useSelector } from 'react-redux'

const UsersDB = () => {
    const users = useSelector((state) => state.userInfo.users)
    console.log(users)
  return (
    <div>
      {users.map((users,index)=>{
        return(
          <div key={index}>
            <h2>{users.Userid}</h2>
            <h2>{users.Password}</h2>
          </div>
        )
      })} 
    </div>
  )
}

export default UsersDB;