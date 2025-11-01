import React from 'react'
import './AgentResults.css'

export default function AgentResults({ agents, query }) {
  return (
    <div className="agent-results-container">
      <div className="agent-results-header">
        <p>About {agents.length} results</p>
      </div>

      {agents.length > 0 ? (
        <div className="agent-results-list">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-result-item">
              <div className="agent-result-header">
                <h3 className="agent-name">{agent.name}</h3>
                <span className="agent-specialty">{agent.specialty}</span>
              </div>
              <p className="agent-description">{agent.description}</p>
              <div className="agent-meta">
                <div className="agent-expertise">
                  <strong>Expertise:</strong>
                  <div className="expertise-tags">
                    {agent.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="agent-stats">
                  <span className="agent-rating">⭐ {agent.rating}</span>
                  <span className="agent-users">{agent.users.toLocaleString()} users</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No AI Agents found matching "{query}"</p>
          <p>Try searching for different keywords or skills.</p>
        </div>
      )}
    </div>
  )
}
