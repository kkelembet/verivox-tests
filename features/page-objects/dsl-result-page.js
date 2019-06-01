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
        return $$(selector);
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
        const selector = '#verivoxBroadbandCalculatorContent > div.products-table-full-width.vx-broadband-tooltip-container > p.pagination-area > button';
        return $(selector);
    }

    get resultList() {
        return $('.resultlist-headline');
    }

    openDSLResultsPage() {
        super.open('https://www.verivox.de/internet-vergleich/internetundtelefon/?Prefix=089&speed=16000#/');
    }

    clickCloseButton() {
        this.closeSplashButton.waitForVisible(5000);
        this.closeSplashButton.click();
    }

    allVisibleResults() {
        let results = this.availableResultsList;
        return results.length;
    }

    tariffDetailsButtonClick() {
        this.tariffDetailsButton.click();
    }

    waitForTariffDetails() {
        this.tariffDetails.waitForVisible(5000);
    }

    tariffDetailsOpenButtonClick() {
        this.openTariffDetailButton.click();
    }

    scrollToButtonMoreResults() {
        super.scroll(this.moreResultsButton.selector);
    }

    moreResultsClick() {
        this.moreResultsButton.waitForVisible(5000);
        this.moreResultsButton.click();
    }

    waitForPageLoaded() {
        this.resultList.waitForVisible(5000);
    }

    browserPause() {
        super.pause(3000);
    }

}

export default new ResultPage();