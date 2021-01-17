import React, { useRef } from "react";
// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Camera from '../../components/Camera.js'

function Record() {

  return (
        <div>
          <Camera/>
        </div>
      
  );
}

export default Record;