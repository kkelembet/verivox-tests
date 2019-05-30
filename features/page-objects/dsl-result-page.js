import BasePage from './base-page';

class ResultPage extends BasePage {

    get popup() { return browser.element('//p[contains(text(),"96% VERIVOX-KUNDEN SIND ZUFRIEDEN")]'); }
    get resultList() { return $('#verivoxBroadbandCalculator'); }
    get avaliableResultsList() { return browser.elements('//fieldset/ul/li'); }


    lenghtOfList() {
        let list = this.avaliableResultsList;
        return list.value.length;
    }

}

export default new ResultPage();