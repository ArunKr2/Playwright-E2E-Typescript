import {Page,Locator} from '@playwright/test'




export class LoginPage{

    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly LoginBtn:Locator;


    constructor(page:Page){
        this.page=page;
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.LoginBtn = page.locator("#submit");
    }


    async open(){
        await this.page.goto('/practice-test-login/');
    }


    async login(username:string,password:string){

        await this.username.fill(username);
        await this.password.fill(password);
        await this.LoginBtn.click();
        
    }
}