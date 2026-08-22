import {expect, test} from '@playwright/test'
import { HomePage } from '../../pages/HomePage' 

test('Search product', async ({page}) => {

    const homePage = new HomePage(page)

    await homePage.gotoAmazonHome()
    await homePage.search('Wireless Mouse')
    await expect(page).toHaveURL(/k=wireless/i)
})