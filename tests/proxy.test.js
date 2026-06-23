import { describe, it, expect, vi, afterEach } from 'vitest';
import { resolveNodeAlias } from '../src/proxy';

describe('resolveNodeAlias', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns fetched alias when Drupal responds', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue({
          data: [{ attributes: { path: { alias: '/fate-core' } } }],
        }),
      }),
    );

    await expect(resolveNodeAlias('123')).resolves.toBe('/fate-core');
  });

  it('falls back to root when fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')));
    await expect(resolveNodeAlias('123')).resolves.toBe('/');
  });
});
