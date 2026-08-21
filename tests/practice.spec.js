import {test} from '@playwright/test';
// import { dir } from 'node:console';
// test('flipkart', async ({ page }) => {
//     await page.goto('https://www.flipkart.com/');
//     await page.goto('https://www.amazon.com/');
//     await page.waitForLoadState('domcontentloaded');
// });
test('flipkart Amazon', async ({browser}) => {
    const context = await browser.newContext({
        // recordVideo: {
        //     dir: './videos'
        // }
    });
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.goto('https://www.amazon.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.goBack();
    await page.url();
    const currentUrl = page.url();
    console.log(currentUrl);
});