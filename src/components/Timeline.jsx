import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index,url }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
      <a href="https://sourav-mrou.onrender.com">Link</a>
    </div>
  </div>
);

export default Timeline;
