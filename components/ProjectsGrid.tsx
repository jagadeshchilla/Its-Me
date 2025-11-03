'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import './FeaturedProject.css'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  caseStudyUrl?: string
  category: string
}

const projects: Project[] = [
  // MLOps Projects
  {
    id: '1',
    title: 'House Price Prediction with MLflow',
    description:
      'ML model training and experiment tracking with MLflow for house price prediction.',
    techStack: ['Python', 'MLflow', 'scikit-learn', 'Jupyter'],
    githubUrl: 'https://github.com/jagadeshchilla/housePricePrediction-with-Ml-Flow',
    category: 'MLOps',
  },
  {
    id: '2',
    title: 'ANN with MLflow',
    description:
      'Neural network model tracked and visualized with MLflow, including hyperparameter optimization.',
    techStack: ['Python', 'TensorFlow', 'MLflow', 'Keras', 'Hyperopt'],
    githubUrl: 'https://github.com/jagadeshchilla/ANN-with-ML-flow',
    category: 'MLOps',
  },
  {
    id: '3',
    title: 'DVC & MLflow Pipeline',
    description:
      'Complete ML pipeline with DVC and MLflow for data versioning, experiment tracking, and model management.',
    techStack: ['Python', 'DVC', 'MLflow', 'scikit-learn', 'DagsHub'],
    githubUrl: 'https://github.com/jagadeshchilla/Data-Pipeline-with-DVC-and-MLflow-for-Machine-Learning',
    category: 'MLOps',
  },
  {
    id: '4',
    title: 'NASA APOD ETL Pipeline',
    description:
      'ETL pipeline using Apache Airflow to pull and process data from NASA API, storing in PostgreSQL on AWS RDS.',
    techStack: ['Apache Airflow', 'PostgreSQL', 'Docker', 'AWS RDS', 'Python'],
    githubUrl: 'https://github.com/jagadeshchilla/NASA-APOD-ETL-Pipeline-with-Apache-Airflow',
    category: 'MLOps',
  },
  {
    id: '5',
    title: 'GitHub Actions CI/CD',
    description:
      'Simple CI/CD pipeline using GitHub Actions for automated testing and deployment.',
    techStack: ['GitHub Actions', 'Python', 'Pytest', 'CI/CD'],
    githubUrl: 'https://github.com/jagadeshchilla/test_github_actions',
    category: 'MLOps',
  },
  {
    id: '6',
    title: 'Dockerized Flask App',
    description:
      'Flask application containerized using Docker with automated CI/CD pipeline via GitHub Actions.',
    techStack: ['Python', 'Docker', 'Flask', 'GitHub Actions', 'CI/CD'],
    githubUrl: 'https://github.com/jagadeshchilla/dockerImage',
    category: 'MLOps',
  },
  {
    id: '7',
    title: 'Wine Quality Prediction',
    description:
      'ML model for predicting wine quality with MLflow tracking, Flask API, and Docker containerization.',
    techStack: ['Python', 'MLflow', 'Flask', 'Docker', 'scikit-learn', 'DagsHub'],
    githubUrl: 'https://github.com/jagadeshchilla/wine-quality-prediction',
    category: 'MLOps',
  },
  {
    id: '8',
    title: 'Phishing Detection API',
    description:
      'Production-ready ML API to detect phishing websites with FastAPI, Docker, and AWS deployment.',
    techStack: ['Python', 'FastAPI', 'Docker', 'AWS', 'MongoDB', 'MLOps'],
    githubUrl: 'https://github.com/jagadeshchilla/phishing-detecting',
    category: 'MLOps',
  },
  {
    id: '9',
    title: 'Student Performance Predictor (EC2)',
    description:
      'ML model deployment on AWS EC2 using Docker with automated CI/CD pipeline and ECR integration.',
    techStack: ['Python', 'AWS EC2', 'ECR', 'Docker', 'CI/CD'],
    githubUrl: 'https://github.com/jagadeshchilla/student_performance_EC2',
    category: 'MLOps',
  },
  {
    id: '10',
    title: 'Student Performance Predictor (Beanstalk)',
    description:
      'Flask ML application deployed via AWS Elastic Beanstalk with automated CI/CD pipeline.',
    techStack: ['Python', 'Elastic Beanstalk', 'Flask', 'CI/CD', 'Docker'],
    githubUrl: 'https://github.com/jagadeshchilla/Student-Perfromance-Predictor',
    category: 'MLOps',
  },
  {
    id: '11',
    title: 'Student Performance Predictor (Azure)',
    description:
      'Flask ML application deployed to Azure App Service with Docker containerization and CI/CD automation.',
    techStack: ['Python', 'Azure', 'Flask', 'Docker', 'CI/CD'],
    githubUrl: 'https://github.com/jagadeshchilla/student_performance_AZURE',
    category: 'MLOps',
  },
  {
    id: '12',
    title: 'Text Summarizer API',
    description:
      'Text summarization API using Transformers and Hugging Face models with FastAPI backend.',
    techStack: ['Python', 'FastAPI', 'Transformers', 'Hugging Face'],
    githubUrl: 'https://github.com/jagadeshchilla/TextSummarizer',
    category: 'LLMs',
  },
  {
    id: '13',
    title: 'Mobile Classification (SageMaker)',
    description:
      'Mobile price classification model using AWS SageMaker for training and deployment.',
    techStack: ['Python', 'SageMaker', 'scikit-learn', 'Jupyter', 'AWS'],
    githubUrl: 'https://github.com/jagadeshchilla/Mobile_classification_AWS_SAGEMAKER',
    category: 'MLOps',
  },
  // Gen AI Projects - Section 8
  {
    id: '14',
    title: 'Q&A Chatbot',
    description:
      'Enhanced Q&A chatbot with switchable model backends (OpenAI/Ollama) using LangChain. Features Streamlit UI, configurable parameters, and LangSmith tracing for observability.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'OpenAI', 'Ollama', 'LangSmith'],
    githubUrl: 'https://github.com/jagadeshchilla/Q-A-CHATBOT',
    category: 'Gen AI',
  },
  {
    id: '15',
    title: 'Simple LLM LCEL',
    description:
      'Language translation application using LangChain Expression Language. Demonstrates declarative workflow composition with multi-LLM integration (OpenAI, Groq) and production-ready patterns.',
    techStack: ['Python', 'LangChain', 'LCEL', 'OpenAI', 'Groq', 'Gemma 2B'],
    githubUrl: 'https://github.com/jagadeshchilla/Simple_LLm_LCEL',
    category: 'LLMs',
  },
  {
    id: '16',
    title: 'RAG Document Q&A',
    description:
      'Interactive RAG app for querying research papers (PDFs) using FAISS vector search and Groq-hosted Llama 3.1 model. Features document embedding, similarity search, and conversational Q&A.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Groq', 'OpenAI', 'Llama 3.1'],
    githubUrl: 'https://github.com/jagadeshchilla/RAG-Document-Q-A',
    category: 'RAGs',
  },
  {
    id: '17',
    title: 'RAG Document Q&A2',
    description:
      'Advanced RAG implementation with HuggingFace embeddings, Chroma vector store, and conversation history. Features PDF upload, chunking, and multi-turn dialogue with context-aware retrieval.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'Chroma', 'Hugging Face', 'Groq'],
    githubUrl: 'https://github.com/jagadeshchilla/RAG-Document-Q-A2',
    category: 'RAGs',
  },
  {
    id: '18',
    title: 'Chatbot Search Engine',
    description:
      'Intelligent chatbot with search engine capabilities combining conversational AI with web search functionality for comprehensive information retrieval and response generation.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Search Engine'],
    githubUrl: 'https://github.com/jagadeshchilla/chatbot_SearchEngine',
    category: 'Gen AI',
  },
  {
    id: '19',
    title: 'LangChain SQL DB Chat Agent',
    description:
      'Intelligent conversational interface for querying SQL databases using natural language. Features AI-powered SQL generation, multi-database support (SQLite/MySQL), and real-time query execution.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'Groq', 'SQLite', 'MySQL', 'SQLAlchemy'],
    githubUrl: 'https://github.com/jagadeshchilla/langchain_with_sqldb',
    category: 'Agents',
  },
  {
    id: '20',
    title: 'Text Summarizer LangChain',
    description:
      'Advanced text summarization application using LangChain with chunking strategies, prompt templates, and multiple AI models. Features customizable summarization parameters and batch processing capabilities.',
    techStack: ['Python', 'LangChain', 'Jupyter', 'OpenAI', 'Text Processing'],
    githubUrl: 'https://github.com/jagadeshchilla/TextSummarizer_langchain',
    category: 'LLMs',
  },
  {
    id: '21',
    title: 'YouTube URL Summarizer',
    description:
      'Intelligent YouTube video summarization tool that extracts and summarizes video content using LangChain. Features URL processing, content extraction, and AI-powered summarization with customizable output formats.',
    techStack: ['Python', 'LangChain', 'YouTube', 'OpenAI', 'Streamlit', 'yt-dlp'],
    githubUrl: 'https://github.com/jagadeshchilla/Youtube-Website-Url-Summarizer',
    category: 'LLMs',
  },
  {
    id: '22',
    title: 'Text to Math Problem Solver',
    description:
      'AI-powered application that transforms complex mathematical word problems into step-by-step solutions using Google\'s Gemma 2 model. Features multi-modal intelligence, Wikipedia research integration, and interactive chat interface.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'Groq', 'Gemma 2B', 'Wikipedia', 'Math Solver'],
    githubUrl: 'https://github.com/jagadeshchilla/Text_TO_Math',
    category: 'Gen AI',
  },
  {
    id: '23',
    title: 'PDF Query with Astra DB',
    description:
      'Advanced RAG system for querying PDF documents using Cassandra Astra DB vector store. Features OpenAI embeddings, character text splitting, and intelligent document retrieval with relevance scoring.',
    techStack: ['Python', 'Jupyter', 'LangChain', 'OpenAI', 'Astra DB', 'Cassandra', 'PyPDF'],
    githubUrl: 'https://github.com/jagadeshchilla/PDFQuery_LAngchain_Astradb',
    category: 'RAGs',
  },
  {
    id: '23a',
    title: 'RAG Search Agent',
    description:
      'A Retrieval-Augmented Generation (RAG) system built with LangChain and Streamlit for document search and question answering. Features document ingestion from URLs and PDFs, vector-based semantic search using FAISS, and LLM-powered question answering.',
    techStack: ['Python', 'LangChain', 'Streamlit', 'FAISS', 'OpenAI', 'RAG'],
    githubUrl: 'https://github.com/jagadeshchilla/RAG-Search-Agent',
    category: 'RAGs',
  },
  {
    id: '24',
    title: 'Multi-language Code Assistant',
    description:
      'Intelligent code assistant supporting multiple programming languages with AI-powered code generation, debugging, and optimization. Features language-specific templates and real-time code analysis.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Code Assistant', 'Multi-Language'],
    githubUrl: 'https://github.com/jagadeshchilla/multi_language_code-assisstant',
    category: 'Agents',
  },
  {
    id: '25',
    title: 'NVIDIA NIM Document Q&A',
    description:
      'Advanced document Q&A system using NVIDIA NIM inference services with Llama models. Features optimized RAG pipeline, real-time document processing, and scalable architecture for enterprise document analysis.',
    techStack: ['Python', 'Streamlit', 'NVIDIA', 'NIM', 'LangChain', 'Llama', 'RAG'],
    githubUrl: 'https://github.com/jagadeshchilla/NVIDIA-NIM-Document-Q-A-System',
    category: 'RAGs',
  },
  {
    id: '26',
    title: 'Multi-AI Agent CrewAI',
    description:
      'Collaborative AI agent system using CrewAI framework for complex task orchestration. Features multi-agent coordination, specialized role assignments, and intelligent workflow management for enterprise automation.',
    techStack: ['Python', 'CrewAI', 'LangChain', 'OpenAI', 'Multi-Agent', 'Workflow'],
    githubUrl: 'https://github.com/jagadeshchilla/Multi_AIAgent_Crewai',
    category: 'Agents',
  },
  {
    id: '27',
    title: 'AWS Bedrock GenAI Project',
    description:
      'Comprehensive AWS Bedrock application showcasing RAG-based PDF chat, text generation with Claude/Llama2, and image generation with Stable Diffusion XL. Features multi-model architecture, enterprise-grade security, and scalable cloud-native design.',
    techStack: ['Python', 'Streamlit', 'AWS', 'Bedrock', 'Claude', 'Llama2', 'Stable Diffusion', 'FAISS'],
    githubUrl: 'https://github.com/jagadeshchilla/Genai_Aws_BedRock',
    category: 'Gen AI',
  },
  {
    id: '28',
    title: 'LangGraph Neo4j Integration',
    description:
      'Advanced graph-based AI application using LangGraph and Neo4j for stateful multi-actor systems. Features graph-based reasoning, multi-hop queries, and complex relationship analysis with movie database integration.',
    techStack: ['Python', 'LangChain', 'Neo4j', 'Cypher', 'Groq', 'Gemma 2B', 'Graph Database'],
    githubUrl: 'https://github.com/jagadeshchilla/langchain_grapghdb',
    category: 'Gen AI',
  },
  // Gemini AI Projects - Section 9
  {
    id: '29',
    title: 'Gemini AI Chat Application',
    description:
      'Modern, responsive web application integrating Google\'s Gemini AI for intelligent conversations with image analysis capabilities. Features beautiful gradient UI, real-time typing animations, and glassmorphism effects.',
    techStack: ['Python', 'Flask', 'Google AI', 'Gemini', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/jagadeshchilla/Q-A-chatbot-with-gemini',
    demoUrl: 'https://q-a-chatbot-with-gemini.onrender.com/',
    category: 'Gen AI',
  },
  {
    id: '30',
    title: 'Gemini Pro Q&A with Chat History',
    description:
      'Interactive Streamlit web application providing real-time Q&A with Gemini AI, featuring persistent conversation memory and clean responsive interface. Demonstrates advanced chat functionality with session management.',
    techStack: ['Python', 'Streamlit', 'Google AI', 'Gemini', 'Chat History'],
    githubUrl: 'https://github.com/jagadeshchilla/Q-A_WITH_CHAT_HISTORY_GEMINI',
    category: 'Gen AI',
  },
  {
    id: '31',
    title: 'Multi-Language Invoice Extractor',
    description:
      'AI-powered multilingual invoice data extraction tool using Google\'s Gemma AI models. Features multiple model options (Gemma 3 27B/12B/4B IT), up to 95% accuracy, and supports various languages for extracting invoice data.',
    techStack: ['Python', 'Flask', 'Google AI', 'Gemma', 'Image Processing', 'Multilingual'],
    githubUrl: 'https://github.com/jagadeshchilla/MultiLanguage_Invoice_Extractor',
    category: 'AI/ML',
  },
  {
    id: '32',
    title: 'DocuAI',
    description:
      'Advanced document analysis and Q&A system using Google Gemini AI with FAISS vector search. Features document upload, intelligent chunking, semantic search, and conversational AI for comprehensive document understanding.',
    techStack: ['Python', 'Flask', 'Google AI', 'Gemini', 'FAISS', 'Document Analysis'],
    githubUrl: 'https://github.com/jagadeshchilla/DocuAI',
    category: 'RAGs',
  },
  {
    id: '33',
    title: 'Text to SQL Generator',
    description:
      'Intelligent text-to-SQL conversion tool powered by Google Gemini AI. Transforms natural language queries into SQL statements with database schema understanding, query optimization, and error handling.',
    techStack: ['Python', 'Flask', 'Google AI', 'Gemini', 'SQL Generation', 'Natural Language'],
    githubUrl: 'https://github.com/jagadeshchilla/Text_to-SQl',
    category: 'Gen AI',
  },
  {
    id: '34',
    title: 'ATS Resume Expert',
    description:
      'Intelligent resume analysis platform powered by Google\'s Gemini AI for ATS optimization. Features comprehensive analysis with section-wise scoring, technical skills matching, experience level assessment, and professional enhancement recommendations.',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Google AI', 'Gemini', 'Vercel'],
    githubUrl: 'https://github.com/jagadeshchilla/ATS-Resume-Expert',
    demoUrl: 'https://ats-resume-expert.vercel.app/',
    category: 'AI/ML',
  },
  {
    id: '35',
    title: 'Calories Advisor',
    description:
      'AI-powered nutrition and calorie tracking application using Google Gemini AI. Features intelligent meal analysis, calorie calculation, nutritional insights, and personalized dietary recommendations with modern React frontend and FastAPI backend.',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Google AI', 'Gemini', 'Vercel'],
    githubUrl: 'https://github.com/jagadeshchilla/calories-advisor',
    demoUrl: 'https://calories-advisor-eight.vercel.app/',
    category: 'AI/ML',
  },
  {
    id: '36',
    title: 'YouTube Video Summarizer',
    description:
      'Enhanced AI-powered YouTube video summarization tool using Google\'s Gemini AI. Features multiple summary types (bullet points, detailed, key insights, timeline), batch processing, sentiment analysis, keyword extraction, and comprehensive video metadata analysis.',
    techStack: ['Python', 'Streamlit', 'Google AI', 'Gemini', 'YouTube API', 'Video Processing'],
    githubUrl: 'https://github.com/jagadeshchilla/YouTube_Video_summarizer',
    category: 'LLMs',
  },
  {
    id: '37',
    title: 'AI News Research Writing Crew',
    description:
      'Multi-agent AI system using CrewAI framework with Google Gemini AI for automated news research and article writing. Features Senior Researcher and Writer agents that collaborate to uncover trends, analyze data, and generate compelling tech articles.',
    techStack: ['Python', 'CrewAI', 'Google AI', 'Gemini', 'Multi-Agent', 'News Research'],
    githubUrl: 'https://github.com/jagadeshchilla/AI-News-Research-Writing-Crew',
    category: 'Agents',
  },
  {
    id: '38',
    title: 'AI News Summarizer (Agentic Chatbot)',
    description:
      'Intelligent AI-powered application built with LangGraph providing news summarization and chatbot capabilities. Features stateful agentic workflows with basic chatbot, web-enhanced conversations using Tavily, and automated AI news summarization (daily/weekly/monthly/yearly) using Groq LLM.',
    techStack: ['Python', 'LangGraph', 'LangChain', 'Groq', 'Streamlit', 'Tavily', 'Hugging Face'],
    githubUrl: 'https://github.com/jagadeshchilla/Agentic-Chatbot',
    demoUrl: 'https://huggingface.co/spaces/chillajagadesh68/ai-news-summarizer',
    category: 'Agents',
  },
  {
    id: '39',
    title: 'Blog Generator Agent',
    description:
      'Autonomous AI agent for automated blog content generation with research, writing, and SEO optimization capabilities. Features topic-based and YouTube-based blog generation with multi-language support using LangGraph workflows.',
    techStack: ['Python', 'LangGraph', 'LangChain', 'Groq', 'FastAPI', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jagadeshchilla/Blog-Generator-Agent',
    demoUrl: 'https://blog-generator-agent-five.vercel.app/',
    category: 'Agents',
  },
  {
    id: '40',
    title: 'Basic MCP',
    description:
      'Model Context Protocol (MCP) implementation for building AI agent systems with context management and protocol-based communication.',
    techStack: ['Python', 'MCP', 'AI Agents', 'Protocol'],
    githubUrl: 'https://github.com/jagadeshchilla/Basic-MCP',
    category: 'Agents',
  },
  // Web Dev Projects
  {
    id: '41',
    title: 'AI Smart Irrigation',
    description:
      'AI-powered smart irrigation system with intelligent water management. Features automated irrigation scheduling, soil moisture monitoring, and weather-based optimization using modern web technologies.',
    techStack: ['JavaScript', 'React', 'CSS', 'Python', 'Node.js', 'AI'],
    githubUrl: 'https://github.com/jagadeshchilla/ai_smart-irrigation',
    demoUrl: 'https://ai-smart-irrigation-nu.vercel.app/',
    category: 'Web Dev',
  },
  {
    id: '42',
    title: 'Library Management System',
    description:
      'Comprehensive library management system with Flask backend and recommendation engine. Features admin dashboard, student portal, book borrowing/returning, popular book recommendations, and similarity-based suggestions.',
    techStack: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'SQLAlchemy', 'Bootstrap'],
    githubUrl: 'https://github.com/jagadeshchilla/library-management-system',
    category: 'Web Dev',
  },
  {
    id: '43',
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and best practices for performance and user experience.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'React', 'Next.js'],
    githubUrl: 'https://github.com/jagadeshchilla/my-protofolio-website',
    category: 'Web Dev',
  },
  // AI/ML Projects
  {
    id: '44',
    title: 'Crop Yield Prediction',
    description:
      'ML model for predicting crop yields based on various agricultural parameters. Features data preprocessing, model training with Jupyter notebooks, and Flask web application for predictions.',
    techStack: ['Python', 'Jupyter Notebook', 'Flask', 'HTML', 'Machine Learning', 'scikit-learn'],
    githubUrl: 'https://github.com/jagadeshchilla/crop-yeild-prediction',
    category: 'AI/ML',
  },
  {
    id: '45',
    title: 'Graduation Admission Prediction (ANN)',
    description:
      'Artificial Neural Network model to predict the likelihood of student admission to graduate programs based on GRE score, TOEFL score, CGPA, university rating, SOP, LOR, and research experience.',
    techStack: ['Python', 'Jupyter Notebook', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'scikit-learn'],
    githubUrl: 'https://github.com/jagadeshchilla/GraduationAdmissionPreddiction_ANN',
    category: 'AI/ML',
  },
  {
    id: '46',
    title: 'Oral Cancer Detection',
    description:
      'AI-powered system for detecting oral cancer from medical images. Features image processing, deep learning models, and automated diagnosis capabilities for early cancer detection.',
    techStack: ['Python', 'Deep Learning', 'Computer Vision', 'Image Processing', 'TensorFlow', 'OpenCV'],
    githubUrl: 'https://github.com/jagadeshchilla/oral_cancer_detection',
    category: 'AI/ML',
  },
  {
    id: '47',
    title: 'Hand Digit Recognition (ANN)',
    description:
      'Handwritten digit recognition system using Artificial Neural Networks. Trained on MNIST dataset to classify digits 0-9 with high accuracy using deep learning techniques.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'ANN', 'MNIST', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/jagadeshchilla/Hand_digit_recognization_ANN',
    category: 'AI/ML',
  },
  {
    id: '48',
    title: 'Brain Tumor Classification',
    description:
      'Deep learning model for classifying brain tumors from medical imaging data. Features convolutional neural networks (CNN) for accurate tumor detection and classification.',
    techStack: ['Python', 'Deep Learning', 'CNN', 'TensorFlow', 'Keras', 'Medical Imaging', 'Computer Vision'],
    githubUrl: 'https://github.com/jagadeshchilla/Brain_Tumor_classification',
    category: 'AI/ML',
  },
  {
    id: '49',
    title: 'Next Word Prediction',
    description:
      'Natural Language Processing model for predicting the next word in a sequence. Built using neural networks and trained on text corpora to generate context-aware word predictions.',
    techStack: ['Python', 'NLP', 'Neural Networks', 'TensorFlow', 'Keras', 'LSTM', 'Text Processing'],
    githubUrl: 'https://github.com/jagadeshchilla/Next_word_prediction',
    category: 'AI/ML',
  },
  {
    id: '50',
    title: 'Contextual Market Basket Analysis',
    description:
      'Advanced market basket analysis with contextual factors for understanding customer purchase patterns. Features association rule mining, frequent pattern detection, and contextual insights.',
    techStack: ['Python', 'Data Mining', 'Association Rules', 'Pandas', 'scikit-learn', 'Analytics'],
    githubUrl: 'https://github.com/jagadeshchilla/contextual-market-basket-analysis',
    category: 'AI/ML',
  },
  {
    id: '51',
    title: 'Endoscopy Image Enhancement',
    description:
      'AI-powered image enhancement system for endoscopy images to improve medical diagnosis. Features advanced image processing algorithms and deep learning models for quality improvement.',
    techStack: ['Python', 'Image Processing', 'Deep Learning', 'OpenCV', 'Computer Vision', 'Medical Imaging'],
    githubUrl: 'https://github.com/jagadeshchilla/Endoscopy-Image-Enhancement',
    category: 'AI/ML',
  },
  {
    id: '52',
    title: 'Business Intelligence and Analytics',
    description:
      'Comprehensive business intelligence and analytics platform with data visualization, predictive analytics, and insights generation. Features data processing, statistical analysis, and interactive dashboards.',
    techStack: ['Python', 'Data Analytics', 'Business Intelligence', 'Data Visualization', 'Pandas', 'Analytics'],
    githubUrl: 'https://github.com/jagadeshchilla/Bussiness-Intelligence-and-Analytics',
    category: 'AI/ML',
  },
  // Open Source Projects
  {
    id: '53',
    title: 'Endoscopy Image Enhancement',
    description:
      'AI-powered image enhancement system for endoscopy images to improve medical diagnosis. Features advanced image processing algorithms and deep learning models for quality improvement.',
    techStack: ['Python', 'Image Processing', 'Deep Learning', 'OpenCV', 'Computer Vision', 'Medical Imaging'],
    githubUrl: 'https://github.com/jagadeshchilla/Endoscopy-Image-Enhancement',
    category: 'Open Source',
  },
  {
    id: '54',
    title: 'AI Smart Irrigation',
    description:
      'AI-powered smart irrigation system with intelligent water management. Features automated irrigation scheduling, soil moisture monitoring, and weather-based optimization using modern web technologies.',
    techStack: ['JavaScript', 'React', 'CSS', 'Python', 'Node.js', 'AI'],
    githubUrl: 'https://github.com/jagadeshchilla/ai_smart-irrigation',
    demoUrl: 'https://ai-smart-irrigation-nu.vercel.app/',
    category: 'Open Source',
  },
  // Research Projects
  {
    id: '55',
    title: 'Endoscopy Image Enhancement',
    description:
      'AI-powered image enhancement system for endoscopy images to improve medical diagnosis. Features advanced image processing algorithms and deep learning models for quality improvement.',
    techStack: ['Python', 'Image Processing', 'Deep Learning', 'OpenCV', 'Computer Vision', 'Medical Imaging'],
    githubUrl: 'https://github.com/jagadeshchilla/Endoscopy-Image-Enhancement',
    category: 'Research',
  },
  {
    id: '56',
    title: 'AI Smart Irrigation',
    description:
      'AI-powered smart irrigation system with intelligent water management. Features automated irrigation scheduling, soil moisture monitoring, and weather-based optimization using modern web technologies.',
    techStack: ['JavaScript', 'React', 'CSS', 'Python', 'Node.js', 'AI'],
    githubUrl: 'https://github.com/jagadeshchilla/ai_smart-irrigation',
    demoUrl: 'https://ai-smart-irrigation-nu.vercel.app/',
    category: 'Research',
  },
]

const categories = ['All', 'Gen AI', 'AI/ML', 'RAGs', 'Agents', 'LLMs', 'MLOps', 'Web Dev', 'Research', 'Open Source']

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="featured-section py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full font-medium text-[10px] xs:text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-white text-red-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="featured-projects-grid-compact"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                caseStudyUrl={project.caseStudyUrl}
                category={project.category}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-white/70 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

