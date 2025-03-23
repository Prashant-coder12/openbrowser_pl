import { Text } from '@playwright/test';
test('Open browser',async ({page})=>{   
await page.goto('https://www.demoblaze.com/');
const pagetitle=page.title();
console.log("this is title",pagetitle);
await page.close();

})
