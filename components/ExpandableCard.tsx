'use client'

import { useState } from 'react'

interface ExpandableCardProps {
  icon: string
  title: string
  summary: React.ReactNode
  expanded: React.ReactNode
  links: React.ReactNode
}

export default function ExpandableCard({
  icon,
  title,
  summary,
  expanded,
  links,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="specialty-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      {summary}
      <button
        className="expand-btn"
        aria-label="Ver normativa aplicable"
        onClick={() => setIsOpen(o => !o)}
      >
        {isOpen ? '−' : '+'}
      </button>
      {isOpen && <div className="card-expanded">{expanded}</div>}
      {links}
    </div>
  )
}
