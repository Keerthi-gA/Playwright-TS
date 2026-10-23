import {After,AfterAll, AfterStep, Before, BeforeAll, ITestCaseHookParameter, setDefaultTimeout,Status} from '@cucumber/cucumber';
import {Browser,BrowserContext, chromium,Dialog, Page} from '@playwright/test';
import { promisify } from 'util';
import * as fs from 'fs';
import {Console} from 'console';
import * as dotenv from 'dotenv';


let browser:Browser;
let context:BrowserContext;
let page:Page;

const sleep =promisify(setTimeout);
dotenv.config();
setDefaultTimeout(6000000);
var step=0;

BeforeAll(async function(){
    browser=await chromium.launch({headless:true });
    
        context=await browser.newContext({
             recordVideo:{
            dir:`report/videos`,
             },
            });
                 page=await context.newPage();
});

Before(async function(scenario:ITestCaseHookParameter){
    await page.waitForLoadState();
    let loginUrl;
    const name=scenario.pickle.name;
    const tag=scenario.pickle.tags.map((tag)=>tag.name);
        
});

AfterStep(async function({result,pickle}){
    if (result.status===Status.FAILED){ }
    else if (result.status===Status.PASSED){}
    console.log(result.status);
});

After(async function({result,pickle}){
    context.clearCookies();
    step=0;
});
AfterAll(async function(){
    await context.clearCookies();
    await page.close();
    await context.close();
    await browser.close();
});
export{page,browser,context};