'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import './TestimonialSection.css'

interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
  rating?: number
}

const testimonials: Testimonial[] = [
  {
    quote: 'Exceptional work on our ML pipeline! The attention to detail and production-ready solutions exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'Lead Data Scientist',
    company: 'TechCorp AI',
    rating: 5,
  },
  {
    quote: 'Jagadesh delivered a sophisticated RAG system that transformed how we handle document queries. Highly professional and skilled.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateAI',
    rating: 5,
  },
  {
    quote: 'Outstanding expertise in MLOps and AI agent development. The project was delivered on time and exceeded all requirements.',
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'DataVenture',
    rating: 5,
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

export default function TestimonialSection() {
  return (
    <section className="testimonial-section py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonial-header"
        >
          <div className="testimonial-badge">
            <Quote className="testimonial-badge-icon" />
            <span>Testimonials</span>
          </div>
          <h2 className="testimonial-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            What People Say
          </h2>
          <p className="testimonial-description text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Feedback from clients, collaborators, and peers who have worked with me
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="testimonial-grid"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="testimonial-card"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="testimonial-quote-icon">
                <Quote className="quote-svg" />
              </div>
              
              {testimonial.rating && (
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
              )}
              
              <p className="testimonial-quote">{testimonial.quote}</p>
              
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{testimonial.author}</h4>
                  <p className="testimonial-author-role">
                    {testimonial.role}
                    {testimonial.company && (
                      <span className="testimonial-company"> • {testimonial.company}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

