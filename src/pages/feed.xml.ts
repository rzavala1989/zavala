import rss from '@astrojs/rss';
import { portfolioItems } from '../data/portfolio';

export async function GET(context: any) {
  const noteMetadata: Record<string, { title: string, pubDate: Date, description: string }> = {
    enroll: {
      title: 'Enroll: How I Stopped a Registration-Day Meltdown with PostgreSQL Row Locks',
      pubDate: new Date('2025-01-15'),
      description: 'Registration day at a university is a thundering herd. 1,000 students, 40 seats, one second.'
    },
    nomadhood: {
      title: 'Nomadhood: Fixing Neighborhood Recommendations with pgvector',
      pubDate: new Date('2025-01-15'),
      description: 'Digital nomads don\'t want "good neighborhoods." They want their neighborhoods — the ones that feel like the last place they loved.'
    },
    blaqjaq: {
      title: 'Blaqjaq: Decoupling Game State from React with a Pure Reducer',
      pubDate: new Date('2025-01-15'),
      description: 'A 3D blackjack game lives or dies on feel. If the game engine is tied to React\'s render cycle, a single state bug crashes the entire scene.'
    },
    'emergency-lifeline-auditor': {
      title: 'Emergency Lifeline Auditor: Unifying Federal Datasets for Disaster Response',
      pubDate: new Date('2025-01-15'),
      description: 'When a hurricane is 48 hours out, emergency managers don\'t have time to hunt through five federal websites.'
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
