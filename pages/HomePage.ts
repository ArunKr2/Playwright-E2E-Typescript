import { Page,Locator,expect } from "@playwright/test";


export class HomePage{


    readonly page:Page;
    readonly home_btn:Locator;


    constructor(page:Page){
        this.page = page;
        this.home_btn = page.locator("//a[text()='Home']")

    }


    async Adminsection(){

        await this.page.waitForLoadState("networkidle");
        await expect (this.home_btn).toBeVisible();
        await this.home_btn.click();
    }

}