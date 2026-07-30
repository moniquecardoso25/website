export interface TechCategory {
  id: string
  title: string
  icon: string
  items: string[]
}
export interface CompetencyGroup {
  id: string
  title: string
  icon: string
  skills: string[]
}
export interface CertificationGroup {
  id: string
  provider: string
  icon: string
  certifications: string[]
}

export const TECH_STACK: TechCategory[] = [
  { id: 't1', title: 'Linguagens', icon: '💻', items: ['Python', 'SQL'] },
  {
    id: 't2',
    title: 'Cloud',
    icon: '☁️',
    items: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Databricks'],
  },
  {
    id: 't3',
    title: 'IA',
    icon: '🤖',
    items: ['Langflow', 'LlamaIndex', 'IBM watsonx Orchestrate', 'Google AI Studio', 'LLMs'],
  },
  {
    id: 't4',
    title: 'Ferramentas',
    icon: '🛠️',
    items: ['Docker', 'Git', 'GitHub', 'Power BI', 'Jupyter Notebook', 'H2O Wave'],
  },
]

export const COMPETENCY_DATA: CompetencyGroup[] = [
  {
    id: 'ia',
    title: 'Desenvolvimento de Soluções em IA',
    icon: 'Brain',
    skills: ['Agentes de IA', 'LLMs', 'Chatbots', 'RAG', 'Prompt Engineering', 'IA Generativa'],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'Cloud',
    skills: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'],
  },
  {
    id: 'dev',
    title: 'Desenvolvimento',
    icon: 'Code',
    skills: ['Python', 'SQL', 'REST APIs', 'Git', 'Data Pipelines', 'Feature Engineering'],
  },
  {
    id: 'product',
    title: 'Produtos e Inovação',
    icon: 'Lightbulb',
    skills: [
      'POCs',
      'Design Thinking',
      'Data Analytics',
      'Dashboards',
      'Storytelling com Dados',
      'Apresentações em slides',
    ],
  },
]

export const CERTIFICATIONS_DATA: CertificationGroup[] = [
  {
    id: 'cert1',
    provider: 'AWS',
    icon: '🟠',
    certifications: ['AWS Cloud Practitioner'],
  },
  {
    id: 'cert2',
    provider: 'Azure',
    icon: '🔵',
    certifications: ['Azure AI Fundamentals'],
  },
  {
    id: 'cert3',
    provider: 'Google Cloud',
    icon: '🔴',
    certifications: ['Google Cloud Generative AI Leader'],
  },
  {
    id: 'cert4',
    provider: 'IBM',
    icon: '🟣',
    certifications: [
      'watsonx Orchestrate Sales Foundation',
      'Watson Discovery Technical Sales Intermediate',
    ],
  },
]
