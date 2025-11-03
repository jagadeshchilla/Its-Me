'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import Image from 'next/image'
import './BlogSection.css'

interface Blog {
  title: string
  description: string
  url: string
  thumbnail: string
  category: string
}

const blogs: Blog[] = [
  {
    title: 'Agentic AI Tutorials',
    description: 'Comprehensive tutorials covering LangGraph basics, advanced workflows, RAG systems, and agentic architectures. Learn to build stateful AI agents with practical examples.',
    url: 'https://jagadeshchilla.github.io/AgenticAi/introduction.html',
    thumbnail: '/images/agenticAi.png',
    category: 'AI & Agents',
  },
  {
    title: 'RAG Tutorial Collection',
    description: 'Complete guide to building Retrieval-Augmented Generation systems. Covers data ingestion, vector databases, embeddings, advanced chunking, and multi-modal RAG implementations.',
    url: 'https://jagadeshchilla.github.io/RAG/README.html',
    thumbnail: '/images/rag.png',
    category: 'RAG & Vector DB',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function BlogSection() {
  return (
    <section className="blog-section py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blog-header"
        >
          <div className="blog-badge">
            <BookOpen className="blog-badge-icon" />
            <span>Tutorials & Blogs</span>
          </div>
          <h2 className="blog-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Tutorial Collections
          </h2>
          <p className="blog-description text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning resources covering AI agents, RAG systems, and modern LLM architectures with hands-on examples
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="blog-grid"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="blog-card"
            >
              <motion.a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card-link"
                whileHover={{ y: -8 }}
              >
                <div className="blog-thumbnail-wrapper">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="blog-thumbnail"
                  />
                  <div className="blog-overlay">
                    <ExternalLink className="blog-external-icon" />
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-category-badge">
                    <span>{blog.category}</span>
                  </div>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-description">{blog.description}</p>
                  <div className="blog-action">
                    <span className="blog-action-text">Read Tutorials</span>
                    <ExternalLink className="blog-action-icon" />
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

