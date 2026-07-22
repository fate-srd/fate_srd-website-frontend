import { describe, it, expect } from 'vitest';
import publicationsContent from '../../assets/data/publications-content';

describe('publications content', () => {
  it('lists all publication landing slugs', () => {
    const slugs = Object.keys(publicationsContent);
    expect(slugs).toEqual(
      expect.arrayContaining([
        'fate-core',
        'fate-accelerated',
        'ihunt',
        'odds-and-ends',
        'war-of-ashes',
      ]),
    );
    expect(slugs).toHaveLength(17);
  });

  it('includes title and description for Fate Core', () => {
    expect(publicationsContent['fate-core'].title).toBe('Fate Core');
    expect(publicationsContent['fate-core'].description).toContain('Fate Core');
  });

  it('uses iHunt ruleBook for the ihunt landing', () => {
    expect(publicationsContent.ihunt.ruleBook).toBe('iHunt');
  });
});
