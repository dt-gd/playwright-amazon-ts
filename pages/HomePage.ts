import {Page} from '@playwright/test'

export class HomePage{

    readonly page:Page

    constructor(page : Page){

        this.page = page
    }

    async gotoAmazonHome(){
        await this.page.goto('https://www.amazon.in/')
    }

    async search(term : string){

        const continueShoppingButton = this.page.getByRole('button', {name : 'Continue shopping'})

        if(await continueShoppingButton.waitFor({state: 'visible', timeout: 5000}).then(()=> true).catch(() => false)){

            await continueShoppingButton.click()
        }

        const searchBox = this.page.getByPlaceholder('Search Amazon.in')

        await searchBox.fill(term)

        await searchBox.press('Enter')
        
    }
}