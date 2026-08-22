import {expect, test} from '@playwright/test'

test('Search product', async ({page}) => {

    await page.goto('https://www.amazon.in/')

    const continueShoppingButton = page.getByRole('button', {name: 'Continue shopping'})

    if (await continueShoppingButton.waitFor({state: 'visible', timeout: 5000}).then(() => true).catch(() => false)) {
        await continueShoppingButton.click()
    }

    const searchBox = page.getByPlaceholder('Search Amazon.in')

    await searchBox.fill('wireless mouse')

    await searchBox.press('Enter')

    await expect(page).toHaveURL(/k=wireless/)
})