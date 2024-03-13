import React from 'react';
import {motion,useViewportScroll,useTransform} from "framer-motion";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    const date = new Date();
    const yr = date.getFullYear();
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [1,0.6],[1,0.6]);
  return (
    <motion.div style={{scale}} className='fot'>
        <motion.div style={{scale}} className='footer'>
            <motion.h1 style={{scale}}>Vijayaramanaa L G</motion.h1>
            <motion.div className='fle'>
            <motion.div style={{scale}}  className='media'><a><FaInstagram style={{width:"40px",height:"40px"}}/></a></motion.div>
        <motion.div style={{scale}}  className='media1'><a><FaGithub style={{width:"40px",height:"40px"}}/></a></motion.div>
        <motion.div style={{scale}}  className='media2'><a href='www.linkedin.com/in/vijayaramanaa-l-g-a169631b6' about='_blank'><FaLinkedin style={{width:"40px",height:"40px"}}/></a></motion.div>
            </motion.div>
            <motion.div style={{scale}}>
                <h3>&copy;All Rights Reserved. {yr}</h3>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Footer