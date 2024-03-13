import React, { useRef } from 'react';
import "./skill.scss";
import {motion} from "framer-motion"
import { IoLogoPython } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function Sset() {
    const ref = useRef(null)
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      const itm = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      const sty = {
        width:"30px",
        height:"30px"
      }

    const lst = [
        {
            id : 1,
            Name : "Python",
            img : <IoLogoPython style={sty}/>
        },
        {
            id : 2,
            Name : "JavaScript",
            img : <IoLogoJavascript style={sty}/>
        },
        {
            id : 3,
            Name : "HTML5",
            img : <IoLogoHtml5 style={sty}/>
        },
        {
            id : 4,
            Name : "CSS3",
            img : <FaCss3Alt style={sty}/>
        },
        {
            id : 5,
            Name : "React.js",
            img : <FaReact style={sty}/>
        },
        {
            id : 6,
            Name : "Express.js",
            img : <SiExpress style={sty}/>
        },
        {
            id : 7,
            Name : "MongoDB",
            img : <SiMongodb style={sty}/>
        },
        {
            id : 8,
            Name : "MySql",
            img : <SiMysql style={sty}/>
        },
        {
            id : 9,
            Name : "REST API",
            img : <TbApi style={sty}/>
        },
        {
            id : 10,
            Name : "FireBase",
            img : <SiFirebase style={sty}/>
        },
        {
            id : 11,
            Name : "ReactNative",
            img : <TbBrandReactNative style={sty}/>
        },
        {
            id : 12,
            Name : "GitHub",
            img : <FaGithub style={sty}/>
        },

    ]
  return (
    <motion.div className="ssdiv" ref={ref}  variants={container}
    initial="hidden"
    animate="visible"
    whileInView="visible"
    viewport={{ once: true }}
    >
        <div className='sdiv1'>
            {lst.map((item)=>{
                
                return(
                    <motion.div key={item.id} ref={ref} className='con' variants={itm}>
                        <div style={{color:"blue",}}>{item.img}</div>
                        <div><h1>{item.Name}</h1></div>
                    </motion.div>
                )
            })}
        </div>
    </motion.div>
  )
}

export default Sset