import BasePage from './base-page';

class ResultPage extends BasePage {

    get closeSplashButton() {
        return $('.telco-close-splash');
    }
    get resultList() {
        return $('#verivoxBroadbandCalculator');
    }
    get availableResultsList() {
        const selector = '//fieldset/ul/li';
        return $(selector);
    }
    get tariffDetailsButton() {
        return $('.tariff-detail');
    }
    get tariffDetails() {
        return $('.tariff-details-container');
    }
    get openTariffDetailButton() {
        const selector = '//resultlist-position-zero/div/div[1]/div[2]/div[1]/div[4]/div[2]/div/button';
        return $(selector);
    }
    get moreResultsButton() {
        const selector = '//*[@id="verivoxBroadbandCalculatorContent"]/div[3]/p[1]/button';
        return $(selector);
    }

    get resultList() {
        return $('.resultlist-headline');
    }

    get appFooter() {
        return $('.app-footer');
    }

    open() {
        super.open('https://www.verivox.de/internet-vergleich/internetundtelefon/?Prefix=089&speed=16000#/');
    }

    clickCloseButton() {
        this.closeSplashButton.waitForVisible(5000);
        this.closeSplashButton.click();
    }

    allVisibleResults() {
        let list = browser.getValue('//fieldset/ul/li');
        return list.length;
    }

    tariffDetailsButtonClick() {
        this.tariffDetailsButton.click();
        super.scroll(0, 200);
    }

    waitForTariffDetails() {
        this.tariffDetails.waitForVisible(5000);
    }

    tariffDetailsOpenButtonClick() {
        this.openTariffDetailButton.click();
    }

    scrollDownToFooter() {
        //TODO: add real navigation
        super.scroll(0, 3500);
    }

    moreResultsClick() {
        this.moreResultsButton.waitForVisible(5000);
        this.moreResultsButton.click();
    }

    waitForPageLoaded() {
        this.resultList.waitForVisible(5000);
    }

}

export default new ResultPage();