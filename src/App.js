import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import BadgeScreen from './screens/BadgeScreen';
import { badges } from './badges';

// Global style for the app
const appBackground = {
  minHeight: '100vh',
  minWidth: '100vw',
  background: 'linear-gradient(135deg,rgb(2, 17, 104) 0%,rgb(136, 175, 214) 100%)',
  fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 0,
  margin: 0,
};

function App() {
  const [userProgress, setUserProgress] = useState({
    challengesCompleted: 0,
    phishingQuestionsAnswered: 0,
    passwordQuestionsAnswered: 0,
    badges: [],
  });

  const awardBadges = () => {
    badges.forEach((badge) => {
      if (
        (badge.id === 1 && userProgress.challengesCompleted >= badge.requirement) ||
        (badge.id === 2 && userProgress.phishingQuestionsAnswered >= badge.requirement) ||
        (badge.id === 3 && userProgress.passwordQuestionsAnswered >= badge.requirement)
      ) {
        if (!userProgress.badges.includes(badge.name)) {
          setUserProgress((prevProgress) => ({
            ...prevProgress,
            badges: [...prevProgress.badges, badge.name],
          }));
        }
      }
    });
  };

  return (
    <div style={appBackground}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/challenge"
            element={
              <ChallengeScreen
                userProgress={userProgress}
                setUserProgress={setUserProgress}
                awardBadges={awardBadges}
              />
            }
          />
          <Route path="/leaderboard" element={<LeaderboardScreen />} />
          <Route
            path="/badges"
            element={<BadgeScreen userProgress={userProgress} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;