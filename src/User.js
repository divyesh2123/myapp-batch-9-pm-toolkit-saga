import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { UserRequest } from './slice/userslice';

export default function User() {

    const d= useSelector(y=>y.user);
    console.log(d);

    const dis= useDispatch();
    useEffect(()=>{

        dis(UserRequest())
    },[])
  return (
    <div>User</div>
  )
}
