import { Linkedin, Github, Mail, Twitter, Facebook, Instagram, Sparkles, Home, Briefcase, GraduationCap, MessageCircle, Phone, MapPin } from 'lucide-react'
import { IconType } from 'react-icons'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'

// Personal Information
export const personalInfo = {
  name: 'Jagadesh Chilla',
  fullName: 'Jagadesh Chilla',
  tagline: 'AI & Data Science Enthusiast | MLOps | Generative AI | Full-Stack ML Developer',
  description: 'Building intelligent solutions with cutting-edge technology',
  bio: {
    short: "I design and build intelligent systems & beautiful interfaces. Currently exploring the intersection of AI-driven products and human-centered design.",
    long: [
      "an AI and Data Science enthusiast passionate about building intelligent systems that create real-world impact. I specialize in MLOps, Generative AI, and Full-Stack ML Development, focusing on developing scalable, production-ready machine learning solutions.",
      "My work blends innovation with practicality, ensuring every model delivers measurable value. Beyond coding, I stay active in AI research, hackathons, and open-source contributions. I'm driven by curiosity, continuous learning, and a commitment to pushing the boundaries of what technology can achieve."
    ]
  },
  aboutDescription: 'A passionate AI & Data Science enthusiast dedicated to building intelligent solutions',
  resume: {
    path: '/images/jagadesh.pdf',
    label: 'VIEW MY CV'
  },
  profileImage: {
    path: '/images/me.jpg',
    alt: 'Jagadesh Chilla'
  },
  location: 'Visakhapatnam, Andhra Pradesh',
  phone: '+91 6309476048',
  email: 'chillajagadesh68@gmail.com'
}

// Social Media Links - Lucide Icons (for Footer)
export interface SocialLink {
  name: string
  icon: typeof Github
  href: string
  color?: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/jagadeshchilla',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/chilla-jagadesh-532246223/',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Gmail',
    icon: Mail,
    href: 'mailto:chillajagadesh68@gmail.com',
    color: 'hover:text-red-400',
  },
  {
    name: 'X-Twitter',
    icon: Twitter,
    href: 'https://x.com/JagadeshChilla',
    color: 'hover:text-white',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=100053271977731',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/jagadeshreddy45/',
    color: 'hover:text-pink-400',
  },
  {
    name: 'Kaggle',
    icon: Sparkles,
    href: 'https://www.kaggle.com/chillajagadesh',
    color: 'hover:text-blue-400',
  },
]

// Social Media Links - React Icons (for AboutMe component)
export interface SocialLinkReactIcon {
  name: string
  icon: IconType
  href: string
  ariaLabel: string
}

export const socialLinksReactIcons: SocialLinkReactIcon[] = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/jagadeshchilla',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/chilla-jagadesh-532246223/',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Gmail',
    icon: FaEnvelope,
    href: 'mailto:chillajagadesh68@gmail.com',
    ariaLabel: 'Email',
  },
  {
    name: 'X-Twitter',
    icon: FaTwitter,
    href: 'https://x.com/JagadeshChilla',
    ariaLabel: 'X-Twitter',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    href: 'https://www.facebook.com/profile.php?id=100053271977731',
    ariaLabel: 'Facebook',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/jagadeshreddy45/',
    ariaLabel: 'Instagram',
  },
  {
    name: 'Kaggle',
    icon: SiKaggle,
    href: 'https://www.kaggle.com/chillajagadesh',
    ariaLabel: 'Kaggle',
  },
]

// Social Links for SocialLinks component
export interface SocialItem {
  name: string
  icon: typeof Github
  url: string
  color: string
  bgColor: string
}

export const socialLinksForComponent: SocialItem[] = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/jagadeshchilla',
    color: 'text-gray-900',
    bgColor: 'bg-gray-50 hover:bg-gray-100',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/chilla-jagadesh-532246223/',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    name: 'Gmail',
    icon: Mail,
    url: 'mailto:chillajagadesh68@gmail.com',
    color: 'text-red-600',
    bgColor: 'bg-red-50 hover:bg-red-100',
  },
  {
    name: 'X-Twitter',
    icon: Twitter,
    url: 'https://x.com/JagadeshChilla',
    color: 'text-gray-900',
    bgColor: 'bg-gray-50 hover:bg-gray-100',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=100053271977731',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/jagadeshreddy45/',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 hover:bg-pink-100',
  },
  {
    name: 'Kaggle',
    icon: Sparkles,
    url: 'https://www.kaggle.com/chillajagadesh',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
]

// Navigation Links
export interface NavLink {
  name: string
  href: string
  icon: typeof Home
}

export const navigationLinks: NavLink[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
]

// Contact Information
export interface ContactItem {
  icon: typeof Mail
  label: string
  value: string
  link: string
  linkType: 'email' | 'phone' | 'location'
}

export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
    linkType: 'email',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    link: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    linkType: 'phone',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    link: 'https://maps.google.com',
    linkType: 'location',
  },
]

// Coding Profiles
export interface CodingProfile {
  platform: string
  username: string
  profileUrl: string
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: '@jagadesh_chilla',
    profileUrl: 'https://leetcode.com/u/jagadeshreddy/',
  },
  {
    platform: 'HackerRank',
    username: '@jagadesh_chilla',
    profileUrl: 'https://www.hackerrank.com/profile/chillajagadesh68',
  },
  {
    platform: 'CodeChef',
    username: '@jagadesh_chilla',
    profileUrl: 'https://www.codechef.com/users/chillajagadesh',
  },
  {
    platform: 'Kaggle',
    username: '@jagadesh_chilla',
    profileUrl: 'https://www.kaggle.com/chillajagadesh',
  },
  {
    platform: 'Codeforces',
    username: '@jagadesh_chilla',
    profileUrl: 'https://codeforces.com/profile/jagadesh68',
  },
  {
    platform: 'HackerEarth',
    username: '@jagadesh_chilla',
    profileUrl: 'https://www.hackerearth.com/@chillajagadesh68',
  },
  {
    platform: 'GeeksforGeeks',
    username: '@jagadesh_chilla',
    profileUrl: 'https://www.geeksforgeeks.org/user/chillajagadesh68/',
  },
  {
    platform: 'Naukri Code 360',
    username: '@jagadesh_chilla',
    profileUrl: 'https://www.naukri.com/code360/profile/jagadeshchilla',
  },
]

// Meta Information for SEO
export const metaInfo = {
  title: 'Jagadesh Chilla',
  description: 'AI & Data Science Enthusiast | MLOps | Generative AI | Full-Stack ML Developer',
  icon: '/images/cropped_circle_image.png',
}

