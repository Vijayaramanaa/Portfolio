import React from 'react'
import { PiRoadHorizonFill } from "react-icons/pi";
import {useViewportScroll,useTransform,motion} from "framer-motion";
import "./tl.scss"
function Timeline() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0,1],[0.8,0.2]);
  return (
    <motion.div className='tldiv' style={{scale}}>
      <div className='tldiv1'>
       <motion.div>
       <motion.h1 style={{scale}}> Road-Map </motion.h1> 
       </motion.div>
       <motion.div style={{scale}}>
        <PiRoadHorizonFill  className='logo'/>
        </motion.div> 
        </div>
        </motion.div>
  )
}

export default Timeline