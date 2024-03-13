import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { IoSchool } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import "./star.scss"


function Stars() {

    let timelineElements = [
        {
          id: 1,
          title: "Aspiring Web Developer",
          location: "Ranipet",
          description:
            "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
          buttonText: "View  Projects",
          date: " present",
          icon: "work",
        },
        {
          id: 2,
          title: " Aspiring Full stack Developer",
          location: "Ranipet",
          description:
            "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
          buttonText: "View Projects",
          date: "Present",
          icon: "work",
        },
        {
          id: 3,
          title: "B.E Computer Science Engineering",
          location: "Melvisharam,Ranipet",
          description:
            "Currently pursuing Batcholer of Engineering in Computer Science and Engineering at C.Abdul Hakeem College of Engineering and Technology-Affiliated to Anna University",
          buttonText: "CGPA 8.1",
          date: "Nov 2020 - May 2024",
          icon: "school",
        },
        {
          id: 4,
          title: "HSC ",
          location: "Arcot,Ranipet",
          description:
            "HSC Done at G.V.C hr sec school belongs to state board. ",
          buttonText: "Percentage - 70",
          date: "April 2020",
          icon: "school",
        },
        {
          id: 5,
          title: "SSLC",
          location: "Rathinagiri,Ranipet",
          description:
            " SSLC Done at Rathinagiri Bagirathan Matriculation Higher Secondary School belongs to state board.",
          buttonText: "Percentage - 85",
          date: "April 2018",
          icon: "school",
        },
        ,
      ]

      let workIconStyles = { background: "#06D6A0" }
      let schoolIconStyles = { background: "#f9c74f"}
      
  return (
    <div className='sdiv'>
    <div className='sta'>
    <h1 className="title"></h1>
    <VerticalTimeline >
      {timelineElements.map(element => {
        let isWorkIcon = element.icon === "work"
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== ""

        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <FaNetworkWired /> : <IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location}
            </h5>
            <p id="description">{element.description}</p>
            {showButton && (
              <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }
`}
                href="/"
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  </div>
  </div>
  )
}

export default Stars