import {expect, test} from '@playwright/test'
import { HomePage } from '../../pages/HomePage' 
import { SearchResultsPage } from '../../pages/SearchResultsPage'
import { ProductPage } from '../../pages/ProductPage'
import { CartPage } from '../../pages/CartPage'

test('Add to cart', async ({page}) => {

    const homePage = new HomePage(page)
    const searchResultsPage = new SearchResultsPage(page)

    await homePage.gotoAmazonHome()
    await homePage.search('Macbook air m5')
    await expect(page).toHaveURL(/k=Macbook/i)

    const productsTab = await searchResultsPage.openFirstResult()

    const productPage = new ProductPage(productsTab)
    const cartPage = new CartPage(productsTab)

    await productPage.addToCart()
    await productPage.goToCart()

    await expect(cartPage.firstItemTitle()).toContainText(/macbook/i)
})
