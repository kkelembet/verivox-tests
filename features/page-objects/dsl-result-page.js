import BasePage from './base-page';

class ResultPage extends BasePage {

    get closeSplashButton() {
        return $('.telco-close-splash');
    }
    get availableResultsList() {
        const selector = '//fieldset/ul/li';
        return $$(selector);
    }
    get tariffDetailsButton() {
        const selector = '#broadbandResultListContainer > fieldset > ul > li:nth-child(2) > div.products-table-full-width.result-table > div.content > div.rating-cta-details > span';
        return $(selector);
    }
    get tariffDetails() {
        return $('.tariff-details-container');
    }
    get openTariffDetailButton() {
        const selector = '#broadbandResultListContainer > fieldset > ul > li:nth-child(2) > div.products-table-full-width.result-table > div.content > div:nth-child(1) > div.product-order > div:nth-child(2) > div > button';
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
        this.closeSplashButton.waitForVisible(10000);
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

    scrollToButtonTariffDetails() {
        super.scroll(this.tariffDetailsButton.selector);
    }

    scrollToButtonTariffDetailsOpen() {
        super.scroll(this.openTariffDetailButton.selector);
    }

    waitForButtonMoreResults() {
        this.moreResultsButton.waitForVisible(5000);
    }

    moreResultsClick() {
        this.waitForButtonMoreResults();
        this.moreResultsButton.click();
    }

    waitForResults() {
        this.resultList.waitForVisible(10000);
    }

    waitForNewResults(newResults) {
        this.waitUntil(() => {
            return this.allVisibleResults() > newResults;
        }, 15000);
    }

}

export default new ResultPage();