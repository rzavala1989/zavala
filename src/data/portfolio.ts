export interface PortfolioItem {
  slug: string;
  label: string;
  title: string;
  plate?: string;
  question?: string;
  description: string;
  meta?: string;
  metrics?: string;
  stack: string;
  sourceUrl: string;
  liveLabel?: string;
  liveUrl?: string;
  image?: string;
  kind: 'project' | 'lab';
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'enroll',
    label: 'Distributed system',
    title: 'Enroll',
    plate: 'Plate I',
    description:
      'Course registration system engineered for registration-day concurrency and data integrity. Built as a pnpm monorepo with a NestJS API and Next.js web application. PostgreSQL row-level locks serialize capacity checks and prevent over-enrollment. Redis-backed BullMQ workers handle waitlist promotion, while an audit outbox delivers committed events to MongoDB. Grafana k6 and Testcontainers cover load and concurrency behavior.',
    stack: 'Next.js 16 · NestJS 11 · Prisma · PostgreSQL · Redis · MongoDB · BullMQ · Turborepo',
    sourceUrl: 'https://github.com/rzavala1989/enroll',
    image: '/images/enroll-preview.png',
    kind: 'project',
  },
  {
    slug: 'nomadhood',
    label: 'Full-stack platform',
    title: 'Nomadhood',
    plate: 'Plate II',
    description:
      'Neighborhood intelligence platform for digital nomads. Seven external APIs feed a unified neighborhood profile covering walkability, rent, crime, economics, events, news, and imagery. A cosine-similarity recommendation engine learns from review history across six lifestyle dimensions. Community ratings and objective data feed composite scoring, while a news pipeline classifies signals and surfaces sentiment-based risk alerts. The application includes 19 Prisma models, 54 tRPC procedures, and three access tiers.',
    stack: 'Next.js 15 · React 19 · tRPC v11 · Prisma 6 · PostgreSQL · MapLibre GL · Zod · Bun',
    liveLabel: 'Live app',
    liveUrl: 'https://nomadhood.vercel.app',
    sourceUrl: 'https://github.com/rzavala1989/nomadhood',
    image: '/images/nomadhood-preview.png',
    kind: 'project',
  },
  {
    slug: 'blaqjaq',
    label: 'Game engine and 3D',
    title: 'Blaqjaq',
    plate: 'Plate III',
    description:
      '3D blackjack with a 1951 Flamingo-era film noir aesthetic. The game engine is a pure reducer with zero React dependencies: 782 lines, 14 action types, and complete insurance, surrender, and split mechanics. A basic-strategy evaluator and session analytics track decisions across hard, soft, and pair hands. The React Three Fiber scene uses five GLTF models, ACES filmic tone mapping, and procedural Web Audio API effects. Its deployed production delivery path is measured with k6, Grafana, and InfluxDB.',
    metrics: '500 VUs · 59,635 requests · 320 req/s · 100% HTTP 200 · 0% failures · p95 62 ms · p99 101 ms',
    stack: 'React 19 · TypeScript · Three.js · React Three Fiber · Vitest · Vite 6 · k6 · Grafana · InfluxDB',
    liveLabel: 'Play live',
    liveUrl: 'https://blaqjaq.vercel.app',
    sourceUrl: 'https://github.com/rzavala1989/blaqjaq',
    image: '/images/blaqjaq-preview.png',
    kind: 'project',
  },
  {
    slug: 'emergency-lifeline-auditor',
    label: 'Civic data · Hackathon build',
    title: 'Emergency Lifeline Auditor',
    question: 'When the next disaster hits, can this county hear the warning and move?',
    description:
      'Five federal datasets joined on county FIPS feed derived metrics for digital alert risk, daytime population surge, expected impact, and power-dependent residents. A zoomable choropleth, severity-banded table, map legend, and per-county dossier share one color scale. Every filter and selection serializes to the URL so an analyst can send a colleague the exact view.',
    meta: '3,144 counties · 5 federal datasets · 6 derived metrics',
    stack: 'Next.js 16 · React 19 · TypeScript · TanStack Table · react-simple-maps · Vitest',
    liveLabel: 'Live app',
    liveUrl: 'https://ricardo-svi-tool.vercel.app',
    sourceUrl: 'https://github.com/rzavala1989/ricardo-svi-tool',
    kind: 'lab',
  },
];

export const projects = portfolioItems.filter((item) => item.kind === 'project');
export const experiments = portfolioItems.filter((item) => item.kind === 'lab');
