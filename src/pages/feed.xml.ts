import rss from '@astrojs/rss';
import { portfolioItems } from '../data/portfolio';

export async function GET(context: any) {
  const noteMetadata: Record<string, { title: string, pubDate: Date, description: string }> = {
    enroll: {
      title: 'Enroll: How I Stopped a Registration-Day Meltdown with PostgreSQL Row Locks',
      pubDate: new Date('2025-01-15'),
      description: 'Course registration systems under high concurrency and preventing seat over-enrollment using PostgreSQL row locks.'
    },
    nomadhood: {
      title: 'Nomadhood: Fixing Neighborhood Recommendations with pgvector',
      pubDate: new Date('2025-01-15'),
      description: 'Building multi-dimensional location recommendation models using PostgreSQL vector embeddings and cosine similarity.'
    },
    blaqjaq: {
      title: 'Blaqjaq: Decoupling Game State from React with a Pure Reducer',
      pubDate: new Date('2025-01-15'),
      description: 'Architecting a deterministic zero-dependency state machine for 3D web games to decouple rendering from game mechanics.'
    },
    'emergency-lifeline-auditor': {
      title: 'Emergency Lifeline Auditor: Unifying Federal Datasets for Disaster Response',
      pubDate: new Date('2025-01-15'),
      description: 'Reconciling disparate federal datasets using county FIPS codes to generate unified hazard vulnerability indices.'
    }
  };

  const items = portfolioItems
    .filter(item => noteMetadata[item.slug])
    .map(item => ({
      title: noteMetadata[item.slug].title,
      pubDate: noteMetadata[item.slug].pubDate,
      description: noteMetadata[item.slug].description,
      link: `/work/${item.slug}/#engineering-notes`,
    }));

  return rss({
    title: 'Ricardo Zavala | Engineering Notes',
    description: 'Technical writing and engineering notes by Ricardo Zavala on distributed systems, data pipelines, and UI architecture.',
    site: context.site || 'https://zavala.pro',
    items,
    customData: `<language>en-us</language>`,
  });
}
