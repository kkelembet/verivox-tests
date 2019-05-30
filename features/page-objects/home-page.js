import BasePage from './base-page';

class HomePage extends BasePage {

    get DSLButton() { return $('#mps-tab-5'); }
    get areaCodeField() {return browser.element('//div[1]/div/div[6]/form/div[2]/div[1]/input');}
    get option16Mbps() { return browser.element('//form/div[2]/div[2]/label/strong[contains(text(),"16")]'); }
    get compareNowButton() { return browser.element('//div[6]/form/div[2]/button'); }

    open() {
        super.open('https://www.verivox.de');
    }

    getHomePageUrl() {
        return browser.getUrl();
    }

    clickDSL() {
        this.DSLButton.click();
        browser.pause(3000);
    }

    click16MbpsOption() {
        this.option16Mbps.click();
        browser.pause(3000);
    }

    clickCompareNowButton() {
        this.compareNowButton.click();
        browser.pause(3000);
    }

}

export default new HomePage();