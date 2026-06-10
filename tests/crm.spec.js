import {test} from '../fixtures/crmFixture.js'
import {Leads} from '../pages/LeadsPage.js'

test('Lead Creation', async ({leadsPage}) => {
await leadsPage.initiateLead()
    
})