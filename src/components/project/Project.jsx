import React from 'react';
import "./project.scss";
import {motion} from "framer-motion"

function Project() {
    const project = [{
        id:1,
        title:"To Do List",
        des : "A to-do list application developed with React.js provides users with a convenient and intuitive platform for organizing tasks and enhancing productivity. Utilizing React's component-based architecture, the application offers features such as adding new tasks, marking tasks as complete, and deleting tasks. The user interface typically presents tasks in a list format, indicating their status and allowing users to interact with them easily. React's virtual DOM ensures efficient performance by minimizing unnecessary re-renders, while its flexibility allows for additional features such as sorting tasks or filtering by categories. Overall, a React.js-based to-do list application streamlines task management, offering users a seamless experience to prioritize, track, and complete their tasks efficiently.",
        button :"View Code",
        link : "/",
        img : "https://media.istockphoto.com/id/1384700413/vector/to-do-list-with-clipboard.jpg?s=612x612&w=0&k=20&c=naH67PLQVD5JuC9Z96DFTw8gZT3waRNOgOL23UyHRFw=",
    },
    {
        id:2,
        title:"Weather Site",
        des : "A weather website developed using React.js offers users a dynamic and user-friendly platform for accessing weather information. Leveraging React's component-based architecture, the website provides features such as real-time weather updates, interactive maps, and customizable location searches. The user interface typically displays current weather conditions, including temperature, humidity, and wind speed, in an easily digestible format. Users can also explore forecasts for future days, view radar images for precipitation tracking, and set preferred locations for personalized weather updates. With React's efficient rendering and state management, the website delivers a responsive and seamless experience, empowering users to stay informed about weather conditions in their area and plan their activities accordingly.",
        button :"View Code",
        link : "/",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7XVIhKLWZfFGihMX2NbeIRV7p1ho1eR1xuxPJdnU5RumdXkiiMmOf0svIj46M5wXfsM&usqp=CAU",
    },
    {
        id:3,
        title:"Canteen Management System",
        des : "A canteen management system developed using React.js offers a comprehensive solution for efficiently managing canteen operations in various settings such as schools, offices, or large institutions. Employing React's component-based structure, the system provides functionalities such as menu management, order tracking, inventory management, and user authentication. Users can easily browse through menus, place orders, and make payments securely through the intuitive user interface. Administrators can manage menus, track inventory levels, and generate reports to analyze sales trends and consumption patterns. React's flexibility allows for the integration of additional features like loyalty programs, feedback mechanisms, and dietary restriction notifications to enhance user experience. With React's efficient state management and real-time updates, the canteen management system ensures smooth operations, reduces manual efforts, and enhances customer satisfaction by providing a seamless and convenient dining experience.",
        button :"View Code",
        link : "/",
        img : "https://media.istockphoto.com/id/1156913565/vector/phone-with-pizza-on-screen-vector-illustration-flat-cartoon-cellphone-with-food-delivery.jpg?s=612x612&w=0&k=20&c=XfmtYcd_3bdh78_xbvSXLgQLtcMzNJU6z4cGV1-IwZM=",
    },
    {
        id:4,
        title:"Smart Home",
        des : "A home automation system built with React.js offers homeowners a sophisticated yet user-friendly way to control various aspects of their home environment remotely. Leveraging React's component-based structure, the system provides a centralized interface accessible via web or mobile devices, allowing users to monitor and manage connected devices such as smart thermostats, lights, security cameras, and appliances. Through intuitive controls and real-time feedback, users can adjust settings, schedule tasks, and receive notifications based on predefined triggers or events. Administrators can customize automation routines, set energy-saving profiles, and integrate with third-party services for expanded functionality. React's efficient rendering ensures responsive performance across devices, while its modular architecture facilitates scalability and extensibility as new devices or features are added. Overall, a home automation system developed with React.js empowers users to create a personalized and efficient living environment tailored to their preferences and lifestyle.",
        button :"View Code",
        link : "/",
        img : "https://img.freepik.com/free-vector/internet-things-home-automation-system-iot-retro-cartoon-poster-smartphone-circle-composition_1284-14826.jpg",
    },
]
  return (
    <motion.div className='contain'>
        <motion.div className='div1'>
            {project.map((data)=>{
                return(
                    <motion.div  className='div2' key={data.id}>
                        <motion.div       initial={{ opacity: 0, x: data.id % 2 === 0 ? 50 : -50 }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 1 
        }
      }}
      viewport={{ once: true }}
                         className='div3'>
                            <h1>{data.title}</h1>
                            <p>{data.des}</p>
                            <button><a>{data.button}</a></button>
                        </motion.div>
                        <motion.div className='div4'>
                            <img  src={data.img}/>
                        </motion.div>
                    </motion.div>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default Project