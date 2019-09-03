import React from "react";
import "../App.css";
const textPanel = props => {
  return (
    <div className="gutter" style={{
      position: "relative",
      
      
    }}>
      <div
      style={{
        position: "absolute",
        fontSize: `${props.fontsize}vw`,
        fontFamily:'Mali',
        color:"blackwhite",
        left: "10%",
        top: "2em",
        
      }}
      >
        {props.text}
      </div>
       
    </div>
  );
};
export default textPanel;
