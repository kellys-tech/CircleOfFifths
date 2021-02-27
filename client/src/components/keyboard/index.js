import React from "react";
import ReactDOM from "react-dom";
import { Piano, MidiNumbers } from "react-piano";

// import "react-piano/dist/style.css";

import SoundfontProvider from "./SoundfontProvider";
import "./style.css";

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("b4")
};

function App() {
  return (
    <div>
      <div className="mt-5">
        <p>Keyboard</p>
        <ResponsivePiano />
      </div>
    </div>
  );
}

function ResponsivePiano(props) {
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={200}
          height={200}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          {...props}
        />
      )}
    />
  );
}
export default ResponsivePiano;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
