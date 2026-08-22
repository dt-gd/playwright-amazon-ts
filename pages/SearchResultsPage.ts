import {Page} from '@playwright/test'

export class SearchResultsPage{
    
    readonly page:Page;

    constructor(page:Page){

        this.page = page
    }

    async openFirstResult(): Promise<Page>  {

        const popupPromise = this.page.waitForEvent('popup')
        await this.page.locator('.a-link-normal').first().click()

        const productPage = await popupPromise
        return productPage
    }

}