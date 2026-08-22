import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/playground/HomePage";
import { ProductPage } from "../../pages/playground/ProductPage";
import { CartPage } from "../../pages/playground/CartPage";    

test('Add to cart test', async({page})=> { 

    const homePage = new HomePage(page)
    const prodPage = new ProductPage(page)
    const cartPage = new CartPage(page)

    await homePage.gotoPlayground()
    await homePage.search('iphone')
    await homePage.selectSuggestion('iphone')

    await prodPage.addToCart()
    await prodPage.viewCart()

    await expect(cartPage.content()).toContainText('iPhone')
})