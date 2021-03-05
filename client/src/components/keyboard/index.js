import React from "react";
import { Piano, MidiNumbers } from "react-piano";

import SoundfontProvider from "./SoundfontProvider";
import "./style.css";

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("b4")
};

function ResponsivePiano(props) {
  
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
        className="keys"
          noteRange={noteRange}
          width={550}
          // height={200}
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
