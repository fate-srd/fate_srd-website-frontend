import { test, expect } from '@playwright/test';

test('home links to products page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Games & Products' }).click();
  await expect(page).toHaveURL(/\/products$/);
  await expect(
    page.getByRole('heading', { name: 'Games & Products' }),
  ).toBeVisible();
});

test('publication landing renders title and sidebar', async ({ page }) => {
  await page.goto('/fate-core');
  await expect(
    page.getByRole('heading', { name: 'Fate Core', level: 1 }),
  ).toBeVisible();
  await expect(page.locator('#main-content')).toBeVisible();
  await expect(page.locator('#publication-menu')).toBeVisible();
});

test('skip link targets main content', async ({ page }) => {
  await page.goto('/fate-core');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toHaveAttribute('href', '#main-content');
});

test('node id path redirects away from /node/', async ({ page }) => {
  const response = await page.goto('/node/1', {
    waitUntil: 'domcontentloaded',
  });
  expect(response).not.toBeNull();
  await expect(page).not.toHaveURL(/\/node\/1$/);
});
