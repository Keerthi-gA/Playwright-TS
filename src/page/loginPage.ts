import {Page} from 'playwright';


export class LoginPage{
    private page:Page;
    private usernameInput='#user-name';
    private passwordInput='#password';
    private loginButton='#login-button';

    constructor(page:Page){
        this.page=page;
    }
    async navigate(){
        const url = process.env.url;
        if (!url) throw new Error('Environment variable "url" is not set.');
        await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    }

    async enterUsername(){
        const username = process.env.username;
    if (!username) throw new Error('Environment variable "username" is not set.');
    await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(){
        const password = process.env.password;
    if (!password) throw new Error('Environment variable "password" is not set.');
    await this.page.fill(this.passwordInput, password);
    }
    async clickLogin(){
        await this.page.click(this.loginButton);
    }
    async isInventoryListVisible(): Promise<boolean> {
    return await this.page.isVisible('.inventory_list');
  }
}