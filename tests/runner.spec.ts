import {test,expect}from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';

import loginData from '../utils/testData.json'




test.beforeEach(async({page})=>{

    const obj = new LoginPage(page);

    await obj.open();

    const { username, password } = loginData.login;
    await obj.login(username,password);
})


test("HomePage action", async({page})=>{

    const obj = new HomePage(page);

    await obj.Adminsection();

})