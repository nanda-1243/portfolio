// ─────────────────────────────────────────────────────────────────────────
//  PROJECTS — the ONLY three projects from the resume.
//  Titles, descriptions, features and technologies are taken from the resume.
//  Extended Read-More fields (objectives, architecture, challenges, results,
//  etc.) are faithfully derived from the resume bullets — no invented metrics.
//
//  To wire real links: set `github` / `demo` for each project below.
//  Leave `demo` as null to hide the Live Demo button.
// ─────────────────────────────────────────────────────────────────────────

export type Accent = {
  from: string
  to: string
  glow: string
  text: string
  ring: string
}

export type Project = {
  slug: string
  title: string
  org: string
  domain: string
  accent: Accent
  shortDescription: string
  problemStatement: string
  keyFeatures: string[]
  technologies: string[]
  highlights: string[]
  objectives: string[]
  architecture: { id: string; label: string; detail: string }[]
  workflow: string[]
  dataset: string
  model: string
  challenges: string[]
  results: string[]
  futureImprovements: string[]
  gallery: { title: string; caption: string }[]
  links: { github: string; demo: string | null }
}

const githubProfile = 'https://github.com/nanda-1243'

export const projects: Project[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'maritime-geospatial-intelligence',
    title: 'Maritime Geospatial Intelligence System',
    org: 'WESEE, Delhi',
    domain: 'Geospatial Intelligence',
    accent: {
      from: '#0ea5e9',
      to: '#22d3ee',
      glow: 'rgba(34, 211, 238, 0.35)',
      text: '#67e8f9',
      ring: 'rgba(56, 189, 248, 0.5)',
    },
    shortDescription:
      'An interactive maritime intelligence web application with visualization layers for ships, ports, weather and maritime risk zones, powered by Hadoop-based ETL and route-prediction algorithms.',
    problemStatement:
      'Maritime operations generate vast, fragmented datasets — vessel positions, port activity, weather and hazard zones — that are hard to monitor together. The challenge was to unify these large-scale sources into a single interactive view and predict optimal, safer navigation routes.',
    keyFeatures: [
      'Developed an interactive maritime intelligence web application.',
      'Built visualization layers for ships, ports, weather and maritime risk zones.',
      'Performed Exploratory Data Analysis (EDA) on maritime datasets.',
      'Designed Hadoop-based ETL pipelines for large-scale data processing.',
      'Developed route prediction algorithms for optimal maritime navigation.',
    ],
    technologies: ['Python', 'Hadoop', 'ETL Pipelines', 'EDA', 'GeoServer', 'QGIS'],
    highlights: [
      'Unified ships, ports, weather & risk zones into one live map',
      'Hadoop-based ETL built for large-scale maritime data',
      'Route-prediction algorithms for optimal navigation',
    ],
    objectives: [
      'Aggregate large-scale maritime datasets into a single analytical platform.',
      'Visualize ships, ports, weather and risk zones as interactive layers.',
      'Process data at scale through Hadoop-based ETL pipelines.',
      'Predict optimal maritime routes for safer, more efficient navigation.',
    ],
    architecture: [
      { id: 'sources', label: 'Maritime Data Sources', detail: 'Ships · Ports · Weather · Risk zones' },
      { id: 'etl', label: 'Hadoop ETL Pipeline', detail: 'Large-scale extract, transform, load' },
      { id: 'eda', label: 'EDA & Processing', detail: 'Exploratory analysis on maritime datasets' },
      { id: 'route', label: 'Route Prediction', detail: 'Algorithms for optimal navigation' },
      { id: 'app', label: 'Web Application', detail: 'Interactive visualization layers' },
    ],
    workflow: [
      'Ingest large-scale maritime datasets (ships, ports, weather, risk zones).',
      'Process and clean data through Hadoop-based ETL pipelines.',
      'Run Exploratory Data Analysis to surface patterns and anomalies.',
      'Apply route-prediction algorithms for optimal navigation.',
      'Render interactive visualization layers in the web application.',
    ],
    dataset:
      'Maritime datasets covering ship movements, ports, weather conditions and maritime risk zones, analysed through Exploratory Data Analysis (EDA).',
    model:
      'Route-prediction algorithms for optimal maritime navigation, driven by exploratory analysis of large-scale maritime data processed via Hadoop ETL.',
    challenges: [
      'Handling and processing very large-scale maritime datasets efficiently.',
      'Fusing heterogeneous sources — vessels, ports, weather and hazards — into coherent layers.',
      'Designing route-prediction logic that accounts for maritime risk zones.',
    ],
    results: [
      'Delivered an interactive maritime intelligence web application.',
      'Unified visualization layers for ships, ports, weather and risk zones.',
      'Established Hadoop-based ETL capable of large-scale data processing.',
      'Produced route predictions supporting optimal maritime navigation.',
    ],
    futureImprovements: [
      'Incorporate live, streaming vessel feeds for real-time tracking.',
      'Extend route prediction with richer weather and risk forecasting.',
      'Add historical playback and analytics over maritime traffic.',
    ],
    gallery: [
      { title: 'Live Vessel Layer', caption: 'Ships plotted across monitored sea regions' },
      { title: 'Risk Zone Overlay', caption: 'Weather & maritime risk zones highlighted' },
      { title: 'Route Prediction', caption: 'Optimal navigation paths between ports' },
    ],
    links: { github: githubProfile, demo: null },
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'health-monitoring-tracking-system',
    title: 'Health Monitoring & Tracking System',
    org: 'OCF',
    domain: 'Real-Time Health ML',
    accent: {
      from: '#10b981',
      to: '#34d399',
      glow: 'rgba(52, 211, 153, 0.35)',
      text: '#6ee7b7',
      ring: 'rgba(16, 185, 129, 0.5)',
    },
    shortDescription:
      'A secure real-time health monitoring system using Machine Learning, with lightweight transformer classification, Kafka-based streaming pipelines, GeoServer visualization and geofencing alerts.',
    problemStatement:
      'Continuous health and location signals from sensors need to be processed securely and acted on instantly. The challenge was to classify streaming sensor data in real time and trigger location-aware alerts without losing reliability or security.',
    keyFeatures: [
      'Developed a secure real-time health monitoring system using Machine Learning.',
      'Performed preprocessing and feature engineering on sensor datasets.',
      'Integrated lightweight transformer models for classification.',
      'Built Kafka-based real-time streaming pipelines.',
      'Configured GeoServer for efficient geospatial visualization.',
      'Implemented geofencing with real-time alerts.',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Transformers',
      'Apache Kafka',
      'GeoServer',
      'Real-Time Streaming',
    ],
    highlights: [
      'Lightweight transformer models for real-time classification',
      'Kafka streaming pipelines for live sensor data',
      'Geofencing with real-time alerts on a GeoServer map',
    ],
    objectives: [
      'Monitor health signals securely and in real time using Machine Learning.',
      'Engineer reliable features from raw sensor datasets.',
      'Classify streaming data with lightweight transformer models.',
      'Visualize location data and trigger geofenced, real-time alerts.',
    ],
    architecture: [
      { id: 'sensors', label: 'Sensor Streams', detail: 'Live health & location signals' },
      { id: 'kafka', label: 'Kafka Pipeline', detail: 'Real-time streaming ingestion' },
      { id: 'features', label: 'Preprocessing & Features', detail: 'Feature engineering on sensor data' },
      { id: 'model', label: 'Transformer Classifier', detail: 'Lightweight classification model' },
      { id: 'geo', label: 'GeoServer + Geofencing', detail: 'Geospatial view & real-time alerts' },
    ],
    workflow: [
      'Stream live sensor signals through Kafka-based pipelines.',
      'Preprocess and engineer features from the sensor datasets.',
      'Classify data in real time using lightweight transformer models.',
      'Visualize geospatial context efficiently via GeoServer.',
      'Evaluate geofence boundaries and raise real-time alerts.',
    ],
    dataset:
      'Sensor datasets carrying real-time health and location signals, refined through preprocessing and feature engineering.',
    model:
      'Lightweight transformer models integrated for classification of streaming sensor data, chosen for efficient real-time inference.',
    challenges: [
      'Maintaining security while processing sensitive real-time health data.',
      'Keeping transformer inference lightweight enough for streaming workloads.',
      'Coordinating Kafka streaming with geofencing to deliver timely alerts.',
    ],
    results: [
      'Delivered a secure, real-time health monitoring system.',
      'Enabled real-time classification through lightweight transformer models.',
      'Operationalized Kafka-based streaming for live sensor data.',
      'Provided geofencing with real-time alerts over GeoServer visualization.',
    ],
    futureImprovements: [
      'Expand the model set for additional health-condition classes.',
      'Add anomaly detection on top of the streaming classifier.',
      'Introduce configurable, multi-zone geofencing rules.',
    ],
    gallery: [
      { title: 'Real-Time Dashboard', caption: 'Live sensor classification at a glance' },
      { title: 'Geofence Map', caption: 'GeoServer view with alert boundaries' },
      { title: 'Streaming Pipeline', caption: 'Kafka topics feeding the model' },
    ],
    links: { github: githubProfile, demo: null },
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'ai-document-analysis-rag',
    title: 'AI Document Analysis using LLMs',
    org: 'RAG-based Intelligent Document QA System',
    domain: 'Generative AI · RAG',
    accent: {
      from: '#8b5cf6',
      to: '#a855f7',
      glow: 'rgba(168, 85, 247, 0.35)',
      text: '#c4b5fd',
      ring: 'rgba(139, 92, 246, 0.5)',
    },
    shortDescription:
      'An end-to-end Retrieval-Augmented Generation system for document question answering using OCR, semantic search and Llama 3.1 — with a React (TypeScript) frontend and FastAPI backend.',
    problemStatement:
      'Answering questions over PDFs and scanned images usually means manual reading and unreliable LLM responses that hallucinate. The challenge was to ground a language model in the actual document content so answers stay accurate and scalable across large document sets.',
    keyFeatures: [
      'Built an end-to-end Retrieval-Augmented Generation (RAG) system for document question answering using OCR, semantic search, and Llama 3.1.',
      'Extracted text from PDFs and images using Mindee DocTR, applied recursive text chunking, and generated All-MiniLM embeddings for efficient document indexing.',
      'Stored vector embeddings in PostgreSQL (pgvector) and implemented cosine similarity–based semantic retrieval for scalable document search.',
      'Integrated Ollama (Llama 3.1) with prompt engineering and context grounding to generate accurate, document-based responses while reducing hallucinations.',
      'Developed a React (TypeScript) frontend and FastAPI backend to enable interactive document upload and real-time question answering.',
    ],
    technologies: [
      'Llama 3.1',
      'Ollama',
      'RAG',
      'Mindee DocTR',
      'All-MiniLM',
      'PostgreSQL (pgvector)',
      'Semantic Search',
      'FastAPI',
      'React (TypeScript)',
      'OCR',
    ],
    highlights: [
      'Llama 3.1 grounded on documents to reduce hallucinations',
      'pgvector + cosine similarity for scalable semantic retrieval',
      'React (TypeScript) + FastAPI for real-time document QA',
    ],
    objectives: [
      'Extract text reliably from PDFs and images via OCR.',
      'Index document content as embeddings for fast semantic retrieval.',
      'Ground Llama 3.1 responses in retrieved context to cut hallucinations.',
      'Deliver an interactive upload-and-ask experience in real time.',
    ],
    architecture: [
      { id: 'upload', label: 'Document Upload', detail: 'PDFs & images via React frontend' },
      { id: 'ocr', label: 'OCR — Mindee DocTR', detail: 'Text extraction from documents' },
      { id: 'chunk', label: 'Chunk + Embed', detail: 'Recursive chunking · All-MiniLM embeddings' },
      { id: 'store', label: 'pgvector Store', detail: 'PostgreSQL vector index' },
      { id: 'retrieve', label: 'Semantic Retrieval', detail: 'Cosine similarity search' },
      { id: 'llm', label: 'Llama 3.1 (Ollama)', detail: 'Context-grounded generation' },
    ],
    workflow: [
      'Upload PDFs or images through the React (TypeScript) frontend.',
      'Extract text using Mindee DocTR OCR.',
      'Apply recursive text chunking and generate All-MiniLM embeddings.',
      'Store embeddings in PostgreSQL (pgvector) for indexing.',
      'Retrieve relevant chunks via cosine-similarity semantic search.',
      'Generate grounded answers with Ollama (Llama 3.1) and prompt engineering.',
    ],
    dataset:
      'User-supplied documents — PDFs and images — with text extracted via OCR, chunked recursively and embedded for semantic indexing.',
    model:
      'Llama 3.1 served through Ollama for context-grounded generation, with All-MiniLM sentence embeddings powering retrieval and Mindee DocTR handling OCR.',
    challenges: [
      'Reducing LLM hallucinations through strict context grounding.',
      'Extracting clean text from varied PDFs and scanned images.',
      'Keeping semantic retrieval fast and scalable with pgvector.',
    ],
    results: [
      'Produced accurate, document-based answers with reduced hallucinations.',
      'Achieved scalable semantic document search via pgvector and cosine similarity.',
      'Enabled interactive document upload and real-time question answering.',
    ],
    futureImprovements: [
      'Add multi-document and cross-document reasoning.',
      'Support more file formats and richer table/figure extraction.',
      'Introduce citation highlighting back to source passages.',
    ],
    gallery: [
      { title: 'Upload & Ask', caption: 'Interactive document QA interface' },
      { title: 'Retrieval View', caption: 'Top semantic matches from pgvector' },
      { title: 'Grounded Answer', caption: 'Llama 3.1 response tied to the document' },
    ],
    links: { github: githubProfile, demo: null },
  },
]

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug)
