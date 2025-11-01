import React from 'react'
import './AgentResults.css'

export default function AgentResults({ agents, query }) {
  return (
    <div className="agent-results-container">
      <div className="agent-results-header">
        <p>
          <span className="result-count">{agents.length}</span> agent{agents.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {agents.length > 0 ? (
        <div className="agent-results-list">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-result-item">
              <div className="agent-result-top">
                <div className="agent-result-header">
                  <h3 className="agent-name">{agent.name}</h3>
                  <span className="agent-specialty">{agent.specialty}</span>
                </div>
                <div className="agent-quick-stats">
                  <div className="quick-stat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="stat-value">{agent.rating}</span>
                  </div>
                  <div className="quick-stat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="stat-value">{agent.users.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <p className="agent-description">{agent.description}</p>

              <div className="agent-footer">
                <div className="agent-expertise-section">
                  <div className="expertise-header">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    <span>Expertise</span>
                  </div>
                  <div className="expertise-tags-container">
                    {agent.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="agent-explore-btn">
                  Explore Agent
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>No AI agents found matching "<strong>{query}</strong>"</p>
          <p className="no-results-hint">Try different keywords or skills</p>
        </div>
      )}
    </div>
  )
}
