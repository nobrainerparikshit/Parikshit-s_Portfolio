export type Project = {
  title: string
  description: string
  status: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'Neural Networks from First Principles',
    description: 'A curriculum building neural networks from mathematical foundations through implementation.',
    status: 'Active',
    tags: ['Education', 'Deep Learning'],
  },
  {
    title: 'World Models Research',
    description: 'Open-source research exploring world models and predictive architectures for AI systems.',
    status: 'Active',
    tags: ['Research', 'Deep Learning'],
  },
  {
    title: 'Global Chapter Network',
    description: 'Coordinating student-led chapters across 14 countries to deliver rigorous ML education.',
    status: 'Active',
    tags: ['Community', 'Education'],
  },
]

export type BlogPost = {
  title: string
  date: string
  excerpt: string
  slug: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Welcome to AIYGO',
    date: 'October 2025',
    excerpt: 'Introducing the AI Youth Global Organization — a student-led nonprofit making rigorous machine learning education accessible worldwide.',
    slug: 'welcome-to-aiygo',
  },
  {
    title: 'Building a Global Research Network',
    date: 'November 2025',
    excerpt: 'How high schoolers from five countries came together at an international math modeling competition and launched an AI organization.',
    slug: 'building-a-global-research-network',
  },
  {
    title: 'Open-Source ML Resources for High Schoolers',
    date: 'December 2025',
    excerpt: 'Our growing library of educational materials — from calculus to transformers — created by students, for students.',
    slug: 'open-source-ml-resources',
  },
]
