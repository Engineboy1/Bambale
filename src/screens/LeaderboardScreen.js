import React from 'react';

const leaderboard = [
  { name: 'User 1', score: 10, progress: 50 },
  { name: 'User 2', score: 8, progress: 40 },
  { name: 'User 3', score: 6, progress: 30 },
];

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  user: {
    marginBottom: 20,
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 10,
    minWidth: 200,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 16,
    color: '#666',
  },
  progress: {
    fontSize: 16,
    color: '#666',
  },
};

const LeaderboardScreen = () => (
  <div style={styles.container}>
    <div style={styles.title}>Leaderboard</div>
    {leaderboard.map((user, index) => (
      <div key={index} style={styles.user}>
        <div style={styles.name}>{user.name}</div>
        <div style={styles.score}>Score: {user.score}</div>
        <div style={styles.progress}>Progress: {user.progress}%</div>
      </div>
    ))}
  </div>
);

export default LeaderboardScreen;