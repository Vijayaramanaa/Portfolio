import React, { useEffect, useRef, useState } from 'react';
import "./Home/home.scss";
import hero from "../assets/hero.png";
import {useViewportScroll,useTransform,motion} from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Home() {
    const ref = useRef()
    const [item, setItem] = useState("");
    const lst = ["WEB DEVELOPER","PROGRAMMER","FRONT END CREATER","BACK END CREATER"];
 
    let [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if(count <= 3){
                setItem(lst[count])
                setCount(count + 1)
            }
            if(count === 3){
                setCount(0)
            }
        }, 5000)
        return () => clearInterval(timer)
    }, [count])

    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0,1],[0.8,0.2]);

  return (
    <motion.div className='container'>
        <motion.div className='done' style={{scale}}  ref={ref.current}>
            <h1 >Hi <span>There <div className='emoji'>👋</div> </span></h1>
            <h2>I'm<span>VIJAYAMANAMAA L G</span></h2>
            <div className='dslash'>^ <span> {item} <div>|</div></span></div>
        </motion.div>
        <motion.div className='dtwo' style={{scale}}  ref={ref.current}>
            <img src={hero} alt="Hero"/>
            <div className='shine'></div>
        </motion.div>
        <motion.div style={{scale}}  className='media'><a><FaInstagram style={{width:"40px",height:"40px"}}/></a></motion.div>
        <motion.div style={{scale}}  className='media1'><a><FaGithub style={{width:"40px",height:"40px"}}/></a></motion.div>
        <motion.div style={{scale}}  className='media2'><a href='www.linkedin.com/in/vijayaramanaa-l-g-a169631b6'><FaLinkedin style={{width:"40px",height:"40px"}}/></a></motion.div>
    </motion.div>
  )
}

export default Home;
