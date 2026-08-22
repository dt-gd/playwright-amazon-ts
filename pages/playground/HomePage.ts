import {Page} from '@playwright/test'

export class HomePage{
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }
    
    async gotoPlayground(){
        await this.page.goto('https://ecommerce-playground.lambdatest.io/')
    }

    async search(item: string){

        const searchBox = this.page.getByRole('textbox', {name: 'Search for Products'})

        await searchBox.fill(item)

    }

    async selectSuggestion(name: string){

        await this.page.locator('.dropdown-menu a').filter({hasText: name}).first().click()
    }
}