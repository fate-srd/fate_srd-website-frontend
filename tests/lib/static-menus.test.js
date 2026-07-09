import { describe, it, expect } from 'vitest';
import {
  getStaticMenuByValue,
  toMenuMachineName,
} from '../../lib/static-menus';
import { absoluteSiteUrl, stripHtml } from '../../lib/utils';

describe('toMenuMachineName', () => {
  it('prefixes most rule books with menu-', () => {
    expect(toMenuMachineName('Fate Core')).toBe('menu-fate-core');
    expect(toMenuMachineName('Atomic Robo')).toBe('menu-atomic-robo');
  });

  it('maps Odds and Ends to menu-odds-ends', () => {
    expect(toMenuMachineName('Odds and Ends')).toBe('menu-odds-ends');
  });

  it('omits the menu- prefix for selected toolkits', () => {
    expect(toMenuMachineName('Fate Horror Toolkit')).toBe(
      'fate-horror-toolkit',
    );
    expect(toMenuMachineName('Fate Accessibility Toolkit')).toBe(
      'fate-accessibility-toolkit',
    );
    expect(toMenuMachineName('Fate Space Toolkit')).toBe('fate-space-toolkit');
  });
});

describe('getStaticMenuByValue', () => {
  it('returns a populated tree for Fate Core', () => {
    const menu = getStaticMenuByValue('Fate Core');
    expect(Object.keys(menu).length).toBeGreaterThan(0);
  });

  it('returns an object for Odds and Ends', () => {
    const menu = getStaticMenuByValue('Odds and Ends');
    expect(menu).toBeTypeOf('object');
  });
});

describe('seo helpers', () => {
  it('strips HTML tags from descriptions', () => {
    expect(stripHtml('<p>Hello <strong>world</strong></p>')).toBe(
      'Hello world',
    );
  });

  it('builds absolute site URLs', () => {
    expect(absoluteSiteUrl('/fate-core')).toBe(
      'https://fate-srd.com/fate-core',
    );
    expect(absoluteSiteUrl('/')).toBe('https://fate-srd.com');
  });
});
