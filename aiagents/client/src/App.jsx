import React, { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import AgentResults from './components/AgentResults/AgentResults'
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const [agents] = useState([
    {
      id: 1,
      name: 'CodeAssistant AI',
      specialty: 'Code Generation & Debugging',
      description: 'Advanced AI agent specialized in code generation, debugging, and optimization across multiple programming languages.',
      expertise: ['Python', 'JavaScript', 'Java', 'C++'],
      rating: 4.8,
      users: 5200,
    },
    {
      id: 2,
      name: 'DataMiner Pro',
      specialty: 'Data Analysis',
      description: 'Intelligent agent for data processing, analytics, and creating insightful visualizations from complex datasets.',
      expertise: ['Machine Learning', 'Statistics', 'SQL', 'Analysis'],
      rating: 4.7,
      users: 3100,
    },
    {
      id: 3,
      name: 'VoiceTranslator',
      specialty: 'Language Translation',
      description: 'Real-time multilingual translation agent supporting 100+ languages with context-aware capabilities.',
      expertise: ['Translation', 'NLP', 'Linguistics', 'Localization'],
      rating: 4.9,
      users: 6100,
    },
  ])

  // Suggestions for dropdown while typing
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return agents
      .filter(
        (agent) =>
          agent.name.toLowerCase().includes(query) ||
          agent.specialty.toLowerCase().includes(query) ||
          agent.expertise.some((skill) => skill.toLowerCase().includes(query))
      )
      .slice(0, 5) // Show only top 5 suggestions
  }, [searchQuery, agents])

  // Full results only when submitted
  const filteredAgents = useMemo(() => {
    if (!submittedQuery.trim()) return []

    const query = submittedQuery.toLowerCase()
    return agents
      .filter(
        (agent) =>
          agent.name.toLowerCase().includes(query) ||
          agent.specialty.toLowerCase().includes(query) ||
          agent.description.toLowerCase().includes(query) ||
          agent.expertise.some((skill) => skill.toLowerCase().includes(query))
      )
      .sort((a, b) => b.rating - a.rating)
  }, [submittedQuery, agents])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleSubmit = (query) => {
    setSubmittedQuery(query)
  }

  return (
    <div className={`app ${searchQuery ? 'search-active' : ''}`}>
      <SearchBar
        query={searchQuery}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
        suggestions={suggestions}
      />
      {submittedQuery.trim() && <AgentResults agents={filteredAgents} query={submittedQuery} />}
    </div>
  )
}
