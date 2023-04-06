import { test, expect } from '@playwright/test';

test.describe('Top Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  test('exist about button', async ({ page }) => {
    const aboutButton = page.locator('data-testid=top-page_go-to-about-page'); // ※
    expect(aboutButton).toHaveCount(1);
    await expect(aboutButton).toHaveText('Aboutページへ移動');
  });

  test('go to about page', async ({ page }) => {
    const aboutButton = page.locator('data-testid=top-page_go-to-about-page'); // ※
    await aboutButton.click();
    await expect(page).toHaveURL('./about');
  });
});
