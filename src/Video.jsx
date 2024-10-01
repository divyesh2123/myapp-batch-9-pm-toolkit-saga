import React, { useRef } from 'react'
import Ci from './video/video.mp4'
export default function Video() {

    const  ref1= useRef();
  return (
    <div>
        <video src={Ci} ref={ref1}></video>
    </div>
  )
}
