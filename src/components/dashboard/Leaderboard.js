import React from 'react';

// Mock leaderboard data
const leaderboardData = [
  { name: 'Eco Warrior', score: 4500 },
  { name: 'Green Guardian', score: 4200 },
  { name: 'Planet Protector', score: 3900 },
  { name: 'You', score: 3750, isCurrentUser: true },
  { name: 'Eco Friend', score: 3600 }
];

export default function Leaderboard() {
  return (
    <div className="card">
      <h3>Eco Leaderboard</h3>
      <div className="leaderboard">
        {leaderboardData.map((user, index) => (
          <div 
            key={index} 
            className={`leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}`}
          >
            <span className="rank">#{index + 1}</span>
            <span className="name">{user.name}</span>
            <span className="score">{user.score} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}