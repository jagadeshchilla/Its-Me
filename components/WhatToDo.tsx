'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Sparkles, Network } from 'lucide-react'
import './WhatToDo.css'

const whatToDo = [
  {
    title: 'Machine Learning & AI',
    description: 'Building end-to-end ML models from data preprocessing to deployment, specializing in deep learning, neural networks, and artificial intelligence solutions.',
    icon: Brain,
    points: [
      'End-to-end ML model development from data preprocessing to deployment',
      'Deep learning and neural network architecture design',
      'Model optimization and performance tuning for production systems',
    ],
  },
  {
    title: 'MLOps',
    description: 'Setting up production-ready ML pipelines with CI/CD, containerization, automated model training workflows, and robust deployment infrastructure.',
    icon: Cog,
    points: [
      'CI/CD pipelines for automated model training and deployment',
      'Containerization with Docker and Kubernetes orchestration',
      'Monitoring and maintenance of production ML systems',
    ],
  },
  {
    title: 'Generative AI',
    description: 'Creating innovative applications using advanced generative models, text generation, image synthesis, and AI-driven content creation systems.',
    icon: Sparkles,
    points: [
      'Advanced generative models for text and image synthesis',
      'Custom AI-driven content creation systems',
      'Fine-tuning and customization of pre-trained models',
    ],
  },
  {
    title: 'RAG & Agentic AI & LLM',
    description: 'Developing sophisticated RAG (Retrieval-Augmented Generation) systems, autonomous AI agents, and Large Language Model applications for intelligent, context-aware solutions.',
    icon: Network,
    points: [
      'RAG systems for intelligent information retrieval and generation',
      'Autonomous AI agents with reasoning and decision-making capabilities',
      'Large Language Model integration and fine-tuning for domain-specific applications',
    ],
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

export default function WhatToDo() {
  return (
    <section className="whattodo-section py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="whattodo-header"
        >
          <h2 className="whattodo-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            What I Do
          </h2>
          <p className="whattodo-description text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI & ML services to transform your ideas into production-ready solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="whattodo-grid"
        >
          {whatToDo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="whattodo-service-card"
            >
              <div className="whattodo-card-front">
                <div className="whattodo-icon-container">
                  <item.icon className="whattodo-service-icon" />
                </div>
                <h3 className="whattodo-service-title">{item.title}</h3>
                <p className="whattodo-service-preview">{item.description}</p>
              </div>
              <div className="whattodo-card-overlay">
                <div className="whattodo-overlay-content">
                  <h3 className="whattodo-overlay-title">{item.title}</h3>
                  <ul className="whattodo-features-list">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="whattodo-feature-item">
                        <span className="whattodo-check-icon">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

