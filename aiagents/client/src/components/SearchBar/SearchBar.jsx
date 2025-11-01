import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ query, onSearch, onSubmit, suggestions }) {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleChange = (e) => {
    onSearch(e.target.value)
    setShowSuggestions(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (agentName) => {
    onSearch(agentName)
    onSubmit(agentName)
    setShowSuggestions(false)
  }

  const handleClear = () => {
    onSearch('')
    setShowSuggestions(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className={`search-bar-container ${query ? 'active' : ''}`}>
      <div className={`search-bar-logo ${query ? 'hidden' : ''}`}>Explorer</div>
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <div className="search-bar-wrapper">
          <div className="search-bar-input-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search AI agents by name, skill, or specialty..."
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
              autoFocus
            />
            {query && (
              <button
                type="button"
                className="search-bar-clear"
                onClick={handleClear}
                aria-label="Clear search"
                title="Clear"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((agent) => (
                <div
                  key={agent.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(agent.name)}
                  role="option"
                  aria-selected="false"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <div className="suggestion-content">
                    <div className="suggestion-name">{agent.name}</div>
                    <div className="suggestion-specialty">{agent.specialty}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
      {query && <div className="search-info">Press Enter to search</div>}
    </div>
  )
}
