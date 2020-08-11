import React, {  useRef, useEffect } from "react";
import { useMovement } from './useMovement'
import "./App.css";

export default function App() {
  const canvasRef = useRef(null);
  const lineDownRef = useRef(null);
  const lineUpRef = useRef(null);
  const lineRightRef = useRef(null);
  const lineLeftRef = useRef(null);
  const {x,y,move,direction } = useMovement();
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);

    let theLineRef;
    
    if (direction === "down") theLineRef = lineDownRef;
    if (direction === "right") theLineRef = lineRightRef;
    if (direction === "up") theLineRef = lineUpRef;
    if (direction === "left") theLineRef = lineLeftRef;

    context.drawImage(theLineRef.current,x, y);
  }, [x, y,direction]);


  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move("up")}>Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>

      <div className="images">
        <img
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down"
          ref={lineDownRef}
        />
        <img
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right"
          ref={lineRightRef}
        />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" ref={lineUpRef} />
        <img
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left"
          ref={lineLeftRef}
        />
      </div>
    </div>
  );
}
