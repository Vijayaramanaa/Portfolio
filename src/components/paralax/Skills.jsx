import React, { useRef } from 'react';
import { LuBrainCircuit } from "react-icons/lu";
import {motion, useInView,useViewportScroll,useTransform} from "framer-motion";
import "./tl.scss"

function Skills() {
  const sw = window.screen.width;
  const seen = sw>=768
  const ref = useRef(null);
  const isInview = useInView(ref);
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [1,0.2],[1.2,0.8]);
  return (
    <motion.div className='tldiv' ref={ref} style={
      {scale}
    } >
        <motion.div  className='tldiv2' >
            <motion.h2 style={seen ?{fontSize:"7rem"}:{fontSize:"5rem"}}>Skills set</motion.h2>
            <motion.div>
                <LuBrainCircuit className='logo2'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills