import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import "../styles/Experience.css"
import { TimelineElements } from "../helpers/TimelineElements";

const Experience = () => {
  let workIconStyles = {background: "brown", color: "#FFF"};
  let schoolIconStyles = {background: "blue", color: "#FFF"};

  return (
    <div className="experience">
      <h1 className="timeline-title">Experience</h1>
      <p className="timeline-quote" >"Your life does not get better by chance; it gets better by change"</p>
      {/* <p className="timeline-quote-author">- Jim Rohn</p> */}
      <VerticalTimeline>
        {
          TimelineElements.map(element => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            )
          })};
      </VerticalTimeline>






      {/* <VerticalTimeline lineColor="orange">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          dateClassName="white"
          iconStyle={{ background: "orange", color: "#FFF" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">New Rochelle High School</h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2018 - Aug 2020"
          iconStyle={{ background: "brown", color: "#FFF" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Davenport Mansion</h3>
          <h5>Banquoet Waiter</h5>
          <p>Banquoet Waiter</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "orange", color: "#FFF" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lehman College</h3>
          <p> Nursing </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2018 - Aug 2020"
          iconStyle={{ background: "brown", color: "#FFF" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Hamaspik Homecare</h3>
          <p>Home Care Provider</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2018 - Aug 2020"
          iconStyle={{ background: "brown", color: "#FFF" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">16 Handles</h3>
          <p>Team Leader</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2021"
          iconStyle={{ background: "orange", color: "#FFF" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Borough of Manhattan Community College</h3>
          <p> Nursing </p>
        </VerticalTimelineElement>
      </VerticalTimeline> */}
    </div>
  );
};

export default Experience;
