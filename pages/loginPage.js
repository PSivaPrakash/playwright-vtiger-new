export class SignIn
{
constructor(page)
{
    this.page = page
    this.userNameField = page.getByPlaceholder('Username').first()
    this.passwordField = page.getByPlaceholder('Password').first()
    this.loginButtonField = page.getByRole('button', {name: 'Sign in'})
}

async appLaunch(browser)
{
    await this.page.goto(browser)
}

async UserLogin(userData)
{
    await this.userNameField.fill(userData.userName)
    await this.passwordField.fill(userData.password)
    await this.loginButtonField.click()
}
}