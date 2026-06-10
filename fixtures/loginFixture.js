import {test as base} from '@playwright/test'
import {SignIn} from '../pages/loginPage.js'
import userData from '../test_data/loginData.json'

export let test = base.extend({
    loginPage : async ({page}, use) => {
        let userLogin = new SignIn(page)
        await userLogin.appLaunch(userData.url)
        await userLogin.UserLogin(userData)
        await use(page)
    }
})