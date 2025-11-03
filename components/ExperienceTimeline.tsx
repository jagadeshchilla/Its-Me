'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Plus, 
  Minus,
  Bot,
  Network,
  Code,
  Globe,
  FlaskConical,
  BarChart3,
  Sparkles,
  Image,
  ExternalLink
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ExperienceItem {
  organization: string
  role: string
  duration: string
  location?: string
  description: string[]
  icon?: LucideIcon
  link?: string
}

const trainingsData: ExperienceItem[] = [
  {
    organization: 'ICT Academy, Lovely Professional University',
    role: 'Robotic Process Automation (RPA) Training',
    duration: 'Nov 2024',
    location: 'Phagwara, Punjab, India',
    description: [
      'Successfully completed a hands-on training program on Robotic Process Automation (RPA), organized under the Student Empowerment Program.',
      'Learned fundamentals of RPA, practical automation workflows, and implementation of RPA tools to streamline repetitive business processes.',
      'Strengthened automation skills and understanding of RPA\'s role in digital transformation.',
    ],
    icon: Bot,
  },
  {
    organization: 'Code Minutes',
    role: 'System Designs And Patterns Training',
    duration: 'June 2024 – July 2024',
    location: 'Phagwara, Punjab',
    description: [
      'Learned system design principles, including scalability, reliability, and performance optimization.',
      'Gained expertise in designing and architecting robust, efficient, and maintainable systems.',
      'Applied system design patterns to solve complex software architecture challenges.',
    ],
    icon: Network,
  },
  {
    organization: 'Code Minutes',
    role: 'Competitive Programming Training',
    duration: 'Jan 2024 – Feb 2024',
    location: 'Phagwara, Punjab',
    description: [
      'Acquired skills in competitive programming through practical problem-solving and algorithm design.',
      'Enhanced proficiency in coding and algorithmic thinking for complex computational challenges.',
      'Practiced data structures and algorithms to optimize code performance and efficiency.',
    ],
    icon: Code,
  },
  {
    organization: 'Techvanto Academy',
    role: 'Full Stack Web-Development Training',
    duration: 'June 2023 – July 2023',
    location: 'New Delhi, India',
    description: [
      'Gained hands-on experience in web application development with Node.js, including designing, implementing, and maintaining programs.',
      'Learned and applied HTML, CSS, JavaScript, React, APIs, and MongoDB for full-stack development.',
      'Built end-to-end web applications with frontend and backend integration.',
    ],
    icon: Globe,
  },
]

const internshipsData: ExperienceItem[] = [
  {
    organization: 'upGrad',
    role: 'Research Intern',
    duration: 'Jan 2025 – Apr 2025',
    location: 'Phagwara, Punjab, India',
    description: [
      'Collaborated with team on B. Tech capstone project at Lovely Professional University, developing an AI-based Endoscopic Image Enhancement system.',
      'Developed system to improve visual quality of endoscopic images for better diagnostic accuracy using deep learning techniques and advanced image processing algorithms.',
      'Created model that enhances low-contrast, noisy medical visuals in real-time, enabling clearer visualization of tissues and abnormalities during medical procedures.',
      'Demonstrated integration of medical imaging and AI for clinical support systems, utilizing Python, CNN, and LLM technologies.',
    ],
    icon: FlaskConical,
  },
  {
    organization: 'BOARD INFINITY',
    role: 'Data Science Intern',
    duration: 'Sep 2023 – Nov 2023',
    location: 'Remote',
    description: [
      'Developed predictive models for financial forecasting, churn prediction, and fraud detection, enhancing accuracy by 10%.',
      'Processed and reconciled large datasets using Python, Pandas, and SQL, prepared dashboards in Power BI & Tableau.',
      'Delivered end-to-end solutions from data cleaning to stakeholder reporting, enabling data-driven business decisions.',
    ],
    icon: BarChart3,
  },
]

const freelanceData: ExperienceItem[] = [
  {
    organization: 'Outlier.AI',
    role: 'AI Evaluator',
    duration: 'Nov 2024 – Jan 2025',
    location: 'Remote',
    description: [
      'Assessed 100+ AI-generated solutions for real-world coding tasks, ensuring correctness, efficiency, and prompt adherence.',
      'Reviewed Python and SQL outputs to improve generative AI performance across logic, readability, and relevance.',
      'Formulated diverse prompts testing algorithmic and contextual reasoning, enhancing model evaluation benchmarks.',
      'Delivered structured feedback, contributing to a ~25% reduction in hallucination and logical inconsistency in AI outputs.',
    ],
    icon: Sparkles,
  },
]

const projectsData: ExperienceItem[] = [
  {
    organization: 'Endoscopy Image Enhancement',
    role: 'AI-Powered Medical Image Enhancement Web Application',
    duration: '2024 - 2025',
    location: 'Deployed on Render',
    description: [
      'Developed an advanced medical image enhancement web application using deep learning models (SRCNN and UNet) for improved diagnostic visualization.',
      'Implemented real-time image and video enhancement capabilities with Flask backend, PyTorch models, and OpenCV for image processing.',
      'Built features including edge detection, frame capture from video streams, and real-time quality metrics (PSNR, SSIM) visualization.',
      'Deployed the application on Render with production-ready Flask server and integrated webcam support for live video processing.',
      'Tech Stack: Python, Flask, PyTorch, OpenCV, NumPy, HTML5, JavaScript.',
    ],
    icon: Image,
    link: 'https://github.com/jagadeshchilla/Endoscopy-Image-Enhancement',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
    },
  },
}

const ExperienceSection = ({ data, title, defaultExpanded = false }: { data: ExperienceItem[]; title: string; defaultExpanded?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="mb-4 md:mb-6">
      {/* Collapsible Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-lg md:rounded-xl border border-white/30 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center justify-between hover:bg-[rgba(255,255,255,0.2)] transition-all duration-200 cursor-pointer"
      >
        <span className="text-sm sm:text-base md:text-lg font-semibold text-white">{title}</span>
        {isExpanded ? (
          <Minus className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white flex-shrink-0" />
        ) : (
          <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white flex-shrink-0" />
        )}
      </button>

      {/* Collapsible Content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 md:mt-6"
        >
          <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-[rgba(255,255,255,0.3)]"></div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 md:space-y-12"
            >
              {data.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-white to-white/80 rounded-full border-4 border-[rgba(220,38,38,0.8)] shadow-lg z-10"></div>

                {/* Card */}
                  <div className="md:ml-16 w-full bg-[rgba(255,255,255,0.15)] backdrop-blur-xl rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[rgba(255,255,255,0.3)]">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="bg-[rgba(255,255,255,0.2)] p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0 flex items-center justify-center">
                        {item.icon ? (
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        ) : (
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        )}
                    </div>
                      <div className="flex-1 w-full min-w-0">
                        <div className="flex items-start sm:items-center gap-1.5 sm:gap-2 mb-1 md:mb-2 flex-wrap">
                          <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5 sm:mt-0" />
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white font-poppins break-words leading-tight">
                          {item.organization}
                        </h3>
                      </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 md:mb-3 flex-wrap">
                          <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white/60 flex-shrink-0" />
                          <p className="text-sm sm:text-base md:text-lg text-white font-semibold break-words">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>

                    <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/70 flex-wrap">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm md:text-base">{item.duration}</span>
                    </div>
                    {item.location && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-white/70 flex-wrap">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base break-words">{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description Bullets */}
                    <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                    {item.description.map((point, idx) => (
                      <li
                        key={idx}
                          className="flex items-start gap-2 sm:gap-2.5 md:gap-3 text-white/80 leading-relaxed"
                      >
                          <span className="text-white mt-0.5 sm:mt-1 md:mt-1.5 flex-shrink-0 text-xs sm:text-sm">•</span>
                          <span className="text-xs sm:text-sm md:text-base flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-white hover:text-white/90 text-xs sm:text-sm md:text-base font-semibold mt-4 sm:mt-5 md:mt-6 transition-colors underline underline-offset-2"
                    >
                      View on GitHub
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </motion.span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-poppins">
            Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Projects I've worked on and contributed to
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projectsData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group bg-[rgba(255,255,255,0.1)] backdrop-blur-xl rounded-2xl p-6 md:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-5">
                  <div className="bg-[rgba(255,255,255,0.15)] group-hover:bg-[rgba(255,255,255,0.25)] p-4 rounded-xl w-fit transition-all duration-300">
                    {item.icon ? (
                      <item.icon className="w-8 h-8 md:w-9 md:h-9 text-white" />
                    ) : (
                      <Briefcase className="w-8 h-8 md:w-9 md:h-9 text-white" />
                    )}
                  </div>
                </div>

                {/* Title and Role */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-poppins mb-2 break-words group-hover:text-white transition-colors">
                    {item.organization}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 font-medium break-words">
                    {item.role}
                  </p>
                </div>

                {/* Duration and Location */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm">
                    <Calendar className="w-4 h-4 text-white/60 flex-shrink-0" />
                    <span>{item.duration}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm">
                      <MapPin className="w-4 h-4 text-white/60 flex-shrink-0" />
                      <span className="break-words">{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {item.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-white/85 text-xs sm:text-sm leading-relaxed"
                    >
                      <span className="text-white mt-2 flex-shrink-0">•</span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Link Button */}
                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] text-white font-semibold text-sm md:text-base px-5 py-3 rounded-lg transition-all duration-300 border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] mt-auto"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ExperienceTimeline() {
  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="relative">
            <div className="space-y-4 md:space-y-6">
              <ExperienceSection data={trainingsData} title="Trainings" defaultExpanded={true} />
              <ExperienceSection data={freelanceData} title="Freelance" defaultExpanded={true} />
              <ExperienceSection data={internshipsData} title="Internships" defaultExpanded={true} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section - Separate with Cards */}
      <ProjectsSection />
    </>
  )
}

