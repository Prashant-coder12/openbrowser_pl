import { Text } from '@playwright/test';
test('Open browser',async ({page})=>{
    
await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5km84u9k2k_e&adgrpid=155259813113&hvpone=&hvptwo=&hvadid=674842289479&hvpos=&hvnetw=g&hvrand=10144463994420963399&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061686&hvtargid=kwd-304880464215&hydadcr=14450_2316420&gad_source=1');
await page.locator('#twotabsearchtextbox').click();
await page.locator('#twotabsearchtextbox').fill('Iphone');
await page.locator('#nav-search-submit-button').click();
await page.locator("h2[aria-label='iPhone 16 Pro 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium']").click();
await page.locator('#add-to-cart-button').click();
await page.locator("span[id='attach-sidesheet-view-cart-button-announce']").click(); 





})