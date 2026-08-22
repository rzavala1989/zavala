export interface PortfolioItem {
  slug: string;
  label: string;
  title: string;
  plate?: string;
  question?: string;
  description: string;
  meta?: string;
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
      'Registration system built around one hard invariant: limited-capacity sections cannot overfill under concurrent writes. PostgreSQL row locks own the capacity check; a transactional outbox keeps waitlist and audit work outside the request path.',
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
      'Neighborhood intelligence platform that normalizes external location data into comparable profiles, then matches user preferences with multidimensional similarity instead of collapsing everything into a single weighted score.',
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
      '3D blackjack with the game rules extracted into a pure TypeScript state machine. React and Three.js render state; the engine stays independently testable and free of UI timing.',
    stack: 'React 19 · TypeScript · Three.js · React Three Fiber · Vitest · Vite 6',
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
      'County-level emergency-readiness analysis built by reconciling federal datasets on FIPS, centralizing derived risk signals, and keeping map, table, filters, and shareable URL state synchronized.',
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
