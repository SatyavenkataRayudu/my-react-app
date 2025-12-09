import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>🚀 Auto-Deployed React App</h1>
          <p className="subtitle">Powered by AWS CodePipeline & CodeBuild</p>
          
          <div className="info-box">
            <h2>✨ Features</h2>
            <ul>
              <li>Automatic deployment from GitHub</li>
              <li>Built with CodeBuild</li>
              <li>Hosted on S3</li>
              <li>Updates in minutes after push</li>
            </ul>
          </div>

          <div className="version">
            <p>Version 1.0.0</p>
            <p className="small">Push to GitHub to see automatic updates!</p>
          </div>

          <div className="workflow">
            <p className="workflow-title">Deployment Workflow:</p>
            <div className="workflow-steps">
              <span className="step">GitHub Push</span>
              <span className="arrow">→</span>
              <span className="step">CodePipeline</span>
              <span className="arrow">→</span>
              <span className="step">CodeBuild</span>
              <span className="arrow">→</span>
              <span className="step">S3 Deploy</span>
              <span className="arrow">→</span>
              <span className="step">Live! 🎉</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
