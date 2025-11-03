'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Newspaper, Shield, Bot, BookOpen, Search, FileEdit, Database, FileText, Apple, Code2, Brain, Cloud, Box, Layers, Zap, Cpu, Server, Network, FileCode, Code, Terminal, Workflow } from 'lucide-react'
import { 
  SiPython, 
  SiDocker, 
  SiAmazon,
  SiFastapi, 
  SiStreamlit,
  SiOpenai,
  SiPostgresql,
  SiMongodb,
  SiGoogle,
  SiGooglechrome,
  SiGit,
  SiNodedotjs,
  SiMlflow,
  SiApacheairflow,
  SiGithubactions,
  SiTensorflow,
  SiHuggingface,
  SiJupyter,
  SiGrafana,
  SiKeras,
  SiAwslambda,
  SiAmazonrds,
  SiAmazonec2,
  SiAmazons3,
  SiScikitlearn,
  SiTerraform,
  SiKubernetes,
  SiPrometheus,
  SiRedis
} from 'react-icons/si'
import './FeaturedProject.css'

interface FeaturedProject {
  title: string
  description: string
  githubUrl: string
  demoUrl?: string
  technologies: string[]
  category: string
  icon: React.ComponentType<{ className?: string }>
}

// Map technology names to unique icons
const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Core Languages & Frameworks
  'Python': SiPython,
  'FastAPI': SiFastapi,
  'Streamlit': SiStreamlit,
  
  // Cloud & Infrastructure
  'AWS': SiAmazon,
  'Azure': Cloud, // Using Cloud icon from lucide
  'Docker': SiDocker,
  'EC2': SiAmazonec2,
  'S3': SiAmazons3,
  'SageMaker': Brain, // ML/AI service
  'RDS': SiAmazonrds,
  'ECR': Box, // Container registry
  'Bedrock': Cpu, // AI bedrock service
  'Elastic Beanstalk': Server, // Deployment service
  'Lambda': SiAwslambda,
  
  // MLOps Tools
  'MLflow': SiMlflow,
  'MLOps': Workflow, // Workflow/pipeline icon
  'DVC': SiGit,
  'Airflow': SiApacheairflow,
  'Apache Airflow': SiApacheairflow,
  'Dagshub': Network, // Platform/network icon
  'GitHub Actions': SiGithubactions,
  'CI/CD': Box, // Continuous deployment icon
  
  // ML/AI Libraries
  'TensorFlow': SiTensorflow,
  'Keras': SiKeras,
  'Hugging Face': SiHuggingface,
  'Transformers': Zap, // Transformer model layers
  'scikit-learn': SiScikitlearn,
  
  // AI/LLM Tools
  'LangGraph': Network, // Graph-based workflow
  'LangChain': Terminal, // Chain/terminal icon
  'Groq': Cpu, // Fast processor/compute icon
  'RAG': BookOpen, // Retrieval-augmented generation
  'LLM': Brain, // Large language model
  'OpenAI': SiOpenai,
  
  // Databases
  'SQL': Code, // SQL code icon
  'Database': Database,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Vector DB': SiRedis, // Vector store similar to Redis
  'Vector Search': Zap, // Fast vector search computation
  
  // Other Tools
  'Jupyter': SiJupyter,
  'Grafana': SiGrafana,
  'Tavily': SiGoogle,
  'Search': Search, // Search icon from lucide
  'SEO': SiGooglechrome,
  'Git': SiGit,
  'GitHub': SiGithubactions,
  
  // Generic/AI Categories - using unique lucide icons
  'Multi-Agent': Network, // Network of agents
  'NLP': FileText, // Natural language processing
  'AI Writing': FileEdit, // Writing/content
  'Content Generation': Newspaper, // Content creation
  'Automation': Terminal, // Automation script
  'Resume Parsing': FileText, // Document parsing
  'ATS': Database, // Application tracking system
  'AI Analysis': Cpu, // AI analysis/computation
  'AI': Star, // General AI
  'CrewAI': Bot, // AI agent framework
  'Nutrition': Apple, // Health/nutrition
  'Health Tech': Shield, // Health technology
  'Recommendation': Layers, // Recommendation system
}

// Fallback icon for unmapped technologies
const DefaultTechIcon = Code2

const featuredProjects: FeaturedProject[] = [
  {
    title: 'AI News Summarizer',
    description: 'Intelligent AI-powered application built with LangGraph providing news summarization and chatbot capabilities. Features stateful agentic workflows with basic chatbot, web-enhanced conversations using Tavily, and automated AI news summarization (daily/weekly/monthly/yearly) using Groq LLM.',
    githubUrl: 'https://github.com/jagadeshchilla/Agentic-Chatbot',
    demoUrl: 'https://huggingface.co/spaces/chillajagadesh68/ai-news-summarizer',
    technologies: ['LangGraph', 'LangChain', 'Python', 'Groq', 'Streamlit', 'Tavily', 'Hugging Face'],
    category: 'AI Agents & News',
    icon: Newspaper,
  },
  {
    title: 'Phishing Detection System',
    description: 'Production-ready ML pipeline for phishing detection with CI/CD, Docker containerization, and automated deployment on AWS.',
    githubUrl: 'https://github.com/jagadeshchilla/phishing-detecting',
    technologies: ['Python', 'FastAPI', 'MLflow', 'Docker', 'AWS', 'MLOps', 'CI/CD', 'scikit-learn'],
    category: 'MLOps & Security',
    icon: Shield,
  },
  {
    title: 'Multi AI Agent CrewAI',
    description: 'Advanced multi-agent AI system using CrewAI framework for collaborative task execution and autonomous agent orchestration.',
    githubUrl: 'https://github.com/jagadeshchilla/Multi_AIAgent_Crewai',
    technologies: ['Python', 'CrewAI', 'LLM', 'Multi-Agent', 'LangChain', 'OpenAI'],
    category: 'AI Agents',
    icon: Bot,
  },
  {
    title: 'RAG Document Q&A',
    description: 'Sophisticated RAG system for intelligent document querying with context-aware responses and advanced retrieval mechanisms.',
    githubUrl: 'https://github.com/jagadeshchilla/RAG-Document-Q-A2',
    technologies: ['RAG', 'LangChain', 'Python', 'Vector DB', 'NLP', 'Hugging Face'],
    category: 'RAG Systems',
    icon: BookOpen,
  },
  {
    title: 'RAG Search Agent',
    description: 'Advanced search agent powered by RAG technology for intelligent information retrieval and context-aware search results.',
    githubUrl: 'https://github.com/jagadeshchilla/RAG-Search-Agent',
    technologies: ['RAG', 'LangChain', 'Python', 'Vector Search', 'NLP', 'MongoDB'],
    category: 'Search AI',
    icon: Search,
  },
  {
    title: 'Blog Generator Agent',
    description: 'Autonomous AI agent for automated blog content generation with research, writing, and SEO optimization capabilities.',
    githubUrl: 'https://github.com/jagadeshchilla/Blog-Generator-Agent',
    technologies: ['AI Writing', 'Content Generation', 'SEO', 'Automation'],
    category: 'Content AI',
    icon: FileEdit,
  },
  {
    title: 'LangChain SQL Database',
    description: 'Intelligent SQL database interactions using LangChain agents with natural language query processing and automated schema understanding.',
    githubUrl: 'https://github.com/jagadeshchilla/langchain_with_sqldb',
    technologies: ['LangChain', 'Python', 'SQL', 'PostgreSQL', 'NLP', 'Database'],
    category: 'Database AI',
    icon: Database,
  },
  {
    title: 'ATS Resume Expert',
    description: 'AI-powered ATS resume analyzer and optimizer that helps candidates improve their resumes for better job matching.',
    githubUrl: 'https://github.com/jagadeshchilla/ATS-Resume-Expert',
    technologies: ['NLP', 'Resume Parsing', 'ATS', 'AI Analysis'],
    category: 'Career Tech',
    icon: FileText,
  },
  {
    title: 'Calories Advisor',
    description: 'Intelligent nutrition tracking system with AI-powered meal recommendations and personalized dietary insights.',
    githubUrl: 'https://github.com/jagadeshchilla/calories-advisor',
    technologies: ['AI', 'Nutrition', 'Health Tech', 'Recommendation'],
    category: 'Health Tech',
    icon: Apple,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function FeaturedProject() {
  const [featuredProject, ...otherProjects] = featuredProjects

  // Extract all unique technologies from projects
  const getAllTechnologies = () => {
    const techSet = new Set<string>()
    featuredProjects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }

  // Generate tech stack with icons
  const techStack = getAllTechnologies().map(tech => ({
    name: tech,
    icon: techIconMap[tech] || DefaultTechIcon,
  }))

  return (
    <section className="featured-section py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="featured-header"
        >
          <h2 className="featured-main-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Featured Projects
          </h2>
          <p className="featured-main-description text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of cutting-edge AI and ML projects showcasing expertise in machine learning, 
            natural language processing, and intelligent systems development.
          </p>
        </motion.div>

        {/* Large Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="featured-hero-card"
        >
          <div className="featured-hero-content">
            <div className="featured-hero-main">
              <div className="featured-hero-badge">
                <Star className="featured-hero-badge-icon" />
                <span>Featured Project</span>
              </div>
              <div className="featured-hero-icon-large">
                <featuredProject.icon className="featured-hero-icon-text" />
              </div>
              <h3 className="featured-hero-title">{featuredProject.title}</h3>
              <p className="featured-hero-description">{featuredProject.description}</p>
              
              <div className="featured-hero-tech">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="featured-hero-tech-badge">
                      {tech}
                    </span>
                ))}
              </div>

              <div className="featured-hero-buttons">
                <motion.a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="featured-hero-button-primary"
                >
                  <Github className="featured-hero-button-icon" />
                  <span>View on GitHub</span>
                </motion.a>
                {featuredProject.demoUrl ? (
                  <motion.a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="featured-hero-button-secondary"
                  >
                    <ExternalLink className="featured-hero-button-icon" />
                    <span>View Live Demo</span>
                  </motion.a>
                ) : (
                <motion.a
                    href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                    className="featured-hero-button-secondary"
                >
                    <ExternalLink className="featured-hero-button-icon" />
                    <span>Explore</span>
                </motion.a>
                )}
              </div>
            </div>
            <div className="featured-hero-visual">
              <div className="featured-hero-visual-content">
                <div className="featured-hero-visual-icon">
                  <featuredProject.icon className="featured-hero-visual-icon-svg" />
                </div>
                <p className="featured-hero-visual-category">{featuredProject.category}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="featured-projects-grid-compact"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="featured-project-thumbnail"
            >
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-thumbnail-link"
                whileHover={{ y: -4 }}
              >
                <div className="featured-thumbnail-content">
                  <div className="featured-thumbnail-header">
                    <div className="featured-thumbnail-icon">
                      <project.icon className="featured-thumbnail-icon-svg" />
                    </div>
                    <span className="featured-thumbnail-category">{project.category}</span>
                  </div>
                  <h4 className="featured-thumbnail-title">{project.title}</h4>
                  <p className="featured-thumbnail-description">{project.description}</p>
                  <div className="featured-thumbnail-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="featured-thumbnail-tech-item">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="featured-thumbnail-tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="featured-thumbnail-footer">
                    <Github className="featured-thumbnail-footer-icon" />
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Logo Loop Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="featured-tech-stack-section"
        >
          <div className="featured-tech-scroll-container">
            <div className="featured-tech-scroll">
              {/* First set */}
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <motion.div
                    key={`first-${index}`}
                    className="featured-tech-item"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="featured-tech-icon-wrapper">
                      <IconComponent className="featured-tech-icon" />
                    </div>
                    <span className="featured-tech-name">{tech.name}</span>
                  </motion.div>
                )
              })}
              {/* Duplicate set for seamless loop */}
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <motion.div
                    key={`second-${index}`}
                    className="featured-tech-item"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="featured-tech-icon-wrapper">
                      <IconComponent className="featured-tech-icon" />
                    </div>
                    <span className="featured-tech-name">{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
