import BasePage from './base-page';

class HomePage extends BasePage {

    get DSLButton() {
        return $('#mps-tab-5');
    }
    get areaCodeField() {
        const selector = '//div[1]/div/div[6]/form/div[2]/div[1]/input';
        return $(selector);
    }
    get option16Mbps() {
        const selector = '//form/div[2]/div[2]/label/strong[contains(text(), "16")]';
        return $(selector);
    }
    get compareNowButton() {
        const selector = '//div[6]/form/div[2]/button';
        return $(selector);
    }


    openHomePage() {
        super.setup();
        super.open('https://www.verivox.de');
    }

    getHomePageUrl() {
        return browser.getUrl();
    }

    clickDSL() {
        this.DSLButton.click();
    }

    setAreaCode(code) {
        this.areaCodeField.waitForVisible(5000);
        this.areaCodeField.setValue(code);
    }

    click16MbpsOption() {
       this.option16Mbps.click();
    }

    clickCompareNowButton() {
        this.compareNowButton.click();
    }

}

export default  new HomePage();