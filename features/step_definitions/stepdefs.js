import { Given, When, Then} from 'cucumber';
import HomePage from '../page-objects/home-page';
import ResultPage from '../page-objects/dsl-result-page';
import TariffDetailsPage from '../page-objects/tariff-details-page';
import { expect } from 'chai';
import 'babel-polyfill';

//Scenario 1

Given(/^the User is on www.verivox.de$/, () => {
    HomePage.openHomePage();
    let url = HomePage.getHomePageUrl();
    expect(url).to.equal('https://www.verivox.de/');
});

When(/^he is on the DSL calculator$/, () => {
    HomePage.clickDSL();
});

When(/^he enters prefix "([^"]*)" “Ihre Vorwahl” as 030 with 16 Mbit bandwidth selection$/, (code) => {;
    HomePage.setAreaCode(code);
    HomePage.click16MbpsOption();
});

When(/^clicks on the button labeled as "JETZT VERGLEICHEN"$/, () => {
    HomePage.clickCompareNowButton();
});

Then(/^he should be able see the Result List page with all the available Tariffs$/, () => {
    ResultPage.clickCloseButton();
    ResultPage.waitForPageLoaded();
    if(ResultPage.tariffDetailsButton.isExisting() === true) {
        expect(ResultPage.allVisibleResults()).to.equal(21);
    } else {
        console.log("16 Mbts tariff not avaliable in the area");
    }

});


//Scenario 2

Given(/^the User is on the DSL Result List$/, () =>  {
    ResultPage.open();
    ResultPage.waitForPageLoaded();
    expect(ResultPage.resultList.isExisting()).to.equal(true);
});

When(/^he selects one of the listed Tariffs$/, () =>  {
    ResultPage.tariffDetailsButtonClick();
    ResultPage.waitForTariffDetails();
    expect(ResultPage.tariffDetails.isExisting()).to.equal(true);

});

When(/^clicks on "mehr zum Tarif" button$/, () => {
    ResultPage.tariffDetailsOpenButtonClick();
});

Then(/^he should be able see the details of the selected Tariff$/, () => {
    TariffDetailsPage.waitForPageLoaded();
    expect(TariffDetailsPage.price.isExisting()).to.equal(true);
    expect(TariffDetailsPage.tariffName.isExisting()).to.equal(true);
    expect(TariffDetailsPage.providerName.isExisting()).to.equal(true);
    expect(TariffDetailsPage.priceDetails.isExisting()).to.equal(true);
    expect(TariffDetailsPage.costsAfter24Month.isExisting()).to.equal(true);
});

When(/^he should also see a button labeled as "In 5 Minuten online wechseln"$/, () =>  {
    expect(TariffDetailsPage.length5MinsButtons()).to.equal(2);
});


//Scenario 3

When(/^there are more than 20 tariffs available for the provided Vorwahl and bandwidth$/, function () {
    expect(ResultPage.allVisibleResults()).to.equal(21);
});

Then(/^the User should click a button labeled as "20 weitere laden"$/, function () {
    ResultPage.scrollDownToFooter();
    ResultPage.moreResultsClick();
});

Then(/^he or she clicks on this button$/, function () {
    if(ResultPage.allVisibleResults() > 21) {
        console.log('User clicked button');
    } else {
        console.log('There less then 21 result available');
    }
});

Then(/^the list should be appended with next 20 tariffs and so on until all Tariffs are loaded$/, function () {
    for(let i = 0; i < 10; i++) {
        ResultPage.scrollDownToFooter();
        if(ResultPage.moreResultsButton.isExisting() === true ){
            ResultPage.moreResultsClick();
        } else {
            console.log('There no more results available');
        }
    }

});


