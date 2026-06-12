export class Leads
{
    constructor(page)
    {
        this.page = page
        this.hamburgerButtonField = page.locator('div[class="row app-navigator"]').first()
        this.marketingTabField = page.getByText(' MARKETING')
        this.leadsTabField = page.getByRole('link', {name: "Leads"})
    }

    async initiateLead()
    {
        await this.hamburgerButtonField.click()
        await this.marketingTabField.click()
        await this.leadsTabField.click()
    }
}