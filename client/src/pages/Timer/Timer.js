import React from "react";
import Test from "../../components/Test";
import "./Timer.css";

const Timer = props => (
  <div className="container-fluid">
    <div className="row intro">
      <div className="col">
        <span>We understand you might feel overwhelmed with your task, regardless of how big or small it is!</span>
        <span> So here is a simple way to help you complete your task!</span>
        <span> Breaking down your tasks into smaller task and allowing yourself a break between each task can help you take small steps to success!</span>
        <span> Let's give it a try!</span>
      </div>
    </div>
    <Test/>
  </div>
);

export default Timer;