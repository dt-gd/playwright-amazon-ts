import {test, expect} from '@playwright/test'

test('Amazon Home Page', async ({page}) =>
{
    await page.goto('https://www.amazon.in')

    await expect(page).toHaveTitle(/Amazon/i)
})