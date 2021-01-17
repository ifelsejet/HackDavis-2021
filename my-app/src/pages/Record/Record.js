import React, { useRef, Component } from "react";
/* import "./App.css"; */
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utils";
/* import {drawBoundingBox, drawKeypoints, drawSkeleton, isMobile, toggleLoadingUI, global_zero} from './demo-util'; */

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import history from './history';
import ReactTimerStopwatch from 'react-stopwatch-timer';
import "./Record.css";




function Record() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //  Load posenet
  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    //
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      const pose = await net.estimateSinglePose(video);
      console.log(pose);

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  };

  class Stopwatch extends Component {
    state = {
      status: false,
      runningTime: 0
    };
    handleClick = () => {
      this.setState(state => {
        if (state.status) {
          clearInterval(this.timer);
        } else {
          const startTime = Date.now() - this.state.runningTime;
          this.timer = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime });
          });
        }
        return { status: !state.status };
      });
    };
    handleReset = () => {
        clearInterval(this.timer); // new
        this.setState({ runningTime: 0, status: false });    };
    render() {
      const { status, runningTime } = this.state;
      return (
        <div>
          <p>{runningTime}ms</p>
          <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
  }

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.9, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };

  runPosenet();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: -60,
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        
       <div id = "end-workout">
           <h2 id="jacks"> Jumping Jacks: --</h2>
           <Stopwatch />

         <form>
         <ButtonGroup color="secondary" aria-label="contained primary button group">
            <Button variant="contained" color="secondary">Start Workout</Button>
            <Button variant="contained" color="secondary" onClick={() => history.push('/')} style={{maxWidth: '60%', maxHeight: '45%', minWidth: '60%', minHeight: '45%'}}>End Workout</Button>

        </ButtonGroup>            
          </form>
          </div>
         
      </header>
     
    </div>
  );
}

export default Record;