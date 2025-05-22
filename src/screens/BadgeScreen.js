import React from 'react';

const badges = ['Badge 1', 'Badge 2', 'Badge 3'];

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
  badge: {
    marginBottom: 20,
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 10,
    minWidth: 200,
    textAlign: 'center',
  },
  badgeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

const BadgeScreen = ({ userProgress }) => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Badges</div>
      {badges.map((badge, index) => (
        <div key={index} style={styles.badge}>
          <span style={styles.badgeName}>{badge}</span>
        </div>
      ))}
    </div>
  );
};

export default BadgeScreen;