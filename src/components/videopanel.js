import React from "react";
import "../App.css";
const VideoPanel = props => {
  return (
    <div className="gutter" style={{
      position: "relative",
      
      
    }}>
      <div
      style={{
        position: "absolute",
        fontSize: `${props.fontsize}vw`,
        fontFamily:'Mali',
        color:"white",
        left: "5%",
        top: "70%",
        
      }}
      >
        {props.text}
      </div>
      <video
        width="100%"
        src={props.vid}
        type='video/x-matroska; codecs="theora, vorbis"'
        autoPlay
        loop
        muted={true}
        onerror="failed(event)"
      />
    </div>
  );
};
export default VideoPanel;
