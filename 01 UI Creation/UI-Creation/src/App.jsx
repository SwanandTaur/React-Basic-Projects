import React from "react";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <nav>
        <h1 className="left">Horizon Courts</h1>
        <ul className="center">
          <li>About Us</li>
          <li>Sevices</li>
          <li>Courts</li>
          <li>Events</li>
          <li>Contacts</li>
        </ul>
        <button>Book Now</button>
      </nav>
      <div className="main">
        <h1>Unleash your inner champion today. All in one place.</h1>
        <p>
          Join the ultimate tennis experience - where passion meets
          performance.and every swing brings you closer to victory.
        </p>
        <button>Start your own journey</button>
      </div>
      <div className="about">
        <div className="top">
          <div className="head">About Horizon</div>
          <div className="para">
            At Horizon we don't just play tennis - We live it since 2021. Our
            club has been a home for players of all levels, from egar beginners
            to seasoned pros.
          </div>
        </div>
        <div className="center">
          <div className="card">
            Proffessional hard courts with tournament-grade lighting climate control play in perfect conditions, in any season. 
            <div className="gameMode">
              Game Mode
            </div>
          </div>
          <div className="card">
           <h4>Private & Group Lessons</h4>
          </div>
          <div className="card">
            <h1>100+</h1>
            <h3>Pro Coaches</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dignissimos, delectus ipsam officia ex eligendi?</p>
            <div className="record">
              <div className="begginer">
                <h4>Begginer</h4>
                <div className="count">55</div>
              </div>
              <div className="intermediate">
                <h4>Intermediate</h4>
                <div className="count">40</div>
              </div>
              <div className="advanced">
                <h4>Advanced</h4>
                <div className="count">35</div>
              </div>
            </div>
          </div>
        </div>
        <div className="para">A few more facts about us in numbers</div>
        <div className="calculations">
          <div className="hours">
            <div className="num">12 000+</div>
            <div className="title">Hours of plays</div>
          </div>
          <div className="rate">
            <div className="num">89%</div>
            <div className="title">Player literation Rate</div>
          </div>
          <div className="active">
            <div className="num">1,200+</div>
            <div className="title">Hours of plays</div>
          </div>
          <div className="tournaments">
            <div className="num">12 000+</div>
            <div className="title">Tournaments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
