import React, {Component} from 'react';
import {Progress} from 'react-sweet-progress';
import './Test.css';

let count = 0; 
let percent;

class Test extends Component {
    state = {
      lapseMin: 10, 
      lapseSec: 0, 
      isRunning: false
    }

    setTimer = (setTime) => {
      clearInterval(this.timer);
      count = 0;
      this.setState({ 
        lapseMin: setTime, 
        lapseSec: 0, 
        isRunning: false 
      });
    }
      
    startTimer = () => {
      count+=1;
      this.setState(state => {
        if (state.isRunning) {
          clearInterval(this.timer);
        }
        else {
          const userMin = count == 1 ? this.state.lapseMin - 1 : this.state.lapseMin;
          const userSec = this.state.lapseSec == 0 ? 59 : this.state.lapseSec;
          const startTime = Date.now();
          this.timer = setInterval(() => {
            if (this.state.lapseMin === 0) ;
            this.setState({
              lapseMin: userMin - (Math.floor((Date.now() - startTime)/1000/60)%60),
              lapseSec: userSec - (Math.floor((Date.now() - startTime) /1000)%60),
            })
          })
        }
        return { isRunning: !state.isRunning }
      })
    }
      
    clearTimer = () => { 
      clearInterval(this.timer)
      this.setState({ lapseMin: 0, lapseSec: 0, isRunning: false })
    }
    
    componentWillUnmount() {
      clearInterval(this.timer)
    }
      
    render() {
      const {lapseMin, lapseSec, isRunning} = this.state;
      return (
        <div className="container">
          <div className="body">
            <div id="Timer" className="gradient-border ">
              <div className="row">
                <div className="col text">
                  <h1 className="gradient-border">{this.props.title}</h1>
                  <label className="clock">{lapseMin < 10 ? '0' : ''}{lapseMin}:{lapseSec < 10 ? '0' : ''}{lapseSec}</label>
                    <Progress
                      percent={this.timer}
                      status="success"
                    />
                </div>
              </div>
            </div> 
          </div>
          <div className="row timerControls">
            <div className="col">
              <button className="btn btn-light" onClick={this.startTimer}>{isRunning && lapseMin != 0 ? "Stop" : "Start"}</button>
              <button className="btn btn-light" onClick={this.clearTimer}>Clear</button>
            </div>
          </div>
          <div className="row timerControls">
            <div className="col">
                <div className="workMode">
                  <p>Work Mode:</p>
                  <button className="btn btn-light" id="timecard" onClick={() => this.setTimer(30)}>30</button>
                  <button className="btn btn-light" id="timecard" onClick={() => this.setTimer(45)}>45</button>
                  <button className="btn btn-light" id="timecard" onClick={() => this.setTimer(60)}>60</button>
                </div>
                <div className="playMode">
                  <p>Play Mode:</p>
                  <button className="btn btn-light" id="timecard" onClick={() => this.setTimer(5)}>5</button>
                  <button className="btn btn-light" id="timecard" onClick={() => this.setTimer(10)}>10</button>
                  <button className="btn btn-light" id="timecard" onClick={() => this.setTimer(15)}>15</button>
                </div>
            </div>
          </div>
        </div>
      );
    }
};

export default Test;