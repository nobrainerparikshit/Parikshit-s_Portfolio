export type Resource = {
  title: string
  description: string
  tags: string[]
  url: string
}

export const RESOURCES: Resource[] = [
  {
    title: 'Introduction to AI',
    description: 'Presentation introducing AI fundamentals, prompting, and core machine learning concepts.',
    tags: ['Intro to AI', 'Machine Learning', 'Education'],
    url: '#',
  },
  {
    title: 'Introduction to Derivatives',
    description: 'Google Doc covering the fundamentals of derivatives, essential for understanding gradient-based optimization in ML.',
    tags: ['Mathematics', 'Calculus', 'Machine Learning'],
    url: '#',
  },
  {
    title: 'Introduction to Linear Algebra',
    description: 'Google Doc introducing vectors, matrices, and linear algebra concepts foundational to neural networks.',
    tags: ['Mathematics', 'Linear Algebra', 'Machine Learning'],
    url: '#',
  },
  {
    title: 'Neural Network Backpropagation and Forward Pass',
    description: 'Interactive Miro board with complete forward and backward pass derivation of a neural network.',
    tags: ['Neural Networks', 'Mathematics', 'Backpropagation'],
    url: '#',
  },
  {
    title: 'Introduction to Quantitative Finance',
    description: 'Canva presentation introducing quantitative finance concepts and applications.',
    tags: ['Finance', 'Quantitative Finance', 'Education'],
    url: '#',
  },
  {
    title: 'Long Short-Term Memory Model (LSTM)',
    description: 'Teaches the mathematical, conceptual, and coding aspects of the Long Short-Term Memory model.',
    tags: ['LSTM', 'Time Series', 'Machine Learning', 'Deep Learning'],
    url: '#',
  },
  {
    title: 'Multi-GPU Programming',
    description: 'Interactive Miro board covering distributed training and multi-GPU programming techniques.',
    tags: ['GPU', 'Distributed Computing', 'Deep Learning'],
    url: '#',
  },
  {
    title: 'Training Models at Scale',
    description: 'Resources for training large-scale machine learning models efficiently.',
    tags: ['Deep Learning', 'Scalability', 'Training'],
    url: '#',
  },
  {
    title: 'The Transformer Architecture and Multi-Head Attention',
    description: 'Interactive Miro board explaining the transformer architecture and multi-head attention mechanism.',
    tags: ['Transformers', 'Attention', 'NLP', 'Deep Learning'],
    url: '#',
  },
  {
    title: 'Graph Neural Networks',
    description: 'Interactive Miro board covering graph neural networks and their applications to structured data.',
    tags: ['Graph Neural Networks', 'Deep Learning', 'Research'],
    url: '#',
  },
  {
    title: 'Physics-Inspired Machine Learning',
    description: 'Interactive Miro board exploring machine learning approaches inspired by physics and differential equations.',
    tags: ['Physics', 'Machine Learning', 'Research', 'Scientific Computing'],
    url: '#',
  },
  {
    title: 'JEPA',
    description: 'Interactive Miro board exploring Joint Embedding Predictive Architecture and representation learning foundations.',
    tags: ['Representation Learning', 'JEPA', 'Deep Learning'],
    url: '#',
  },
  {
    title: 'Mixture of Experts (MoE) + Attention Variants',
    description: 'Interactive Miro board covering Mixture of Experts architectures and attention mechanism variants.',
    tags: ['MoE', 'Attention', 'Language Models'],
    url: '#',
  },
  {
    title: 'Reinforcement Learning with Human Feedback (RLHF)',
    description: 'Interactive Miro board introducing RLHF workflows, preference modeling, and alignment training loops.',
    tags: ['RLHF', 'Alignment', 'Reinforcement Learning'],
    url: '#',
  },
  {
    title: 'Intro to PDEs + Pseudo-Spectral Methods + PINNs',
    description: 'Interactive Miro board introducing PDEs, pseudo-spectral methods, and Physics-Informed Neural Networks.',
    tags: ['PDEs', 'PINNs', 'Scientific Computing'],
    url: '#',
  },
  {
    title: 'Introduction to Prompting and the Fundamental Concepts of Machine Learning',
    description: 'Presentation introducing prompting, the limitations of certain ML models, gradient descent, and more.',
    tags: ['Prompting', 'Machine Learning', 'Education'],
    url: '#',
  },
  {
    title: 'AIYGO Resources Repository',
    description: 'Browse the full collection of AI education resources organized by curriculum level on GitHub.',
    tags: ['Open Source', 'Curriculum', 'All Levels'],
    url: '#',
  },
]

export const ALL_TAGS = [
  'All',
  'Machine Learning',
  'Deep Learning',
  'Mathematics',
  'Research',
  'Education',
  'Attention',
  'Scientific Computing',
  'Intro to AI',
  'Calculus',
  'Linear Algebra',
  'Neural Networks',
  'Backpropagation',
]
