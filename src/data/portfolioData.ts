export interface ImpactCard {
  id: string
  icon: string
  title: string
  description: string
}
export interface Milestone {
  id: string
  year: string
  title: string
  description: string
  category: 'education' | 'certification' | 'award' | 'work'
}
export interface Specialty {
  id: string
  icon: string
  title: string
}
export interface Curiosity {
  id: string
  emoji: string
  text: string
}
export interface Hackathon {
  id: string
  name: string
  year: string
  result: string
  learnings: string
  technologies: string[]
}

export const IMPACT_CARDS: ImpactCard[] = [
  {
    id: 's1',
    icon: '🏆',
    title: 'Hackathons Nacionais e Internacionais',
    description: 'Participação em competições no Brasil e exterior, incluindo NASA Space Apps.',
  },
  {
    id: 's2',
    icon: '🛰️',
    title: 'NASA Space Apps Challenge – Finalista Regional',
    description: 'Reconhecimento internacional com projeto de Machine Learning em astronomia.',
  },
  {
    id: 's3',
    icon: '☁️',
    title: 'Especialização Multicloud',
    description: 'Certificações em AWS, Azure e Google Cloud.',
  },
  {
    id: 's4',
    icon: '🤖',
    title: 'Projetos em IA Generativa',
    description: 'Soluções práticas com LLMs, agentes inteligentes e aplicações reais.',
  },
  {
    id: 's5',
    icon: '📚',
    title: 'Aprendizado Contínuo',
    description: 'Mais de 35 cursos conquistados de forma autodidata e 4 certificações em Cloud.',
  },
  {
    id: 's6',
    icon: '💡',
    title: 'Inovação',
    description: 'Atuação em POCs e desenvolvimento de produtos de dados.',
  },
]

export const MILESTONES_DATA: Milestone[] = [
  {
    id: 'm1',
    year: '2016',
    title: 'Engenharia Química',
    description:
      'Início da graduação em Engenharia Química, desenvolvendo pensamento analítico e base matemática sólida.',
    category: 'education',
  },
  {
    id: 'm2',
    year: '2023',
    title: 'Certificações Cloud',
    description:
      'Início da obtenção de certificações em Cloud com voucher gratuito ganho através da participação em eventos.',
    category: 'education',
  },
  {
    id: 'm5',
    year: '2024',
    title: 'Transição de carreira',
    description:
      'Início do estágio e graduação em Ciência de Dados. Finalista regional do hackathon da NASA.',
    category: 'work',
  },
  {
    id: 'm8',
    year: '2025',
    title: 'NASA Space Apps 2025',
    description:
      'Finalista regional do hackathon da NASA, com projeto de Machine Learning usando dados do telescópio Kepler para identificar exoplanetas.',
    category: 'award',
  },

  {
    id: 'm6',
    year: '2026',
    title: 'Cientista de Dados Júnior',
    description:
      'Atuação como Cientista de Dados na Extreme Digital Solutions em produtos de dados e IA.',
    category: 'work',
  },
  {
    id: 'm9',
    year: '2026',
    title: 'Skip Challenge - 3º Lugar',
    description:
      'Terceiro lugar do hackathon da Adapta, com uma solução de IA para redução de desperdício agrícola.',
    category: 'award',
  },
  {
    id: 'm10',
    year: '2026',
    title: 'EpiHealthAI',
    description: 'Atuação voluntária como Cientista de Dados Júnior em IA para saúde.',
    category: 'work',
  },
  {
    id: 'm11',
    year: 'Hoje',
    title: 'Presente & Futuro',
    description:
      'Explorando IA Generativa, LLMs e Ciência de Dados, buscando aprendizado e realizando cursos.',
    category: 'work',
  },
]

export const SPECIALTIES_DATA: Specialty[] = [
  { id: 'sp1', icon: '📊', title: 'Data Science' },
  { id: 'sp2', icon: '🤖', title: 'IA Generativa' },
  { id: 'sp3', icon: '🧠', title: 'Machine Learning' },
  { id: 'sp4', icon: '💬', title: 'LLMs' },
  { id: 'sp5', icon: '⚡', title: 'AI Agents' },
  { id: 'sp6', icon: '📈', title: 'Data Analytics' },
  { id: 'sp7', icon: '📋', title: 'Dashboards' },
  { id: 'sp8', icon: '🔧', title: 'Data Pipelines' },
  { id: 'sp9', icon: '⚙️', title: 'Feature Engineering' },
  { id: 'sp10', icon: '🧪', title: 'POCs' },
  { id: 'sp11', icon: '☁️', title: 'Cloud Architecture' },
  { id: 'sp12', icon: '✍️', title: 'Prompt Engineering' },
]

export const CURIOSITIES_DATA: Curiosity[] = [
  { id: 'c1', emoji: '🌻', text: 'Ama girassóis' },
  { id: 'c2', emoji: '🤖', text: 'Apaixonada por IA Generativa' },
  { id: 'c3', emoji: '📚', text: 'Autodidata' },
  { id: 'c4', emoji: '🏆', text: 'Hackathons são seu hobby' },
  { id: 'c5', emoji: '🛰️', text: 'Fascinada por exploração espacial' },
  { id: 'c6', emoji: '☁️', text: 'Certificada nas principais clouds' },
  { id: 'c7', emoji: '🌎', text: 'Busca oportunidades gratuitas' },
  { id: 'c8', emoji: '💡', text: 'Sempre aprendendo algo novo' },
]

export const HACKATHONS_DATA: Hackathon[] = [
  {
    id: 'h1',
    name: 'Hackatour Cataratas',
    year: '2023',
    result: 'Participante',
    learnings:
      'Turismo acessível, recomendações inteligentes e trabalho em equipe multidisciplinar.',
    technologies: ['Python', 'Data Analysis', 'APIs'],
  },
  {
    id: 'h2',
    name: 'NASA Space Apps 2024',
    year: '2024',
    result: 'Finalista regional',
    learnings: 'Conexões terrestres, mudanças climáticas, educação e uso de dados abertos da NASA.',
    technologies: ['Figma', 'Miro', 'NASA Open Data'],
  },
  {
    id: 'h3',
    name: 'NASA Space Apps 2025',
    year: '2025',
    result: 'Finalista Regional',
    learnings: 'Machine Learning aplicado à astronomia, dados do telescópio Kepler e exoplanetas.',
    technologies: ['Python', 'LightGBM', 'scikit-learn', 'Kepler Data'],
  },
  {
    id: 'h4',
    name: 'Skip Challenge',
    year: '2025',
    result: '3º Lugar',
    learnings: 'IA para agricultura, redução de desperdício.',
    technologies: ['Plataforma Skip', 'Canva'],
  },
]
