import { test } from '@playwright/test';

test('Demo test page', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form/');
    await page.locator('#firstName').fill('Sri');
    await page.locator('#lastName').fill('ram');
    await page.locator('#userEmail').fill('sriram@example.com');
    await page.getByRole('radio', { name: 'Female' }).check(); //css
    await page.locator('#userNumber').fill('987261381');
    await page.getByRole('checkbox', { name: 'Sports' }).check();
    await page.locator('//textarea[@id="currentAddress"]').fill('123 Main St, Anytown, USA');
    await page.locator('#submit').click();
    await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page has loaded
    await page.screenshot({ path: '.screenshots/demotaskscreenshot.png' });
});

// just added this comment to check whether latest code is updated in git.
