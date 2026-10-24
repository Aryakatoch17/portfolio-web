export const profile = {
  name: 'Arya Katoch',
  role: 'Full Stack AI Developer · AI/ML Engineer',
  summary:
    'Full Stack AI Developer who designs, trains, and ships intelligent products end-to-end — from PyTorch models and GenAI pipelines to React frontends, Node/FastAPI backends, and production databases.',
  email: 'aryakatoch06@gmail.com',
  github: 'https://github.com/Aryakatoch17',
  linkedin: 'https://www.linkedin.com/in/aryakatoch/',
  instagram: 'https://www.instagram.com/arya_katoch17/',
  x: 'https://x.com/KatochArya',
  avatar: '/logo.jpg',
}

export const expertise = [
  {
    title: 'AI & Machine Learning',
    description:
      'I build computer vision and ML systems end-to-end — data pipelines, training, evaluation, quantization, and edge deployment that plug cleanly into real products.',
    icon: 'brain',
    stack: [
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'MediaPipe',
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'Scikit-learn',
    ],
  },
  {
    title: 'Full Stack Development',
    description:
      'I ship complete web applications — React UIs, Node/FastAPI/Django APIs, auth, and databases — so AI features land as usable products, not notebooks.',
    icon: 'code',
    stack: [
      'React.js',
      'Node.js',
      'FastAPI',
      'Django',
      'Flask',
      'PostgreSQL',
      'Supabase',
      'REST APIs',
      'WebRTC',
    ],
  },
  {
    title: 'GenAI, Edge & Responsible AI',
    description:
      'I build LLM/RAG systems, on-device GenAI with LoRA/PEFT, and fairness/XAI tooling — including dashboards that monitor real deployments.',
    icon: 'spark',
    stack: ['LLMs', 'Gemma', 'RAG', 'LoRA', 'PEFT', 'SHAP', 'LIME', 'Fairlearn', 'Streamlit'],
  },
]

export type SkillItem = {
  name: string
  /** simpleicons slug for the official brand logo */
  icon: string
  color: string
}

export type SkillGroup = {
  title: string
  items: SkillItem[]
}

/** Only technologies with official brand logos (Simple Icons). */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', icon: 'python', color: '#3776AB' },
      { name: 'C++', icon: 'cplusplus', color: '#00599C' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
    ],
  },
  {
    title: 'ML Frameworks',
    items: [
      { name: 'PyTorch', icon: 'pytorch', color: '#EE4C2C' },
      { name: 'TensorFlow', icon: 'tensorflow', color: '#FF6F00' },
      { name: 'Scikit-learn', icon: 'scikitlearn', color: '#F7931E' },
      { name: 'OpenCV', icon: 'opencv', color: '#5C3EE8' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'Node.js', icon: 'nodedotjs', color: '#339933' },
      { name: 'FastAPI', icon: 'fastapi', color: '#009688' },
      { name: 'Flask', icon: 'flask', color: '#AAAAAA' },
      { name: 'Django', icon: 'django', color: '#092E20' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
      { name: 'Supabase', icon: 'supabase', color: '#3FCF8E' },
    ],
  },
  {
    title: 'Frontend & Tools',
    items: [
      { name: 'React.js', icon: 'react', color: '#61DAFB' },
      { name: 'TailwindCSS', icon: 'tailwindcss', color: '#06B6D4' },
      { name: 'Streamlit', icon: 'streamlit', color: '#FF4B4B' },
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'Jupyter', icon: 'jupyter', color: '#F37626' },
    ],
  },
]

export const experience = [
  {
    role: 'Responsible AI Research Intern',
    org: 'Indian Council of Social Science Research (ICSSR)',
    location: 'Tamil Nadu, India',
    period: 'Feb 2026 — Present',
    detail:
      'Audited public-sector AI systems for bias with Fairlearn and AIF360, built SHAP/LIME explainability pipelines, and shipped a full-stack fairness dashboard (Streamlit + PostgreSQL) plus the RAIGF governance framework across Tamil Nadu sites.',
    skills: ['Full Stack', 'XAI', 'Streamlit', 'PostgreSQL', 'Fairlearn'],
  },
  {
    role: 'Machine Learning Engineer Intern',
    org: 'Samsung PRISM',
    location: 'Bangalore, India (Remote)',
    period: 'Jan 2025 — Jan 2026',
    detail:
      'Built a self-correcting on-device AI stack (Gemma 2B + MediaPipe), optimized with TFLite quantization, and integrated it into a production edge pipeline with hot-swappable LoRA adapters for offline GenAI.',
    skills: ['Gemma', 'MediaPipe', 'TFLite', 'LoRA', 'Edge AI'],
  },
  {
    role: 'ML / DL Member',
    org: "CINTEL's Next-Gen AI",
    location: 'Chennai, India',
    period: 'Oct 2024 — Present',
    detail:
      'Shipping full-stack ML products with the community — models, APIs, and frontends that turn research ideas into demos people can use.',
    skills: ['Deep Learning', 'Full Stack', 'Product'],
  },
  {
    role: 'Technical Associate',
    org: 'Qwiklabs Developer Club SRMIST',
    location: 'Chennai, India',
    period: 'Feb 2024 — Present',
    detail:
      'Running cloud and full-stack developer workshops, labs, and technical sessions on campus.',
    skills: ['Cloud', 'Full Stack', 'Workshops'],
  },
]

export type Project = {
  title: string
  blurb: string
  href: string
  live: string | null
  accent: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Retrieva',
    blurb:
      'Full-stack hybrid retrieval system in Rust — ingest docs, BM25 + dense search, fusion/rerank, and serve results over REST/gRPC for RAG apps.',
    href: 'https://github.com/Aryakatoch17/Retrieva',
    live: null,
    accent: '#1fa37f',
    image: '/retrieva.jpg',
  },
  {
    title: 'FitSync',
    blurb:
      'Full-stack AI fitness product (React, Node, Supabase, MediaPipe, WebRTC) — real-time pose feedback, workouts, and gamified training in the browser.',
    href: 'https://github.com/Harshilmalhotra/fitsync-bajaj-finserv-hackathon',
    live: 'https://fitsync-six.vercel.app',
    accent: '#4f8cff',
    image: '/fitsync.png',
  },
  {
    title: 'Rozgaar Raksha',
    blurb:
      'Full-stack gig-worker insurance platform — React dashboard with live GPS, sensor fusion, coverage logic, and automated claim flows.',
    href: 'https://github.com/Harshilmalhotra/gig-insure',
    live: 'https://worker-rozgar-raksha.vercel.app/',
    accent: '#00e676',
    image: '/rozgaar-raksha.png',
  },
  {
    title: 'ECG Image → Signal',
    blurb:
      'Deep learning research pipeline (CNN-Transformer) that reconstructs digital ECG signals from clinical plots — Pearson r = 0.9720 on held-out data.',
    href: 'https://github.com/Aryakatoch17/ecg-image-to-signal',
    live: null,
    accent: '#ff6b6b',
    image: '/ecg.jpg',
  },
]
