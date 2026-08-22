import {Page} from '@playwright/test'

export class ProductPage{
    
    readonly page:Page
    
    constructor(page:Page){
        this.page = page
    }

    async addToCart(): Promise<void>{

        await this.page.getByRole('button', {name: 'Add to cart'}).click()
    }

    async goToCart(): Promise<void>{

        await this.page.locator('#sw-gtc').getByRole('link', {name: 'Go to Cart'}).click()
    }
}