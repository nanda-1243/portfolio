// ─────────────────────────────────────────────────────────────────────────
//  PROFILE & LINKS — edit this file to update your details site-wide.
//  All values below are taken directly from the resume.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Amara Maruthi Venkatasatyakishore',
  shortName: 'Maruthi',
  title: 'Machine Learning Engineer',
  tagline:
    'Building scalable ML pipelines, RAG systems, LLM applications, and real-time AI solutions.',
  location: 'India',
  phone: '+91 9618166747',
  email: 'maruthiamara07@gmail.com',
  summary:
    'Machine Learning Engineer with expertise in Machine Learning, Deep Learning, and Generative AI. Experienced in building scalable ML pipelines, RAG systems, LLM applications, and real-time AI solutions using Python, TensorFlow, PyTorch, FastAPI, Apache Kafka, Hadoop, PySpark, PostgreSQL (pgvector), and GeoServer.',

  // ── Social / external links ──────────────────────────────────────────────
  // Replace `github` with your real handle if different, and drop real repo
  // URLs into each project in `projects.ts` when you have them.
  links: {
    linkedin: 'https://www.linkedin.com/in/amara-maruthi',
    github: 'https://github.com/nanda-1243',
    email: 'mailto:maruthiamara07@gmail.com',
  },
}

export const skillGroups = [
  { label: 'Languages', items: ['Python'] },
  {
    label: 'Machine Learning',
    items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'CNN'],
  },
  { label: 'Generative AI', items: ['LLMs', 'RAG', 'Semantic Search'] },
  {
    label: 'Data Engineering',
    items: [
      'PySpark',
      'Hadoop',
      'Apache Kafka',
      'ETL Pipelines',
      'Real-Time Streaming',
    ],
  },
  { label: 'Database', items: ['PostgreSQL'] },
  { label: 'Tools', items: ['Flask', 'FastAPI', 'GeoServer', 'QGIS', 'OCR', 'Git'] },
]

export const experience = [
  {
    role: 'Machine Learning Engineer',
    company: 'Neemus Software Solutions',
    period: 'July 2025 – Present',
    points: [
      'Developed and deployed Machine Learning and Deep Learning models using Python and TensorFlow.',
      'Built end-to-end ML pipelines including preprocessing, feature engineering, model training and deployment.',
      'Integrated trained models with Flask and FastAPI for real-time inference.',
      'Implemented Kafka-based streaming pipelines for processing live sensor and application data.',
      'Processed large-scale datasets using Hadoop and PySpark.',
      'Worked with GeoServer and QGIS for geospatial visualization and analytics.',
    ],
  },
]

export const education = [
  {
    school: 'St. Ann’s College of Engineering and Technology',
    detail: 'B.Tech in Artificial Intelligence & Machine Learning',
    period: '2021–2024',
    score: 'CGPA: 8.15',
  },
  {
    school: 'Vignana Bharathi Junior College',
    detail: 'Intermediate (MPC)',
    period: '2018–2020',
    score: 'GPA: 9.42',
  },
  {
    school: 'Oxford High School',
    detail: 'Secondary Education',
    period: '2017–2018',
    score: 'GPA: 10.0',
  },
]

export const certifications = ['Microsoft Azure Fundamentals']
