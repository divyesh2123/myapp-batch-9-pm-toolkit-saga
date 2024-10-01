import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from './post';

export default function DisplayPosts() {

    const d = useSelector(y=>y.post);

    console.log(d);

    const disp=useDispatch();

    useEffect(()=>{
        disp(getPosts());

    },[])
  return (
    <div>{d.data.map((v)=>{

        return (<div>{v.title}</div>)
    })}</div>
  )
}
