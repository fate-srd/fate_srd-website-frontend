import { describe, it, expect, beforeEach } from 'vitest';
import { absoluteUrl, formatDate } from '../../lib/utils';

describe('formatDate', () => {
  it('formats an ISO date for US locale', () => {
    expect(formatDate('2024-01-30T12:00:00.000Z')).toBe('January 30, 2024');
  });
});

describe('absoluteUrl', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_DRUPAL_BASE_URL = 'https://fate-srd.com';
  });

  it('builds a URL from the configured base URL', () => {
    expect(absoluteUrl('/fate-core')).toBe('https://fate-srd.com/fate-core');
  });
});
