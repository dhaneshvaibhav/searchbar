import React from 'react'
import './SearchBar.css'

export default function SearchBar({ query, onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={`search-bar-container ${query ? 'active' : ''}`}>
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <div className="search-bar-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search AI Agents..."
            value={query}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
          />
          {query && (
            <button
              type="button"
              className="search-bar-clear"
              onClick={() => onSearch('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </form>
      {query && <div className="search-info">Search results for "{query}"</div>}
    </div>
  )
}
