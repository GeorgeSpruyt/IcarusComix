import React from "react";
import ninja from "./videos/ninja-vanish0001-0075.mkv";
import greatCraftsman from "./videos/greatbcraftsman0001-00700001-0070.mkv";
import killingnephew from "./videos/killingnephew.mkv"
import sailingtocrete from "./videos/sailingtocrete.mkv"
import meetingtheking from "./videos/meetingtheking.mkv"
import minotaur from "./videos/minotaur0001-0060.mkv"
import inthetower from "./videos/in-the-tower0001-0090.mkv"
import makingthewings from "./videos/makingthewings0001-0080.mkv"
import plunge from "./videos/yes0001-0250.mkv"
import VideoPanel from "./components/videopanel";
import TextPanel from "./components/textpanel"
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="flex-grid">
        <div className="col3"><VideoPanel fontsize={5} text="Daedalus the great craftsman" vid={greatCraftsman} /></div>
        
        </div>

        <div className="flex-grid">
        <div className="col"> <VideoPanel fontsize={2} text="An act of envy" vid={ killingnephew} /></div>
        <div className="col"> <VideoPanel fontsize={2} text="Exile" vid={ sailingtocrete} /></div>
        <div className="col"> <VideoPanel  fontsize={2} text="Engaged by a tyrant" vid={ meetingtheking } /></div>
        </div>
        

      <div className="flex-grid">
      
      <div className="col2"><VideoPanel fontsize={5} text="The Minotaur"vid={minotaur} /></div>
      <div className="col"><div><VideoPanel fontsize={2}text="An ungrateful tyrant" vid={inthetower} /></div>
      <div><TextPanel  fontsize={2} text={"Surely the greatest creator can come up with a plan!"} /></div></div>
      </div>

      <div className="flex-grid">
      <div className="col"><div><VideoPanel vid={makingthewings} /></div>
      <div><TextPanel  fontsize={2} text={"Working franctically through the night again!"} /></div></div>
      <div className="col2"> <VideoPanel  fontsize={4} text={"Alas Icarus!"} vid={plunge} /></div>
       
      </div>

       
    </div>
  );
}

export default App;
