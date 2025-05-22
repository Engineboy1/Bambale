import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
  <div style={{ textAlign: 'center', marginTop: 40 }}>
    <h1>CyberSecurity Awareness for Football Fans</h1>
    <p>
      Welcome, football supporters! Test your knowledge and learn how to stay safe online while supporting your favorite team.
    </p>
    <div style={{ marginTop: 20 }}>
      <Link to="/challenge" style={{ margin: 10 }}>Start Challenge</Link>
      <Link to="/leaderboard" style={{ margin: 10 }}>Leaderboard</Link>
      <Link to="/badges" style={{ margin: 10 }}>Badges</Link>
    </div>
  </div>
);

export default HomeScreen;