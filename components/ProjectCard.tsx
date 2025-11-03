'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Brain, BookOpen, Bot, Workflow, Globe, FileText, Zap } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  caseStudyUrl?: string
  thumbnail?: string
  category?: string
}

// Map category to icon
const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Gen AI': Brain,
  'AI/ML': Brain,
  'RAGs': BookOpen,
  'Agents': Bot,
  'LLMs': Brain,
  'MLOps': Workflow,
  'Web Dev': Globe,
  'Research': FileText,
  'Open Source': Code2,
}

const DefaultCategoryIcon = Code2

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  category,
}: ProjectCardProps) {
  const CategoryIcon = category ? (categoryIconMap[category] || DefaultCategoryIcon) : DefaultCategoryIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="featured-project-thumbnail"
    >
      <motion.a
        href={githubUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-thumbnail-link"
        whileHover={{ y: -4 }}
      >
        <div className="featured-thumbnail-content">
          <div className="featured-thumbnail-header">
            <div className="featured-thumbnail-icon">
              <CategoryIcon className="featured-thumbnail-icon-svg" />
            </div>
            {category && (
              <span className="featured-thumbnail-category">{category.toUpperCase()}</span>
            )}
          </div>
          <h4 className="featured-thumbnail-title">{title}</h4>
          <p className="featured-thumbnail-description">{description}</p>
          <div className="featured-thumbnail-tech">
            {techStack.slice(0, 3).map((tech, techIndex) => (
              <span key={techIndex} className="featured-thumbnail-tech-item">
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="featured-thumbnail-tech-more">+{techStack.length - 3}</span>
            )}
          </div>
          <div className="featured-thumbnail-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 'auto', paddingTop: '0.75rem', gap: '0.5rem', flexWrap: 'wrap' }}>
            {demoUrl ? (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-thumbnail-demo-button"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.375rem 0.75rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <ExternalLink className="w-3 h-3" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 'inherit' }}>View Demo</span>
              </motion.a>
            ) : (
              <span style={{
                fontSize: '0.7rem',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
                fontStyle: 'italic',
              }}>
                No Demo
              </span>
            )}
            <motion.a
              href={githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              style={{ flexShrink: 0 }}
            >
              <Github className="featured-thumbnail-footer-icon" style={{ width: '1rem', height: '1rem' }} />
            </motion.a>
          </div>
        </div>
      </motion.a>
    </motion.div>
  )
}

