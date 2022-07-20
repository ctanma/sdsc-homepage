import React from 'react';
import '../../App.css'
import HomePage from '../HomePage'
import {Link} from "react-router-dom";
import "../Home.css";

function Home() {
    return (
        <div className ='homepage-container'>
        <div className = 'welcome-sign'>
          <h1>Welcome, User!</h1>
        </div>
        <div className = 'generalConnections'>
          <div className = 'myconnections'>
            <div className = 'cntTitle'><h1>My Connections</h1></div>
            <div className = 'mycntTop'>Connection 1</div>
            <div className = 'mycnt'>Connection 2</div>
            <div className = 'mycnt'>Connection 3</div>
            <div className = 'mycnt'>Connection 4</div>
          </div>
          <div className = 'new-connections'>
          <div className = 'reqTitle'><h1>Connection Requests</h1></div>
            <div className = 'cntReq'>
                <div className = 'reqCnt'>Connection Request 1</div>
                <div className = 'reqCnt'>Connection Request 2</div>
                
            </div>
            <h1>Recommended Connections</h1>
            <div className = 'recCnt'>
              <div className= "con">Recommended Connection 1</div>
              <div className= "con">Recommended Connection 2</div>
              <div className= "con">Recommended Connection 3</div>
              <div className= "con">Recommended Connection 4</div>
              <div className= "con">Recommended Connection 5</div>
              <div className= "con">Recommended Connection 6</div>
            </div>
          </div>
        </div>
    </div>
    );
  }

export default Home;