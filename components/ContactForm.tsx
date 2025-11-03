'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[rgba(255,255,255,0.15)] backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-poppins">
        Send me a message
      </h3>

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-6 sm:py-8"
        >
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg font-semibold text-white mb-2">
            Message sent successfully!
          </p>
          <p className="text-sm sm:text-base text-white/80">
            I&apos;ll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-medium text-white/80 mb-1.5 sm:mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-[rgba(255,255,255,0.3)] focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all duration-300 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white placeholder:text-white/50"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-white/80 mb-1.5 sm:mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-[rgba(255,255,255,0.3)] focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all duration-300 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white placeholder:text-white/50"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs sm:text-sm font-medium text-white/80 mb-1.5 sm:mb-2"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-[rgba(255,255,255,0.3)] focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all duration-300 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white placeholder:text-white/50"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-medium text-white/80 mb-1.5 sm:mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-[rgba(255,255,255,0.3)] focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all duration-300 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white placeholder:text-white/50 resize-none"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-white to-white/90 text-[#dc2626] rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-bold"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}

