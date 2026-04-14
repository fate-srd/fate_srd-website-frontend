import { test, expect } from '@playwright/test';

test('home links to products page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Games & Products' }).click();
  await expect(page).toHaveURL(/\/products$/);
  await expect(
    page.getByRole('heading', { name: 'Games & Products' }),
  ).toBeVisible();
});
