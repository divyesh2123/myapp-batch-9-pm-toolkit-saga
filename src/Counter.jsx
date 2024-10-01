import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './slice/counterslice';

export default function Counter() {

    const d = useSelector(y=>y.counter);

    const dis = useDispatch();

    const incs = ()=>{

      dis({type:'Counter_Asnyc_INC'})

    }

    const decs = ()=>{
        dis({type:'Counter_Asnyc_DEC'})
    }
  return (
    <div>{d }
        <button onClick={incs}>+</button>
        <button onClick={decs}>-</button>
    </div>
  )
}
