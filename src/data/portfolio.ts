export interface TechLogo {
  name: string;
  src: string;
}

export const techLogoMap: Record<string, TechLogo> = {
  'next.js': { name: 'Next.js', src: '/logos/nextdotjs.svg' },
  'nextjs': { name: 'Next.js', src: '/logos/nextdotjs.svg' },
  'next.js 15': { name: 'Next.js', src: '/logos/nextdotjs.svg' },
  'next.js 16': { name: 'Next.js', src: '/logos/nextdotjs.svg' },
  'react': { name: 'React', src: '/logos/react.svg' },
  'react 19': { name: 'React', src: '/logos/react.svg' },
  'typescript': { name: 'TypeScript', src: '/logos/typescript.svg' },
  'postgresql': { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
  'postgres': { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
  'prisma': { name: 'Prisma', src: '/logos/prisma.svg' },
  'prisma 6': { name: 'Prisma', src: '/logos/prisma.svg' },
  'redis': { name: 'Redis', src: '/logos/redis.svg' },
  'mongodb': { name: 'MongoDB', src: '/logos/mongodb.svg' },
  'turborepo': { name: 'Turborepo', src: '/logos/turborepo.svg' },
  'trpc': { name: 'tRPC', src: '/logos/trpc.svg' },
  'trpc v11': { name: 'tRPC', src: '/logos/trpc.svg' },
  'maplibre': { name: 'MapLibre', src: '/logos/maplibre.svg' },
  'maplibre gl': { name: 'MapLibre', src: '/logos/maplibre.svg' },
  'zod': { name: 'Zod', src: '/logos/zod.svg' },
  'bun': { name: 'Bun', src: '/logos/bun.svg' },
  'three.js': { name: 'Three.js', src: '/logos/threedotjs.svg' },
  'react three fiber': { name: 'Three.js', src: '/logos/threedotjs.svg' },
  'vitest': { name: 'Vitest', src: '/logos/vitest.svg' },
  'k6': { name: 'k6', src: '/logos/k6.svg' },
  'tanstack': { name: 'TanStack', src: '/logos/tanstack.svg' },
  'tanstack table': { name: 'TanStack', src: '/logos/tanstack.svg' },
};

export function getTechLogos(stackString: string): TechLogo[] {
  if (!stackString) return [];
  const parts = stackString.split('·').map((p) => p.trim());
  const seen = new Set<string>();
  const results: TechLogo[] = [];

  for (const part of parts) {
    const key = part.toLowerCase();
    const match = techLogoMap[key];
    if (match && !seen.has(match.src)) {
      seen.add(match.src);
      results.push(match);
    }
  }
  return results;
}

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
      'Course registration system focused on keeping seat counts correct under concurrent enrollment. It combines a Next.js UI, NestJS API, PostgreSQL locking, background waitlist jobs, and an audit trail.',
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
      'Neighborhood discovery app for remote workers. It brings location signals into one comparison view and uses preference matching to surface places with a similar feel.',
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
      '3D blackjack with a film-noir presentation and a game engine isolated in a pure TypeScript reducer. A browser audit and 159 automated tests cover the playable experience; the production delivery path was also measured at 500 VUs with 0% request failures.',
    metrics: '500 VUs · 59,635 requests · 320 req/s · 100% HTTP 200 · 0% failures · p95 62 ms · p99 101 ms',
    stack: 'React 19 · TypeScript · Three.js · React Three Fiber · Vitest · Vite 8 · k6 · Grafana · InfluxDB',
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
      'A county-level disaster-readiness explorer built from public federal data. It brings risk indicators, a map, a table, and shareable filters into one operational view.',
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
