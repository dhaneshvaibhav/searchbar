import React, { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import AgentResults from './components/AgentResults/AgentResults'
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [agents] = useState([
    {
      id: 1,
      name: 'CodeAssistant AI',
      specialty: 'Code Generation & Debugging',
      description:
        'Advanced AI agent specialized in code generation, debugging, and optimization. Supports 50+ programming languages.',
      expertise: ['Python', 'JavaScript', 'Java', 'C++', 'Go'],
      rating: 4.8,
      users: 5200,
    },
    {
      id: 2,
      name: 'DataMiner Pro',
      specialty: 'Data Analysis & Visualization',
      description: 'Intelligent agent for data processing, analytics, and creating insightful visualizations from complex datasets.',
      expertise: ['Data Analysis', 'Machine Learning', 'Statistics', 'SQL'],
      rating: 4.7,
      users: 3100,
    },
    {
      id: 3,
      name: 'ContentCreator AI',
      specialty: 'Content Generation',
      description: 'Specialized in creating engaging content for blogs, social media, and marketing campaigns with SEO optimization.',
      expertise: ['Copywriting', 'SEO', 'Social Media', 'Marketing'],
      rating: 4.6,
      users: 2800,
    },
    {
      id: 4,
      name: 'VoiceTranslator',
      specialty: 'Language Translation',
      description: 'Real-time multilingual translation agent supporting 100+ languages with context awareness.',
      expertise: ['Translation', 'NLP', 'Linguistics', 'Localization'],
      rating: 4.9,
      users: 6100,
    },
    {
      id: 5,
      name: 'ImageAnalyzer',
      specialty: 'Computer Vision',
      description: 'Advanced image recognition and analysis agent for object detection, classification, and scene understanding.',
      expertise: ['Computer Vision', 'Image Processing', 'Deep Learning', 'OCR'],
      rating: 4.7,
      users: 4200,
    },
    {
      id: 6,
      name: 'SecurityGuard',
      specialty: 'Cybersecurity',
      description: 'Expert agent for vulnerability detection, threat analysis, and security best practices recommendations.',
      expertise: ['Cybersecurity', 'Penetration Testing', 'Risk Assessment', 'Compliance'],
      rating: 4.8,
      users: 3900,
    },
  ])

  const filteredAgents = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    return agents
      .filter(
        (agent) =>
          agent.name.toLowerCase().includes(query) ||
          agent.specialty.toLowerCase().includes(query) ||
          agent.description.toLowerCase().includes(query) ||
          agent.expertise.some((skill) => skill.toLowerCase().includes(query))
      )
      .sort((a, b) => b.rating - a.rating)
  }, [searchQuery, agents])

  return (
    <div className="app">
      <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      {searchQuery.trim() && <AgentResults agents={filteredAgents} query={searchQuery} />}
    </div>
  )
}
