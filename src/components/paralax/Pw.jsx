import React, { useRef } from 'react';
import { GoProject } from "react-icons/go";
import {motion, useInView,useViewportScroll,useTransform} from "framer-motion";
import "./tl.scss"

function Pw() {
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
            <motion.h2  style={seen ?{fontSize:"7rem"}:{fontSize:"5rem"}}>Project Works</motion.h2>
            <motion.div>
                <GoProject className='logo2'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Pw;