import BasePage from './base-page';

class TariffDetailsPage extends BasePage {

    get price() {
        return $('.price');
    }
    get in5MinOnlineButton() {
        const selector = '//a[@class="responsive-label-txt offer-page-cta"]';
        return $$(selector);
    }
    get tariffName() {
        const selector = '//div[@class="tariff-details"]/h3';
        return $(selector);
    }
    get providerName() {
        const selector = '//strong[@data-description="providerName"]';
        return $(selector);
    }
    get priceDetails() {
        return $('.price-detail-tariff-name');
    }
    get costsAfter24Month() {
        return $('.costs-after-24-months');
    }

    numberOf5MinutesButtons() {
        let buttons = this.in5MinOnlineButton;
        return buttons.length;
    }

    waitForPageLoaded() {
        this.price.waitForVisible(5000);
    }

}

export default new TariffDetailsPage();