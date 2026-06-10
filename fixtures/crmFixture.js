import {test as base} from '../fixtures/loginFixture.js'
import {Leads} from '../pages/LeadsPage.js'

export let test = base.extend({
    leadsPage: async ({loginPage}, use) => {
        let userLeads = new Leads(loginPage)
        await use(userLeads)
    }
})