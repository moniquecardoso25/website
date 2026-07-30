export interface ProjectCase {
  problem: string
  context: string
  objective: string
  solution: string
  technologies: string[]
  architecture: string
  process: string
  learnings: string
  impact: string
  images: string[]
  links?: { label: string; url: string }[]
}
export interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  image: string
  case: ProjectCase
}
export interface Recommendation {
  id: string
  name: string
  role: string
  context: string
  summary: string
  avatar: string
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'NASA Space Apps 2025',
    subtitle: 'Exoplanetas com Machine Learning',
    tags: ['Machine Learning', 'LightGBM', 'Kepler', 'Python', '48h'],
    image: 'https://img.usecurling.com/p/600/400?q=space%20exoplanet&color=purple',
    case: {
      problem: 'Identificar exoplanetas em dados do telescópio Kepler com alta precisão.',
      context: 'NASA Space Apps Challenge 2025, desafio de 48 horas com dados astronômicos reais.',
      objective:
        'Construir um modelo de Machine Learning capaz de classificar exoplanetas a partir de curvas de luz.',
      solution:
        'Pipeline de dados com LightGBM para classificação, utilizando feature engineering em séries temporais.',
      technologies: ['Python', 'LightGBM', 'scikit-learn', 'Pandas', 'NumPy'],
      architecture:
        'Extração de dados → Feature Engineering → Treinamento LightGBM → Validação cruzada → Inferência.',
      process:
        'Análise exploratória, seleção de features, tuning de hiperparâmetros e validação em 48h.',
      learnings: 'Trabalho sob pressão, colaboração internacional, aplicação de ML em astronomia.',
      impact:
        'Finalista regional, modelo com métricas competitivas e potencial de aplicação científica.',
      images: ['https://img.usecurling.com/p/600/300?q=kepler%20telescope&color=purple'],
      links: [
        {
          label: 'Ver Projeto',
          url: 'https://www.spaceappschallenge.org/2025/find-a-team/lazaro/',
        },
      ],
    },
  },
  {
    id: 'p2',
    title: 'NASA Space Apps 2024',
    subtitle: 'Conexões Terrestres e Mudanças Climáticas',
    tags: ['Educação', 'Mudança Climática', 'NASA', 'Figma'],
    image: 'https://img.usecurling.com/p/600/400?q=earth%20climate&color=green',
    case: {
      problem: 'Conectar dados climáticos da NASA com educação para conscientização pública.',
      context: 'NASA Space Apps Challenge 2024, foco em mudanças climáticas e educação.',
      objective:
        'Criar uma plataforma educacional visualizando dados climáticos de forma acessível.',
      solution:
        'Protótipo interativo em Figma integrando dados abertos da NASA com narrativa educacional.',
      technologies: ['Figma', 'Miro', 'NASA Open Data'],
      architecture: 'Design thinking → Prototipação → Validação educacional.',
      process: 'Pesquisa de dados, wireframing, prototipação e apresentação em 48h.',
      learnings: 'Uso de dados abertos, design educacional, trabalho em equipe multidisciplinar.',
      impact: 'Projeto apresentado à comunidade NASA, contribuição para conscientização climática.',
      images: ['https://img.usecurling.com/p/600/300?q=climate%20education&color=green'],
      links: [
        {
          label: 'Ver Projeto',
          url: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/space6/?tab=project',
        },
      ],
    },
  },
  {
    id: 'p3',
    title: 'Skip Challenge',
    subtitle: 'DestinAI - IA para Redução de Desperdício Agrícola',
    tags: ['IA Generativa', 'Agricultura', '3º Lugar', 'Cloud'],
    image: 'https://img.usecurling.com/p/600/400?q=agriculture%20technology&color=green',
    case: {
      problem: 'Reduzir desperdício na agricultura através de IA generativa.',
      context: 'Skip Challenge, competição de IA com foco em impacto social.',
      objective:
        'Desenvolver DestinAI, solução que usa IA para otimizar destinação de recursos agrícolas.',
      solution: 'Plataforma com LLMs para análise e recomendação, integrada com APIs e Cloud.',
      technologies: ['Python', 'LLMs', 'Cloud', 'REST APIs'],
      architecture: 'Frontend → API Gateway → LLM Service → Database → Cloud Storage.',
      process: 'Ideação, desenvolvimento MVP, integração Cloud, apresentação e pitching.',
      learnings: 'Produto end-to-end, IA aplicada, pitch e apresentação para júri.',
      impact: '3º lugar na competição, solução com potencial de aplicação real.',
      images: ['https://img.usecurling.com/p/600/300?q=sustainable%20farming&color=green'],
      links: [{ label: 'Ver Projeto', url: 'https://destinai.goskip.app/' }],
    },
  },
  {
    id: 'p4',
    title: 'Hackatour Cataratas',
    subtitle: 'Turismo Acessível com Recomendação Inteligente',
    tags: ['Python', 'Data', 'Turismo', 'Recomendação'],
    image: 'https://img.usecurling.com/p/600/400?q=tourism%20waterfall&color=blue',
    case: {
      problem: 'Tornar o turismo mais acessível através de recomendações inteligentes.',
      context: 'Hackatour Cataratas, hackathon focado em turismo na região das Cataratas.',
      objective:
        'Sistema de recomendação de atrativos turísticos baseado em perfil e acessibilidade.',
      solution: 'Aplicação Python com análise de dados e algoritmo de recomendação personalizada.',
      technologies: ['Python', 'Data Analysis', 'APIs REST'],
      architecture: 'Coleta de dados → Análise → Recomendação → API → Interface.',
      process: 'Exploração de dados turísticos, modelagem, prototipação e teste.',
      learnings: 'Análise de dados turísticos, acessibilidade digital, trabalho em equipe.',
      impact: 'Solução com potencial de melhoria na experiência turística regional.',
      images: ['https://img.usecurling.com/p/600/300?q=accessible%20tourism&color=blue'],
    },
  },
  {
    id: 'p5',
    title: 'Análise de Dados de Vendas',
    subtitle: 'EDA, KPIs e Visualizações',
    tags: ['Python', 'EDA', 'KPIs', 'Feature Engineering'],
    image: 'https://img.usecurling.com/p/600/400?q=data%20analytics&color=orange',
    case: {
      problem: 'Extrair insights acionáveis de dados de vendas para tomada de decisão.',
      context: 'Projeto pessoal de portfólio aplicando técnicas de EDA e visualização.',
      objective: 'Realizar análise exploratória completa, calcular KPIs e criar visualizações.',
      solution: 'Notebook Python com EDA, feature engineering, KPIs e dashboards interativos.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      architecture: 'Carregamento → Limpeza → EDA → Feature Engineering → KPIs → Visualização.',
      process:
        'Análise exploratóra, identificação de padrões, engenharia de features e visualização.',
      learnings: 'Estatística aplicada, storytelling com dados, feature engineering.',
      impact: 'Insights visuais claros para suporte à decisão de negócios.',
      images: ['https://img.usecurling.com/p/600/300?q=sales%20dashboard&color=orange'],
    },
  },
]

export const RECOMMENDATIONS_DATA: Recommendation[] = [
  {
    id: 'r1',
    name: 'Emanuel',
    role: 'Arquiteto de Dados e IA',
    context: 'Líder técnico',
    summary:
      'Tive a grande honra de liderar a Monique desde sua experiência como estagiária até sua efetivação como Cientista de dados, promoção que foi fruto da sua enorme dedicação e esforço em superar adversidades e facilidade em traduzir ideias em implementações robustas. Excelente Profissional',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=1',
  },
  {
    id: 'r2',
    name: 'Débora',
    role: 'Engenheira de Dados',
    context: 'Colega de trabalho',
    summary:
      'Ela sempre demonstrou grande disposição para aprender e muito comprometimento em cada demanda que assumia. É uma pessoa educada, gentil e muito colaborativa. Busca constantemente se atualizar sobre novas tecnologias e é uma excelente profissional. Recomendo a Monique com confiança para qualquer equipe.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=2',
  },
  {
    id: 'r3',
    name: 'Rodrigo',
    role: 'Desenvolvedor',
    context: 'Líder técnico',
    summary:
      'Sempre pude contar com sua dedicação, competência e disposição para aprender coisas novas e aplicá-las com excelência. Além da capacidade técnica, é uma pessoa colaborativa, adaptável e engajada. É uma ótima adição a qualquer equipe; recomendo-a com tranquilidade.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=3',
  },
  {
    id: 'r4',
    name: 'David',
    role: 'Gerente de Delivery de Dados e IA',
    context: 'Líder',
    summary:
      'Tive o prazer de conhecer a Monique ainda estagiária, e desde o início sua dedicação e vontade de aprender já se destacavam. Foi gratificante acompanhar sua evolução técnica, especialmente com Python e novas tecnologias.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=4',
  },
  {
    id: 'r5',
    name: 'Raul',
    role: 'Cientista de Dados',
    context: 'Colega de Hackathon',
    summary:
      'Tive a oportunidade de trabalhar com a Monique no desenvolvimento do projeto vencedor do hackathon interno. Mesmo com o curto tempo de evento, ela se mostrou dedicada e rápida para se adaptar a um contexto novo e desafiador. Monique gosta de aprender e tem uma postura colaborativa.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=5',
  },
  {
    id: 'r6',
    name: 'Otto',
    role: 'Cientista de Dados',
    context: 'Colega de trabalho',
    summary:
      'Nossa atuação em pré-vendas e arquitetura de soluções ela demonstrou claramente as habilidades de estruturação, design e desenvolvimento ágil em diversos fornecedores e infraestruturas.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=6',
  },
  {
    id: 'r7',
    name: 'Ricardo',
    role: 'Cientista de Dados ',
    context: 'Colega de trabalho',
    summary:
      'Monique sempre demonstrou muito empenho, dedicação e comprometimento em tudo o que fazia.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=7',
  },
  {
    id: 'r8',
    name: 'Andressa',
    role: 'Gerente Tech',
    context: 'Colega',
    summary:
      'Monique é muito antenada quanto a eventos na área de tecnologia, super engajada e motivada.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=8',
  },
  {
    id: 'r9',
    name: 'Beatriz',
    role: 'Estudante multidisciplinar',
    context: 'Colega de Hackathon',
    summary:
      'Tive o prazer de participar do NASA Space Apps junto com a Monique. Ela é uma profissional extremamente empenhada, sempre disposta a participar de novos desafios e aprender cada vez mais.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=9',
  },
  {
    id: 'r10',
    name: 'Johnson',
    role: 'Consultor Sênior Microsoft',
    context: 'Instrutor',
    summary:
      'Ela é extremamente colaborativa, comunicativa, dedicada e inteligente. Recomendo para qualquer empresa que precise dos seus serviços.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=10',
  },
]
