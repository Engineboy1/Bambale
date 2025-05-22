import React, { useState } from 'react';

function ChallengeScreen({ userProgress, setUserProgress, awardBadges }) {
  // Football supporter cybersecurity challenges
  const challenges = [
    {
      question: "You see a link offering free tickets to the big match. What should you do?",
      answers: [
        "Click the link and enter your details",
        "Ignore it or verify with the official club website",
        "Share it with friends",
        "Reply with your bank info"
      ],
      correct: 1,
    },
    {
      question: "A social media account claims to be your club and asks for your password to join a fan group. What do you do?",
      answers: [
        "Give them your password",
        "Report the account as suspicious",
        "Ask your friends if it's real",
        "Ignore and block"
      ],
      correct: 1,
    },
    {
      question: "You receive an email saying you won a signed jersey, but it asks for your login details. What should you do?",
      answers: [
        "Reply with your login details",
        "Click the link and log in",
        "Mark it as spam or phishing",
        "Forward to your friends"
      ],
      correct: 2,
    },
    {
      question: "What is a strong password for your football club account?",
      answers: [
        "football123",
        "YourTeamName2024",
        "P@ssw0rd!&7xZ",
        "123456"
      ],
      correct: 2,
    },
    {
      question: "How can you check if a ticket offer is legitimate?",
      answers: [
        "Trust any link on social media",
        "Only buy from the official club website",
        "Click the first Google result",
        "Ask strangers online"
      ],
      correct: 1,
    },
  ];

  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === challenges[currentChallenge].correct) {
      setScore((prev) => prev + 1);
      setUserProgress((prev) => ({
        ...prev,
        challengesCompleted: prev.challengesCompleted + 1,
      }));
    }
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge((prev) => prev + 1);
    }
    awardBadges();
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.question}>{challenges[currentChallenge].question}</h2>
        <div style={styles.answers}>
          {challenges[currentChallenge].answers.map((answer, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => handleAnswer(index)}
            >
              {answer}
            </button>
          ))}
        </div>
        <div style={styles.score}>Score: {score}</div>
        <div style={styles.progress}>
          Challenges Completed: {userProgress.challengesCompleted}
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  },
  container: {
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
    padding: '40px 32px',
    maxWidth: 420,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1.5px solid #e0e7ef',
  },
  question: {
    fontSize: 22,
    fontWeight: 700,
    color: '#1e3c72',
    marginBottom: 28,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  answers: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginBottom: 32,
  },
  button: {
    background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 0',
    fontSize: 17,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.1s, box-shadow 0.1s',
    boxShadow: '0 2px 8px rgba(30,60,114,0.08)',
    outline: 'none',
  },
  score: {
    fontSize: 20,
    fontWeight: 600,
    color: '#185a9d',
    marginTop: 10,
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  progress: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
    fontWeight: 500,
  },
};

export default ChallengeScreen;