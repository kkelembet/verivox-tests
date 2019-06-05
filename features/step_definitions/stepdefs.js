import { Given, When, Then} from 'cucumber';
import HomePage from '../page-objects/home-page';
import ResultPage from '../page-objects/dsl-result-page';
import TariffDetailsPage from '../page-objects/tariff-details-page';
import { expect } from 'chai';

//Scenario 1

Given(/^the User is on www.verivox.de$/, () => {
    HomePage.openHomePage();
    let url = HomePage.getHomePageUrl();
    expect(url).to.equal('https://www.verivox.de/');
});

When(/^he is on the DSL calculator$/, () => {
    HomePage.clickDSL();
});

When(/^he enters prefix “Ihre Vorwahl” as "([^"]*)" with 16 Mbit bandwidth selection$/, (code) => {
    HomePage.setAreaCode(code);
    HomePage.click16MbpsOption();
});

When(/^clicks on the button labeled as "JETZT VERGLEICHEN"$/, () => {
    HomePage.clickCompareNowButton();
});

Then(/^he should be able see the Result List page with all the available Tariffs$/, () => {
    ResultPage.clickCloseButton();
    ResultPage.waitForResults();
    if(ResultPage.tariffDetailsButton.isExisting() === true) {
        expect(ResultPage.allVisibleResults()).to.equal(21);
    } else {
        console.log("16 Mbts tariff not avaliable in the area");
    }

});


//Scenario 2

Given(/^the User is on the DSL Result List$/, () =>  {
    ResultPage.openDSLResultsPage();
    ResultPage.waitForResults();
    expect(ResultPage.resultList.isExisting()).to.equal(true);
});

When(/^he selects one of the listed Tariffs$/, () =>  {
    ResultPage.scrollToButtonTariffDetails();
    ResultPage.tariffDetailsButtonClick();
    ResultPage.waitForTariffDetails();
    expect(ResultPage.tariffDetails.isExisting()).to.equal(true);

});

When(/^clicks on "mehr zum Tarif" button$/, () => {
    ResultPage.scrollToButtonTariffDetailsOpen();
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
    expect(TariffDetailsPage.numberOf5MinutesButtons()).to.equal(2);
});


//Scenario 3

When(/^there are more than 20 tariffs available for the provided Vorwahl and bandwidth$/, () => {
    expect(ResultPage.allVisibleResults()).to.equal(21);
});

Then(/^the User should see a button labeled as "20 weitere laden"$/, () => {
    ResultPage.scrollToButtonMoreResults();
    ResultPage.waitForButtonMoreResults();
    expect(ResultPage.moreResultsButton.isVisible()).to.equal(true);
});

Then(/^he or she clicks on this button$/, () => {
    let resultsCount = ResultPage.allVisibleResults();
    ResultPage.moreResultsClick();
    ResultPage.waitForNewResults(resultsCount);
    ResultPage.scrollToButtonMoreResults();
});

Then(/^the list should be appended with next 20 tariffs and so on until all Tariffs are loaded$/, () => {
    let isMoreButtonVisible = ResultPage.moreResultsButton.isVisible();
    while (isMoreButtonVisible === true) {
        ResultPage.scrollToButtonMoreResults();
        let resultsCount = ResultPage.allVisibleResults();
        ResultPage.moreResultsClick();
        ResultPage.waitForNewResults(resultsCount);
        isMoreButtonVisible = ResultPage.moreResultsButton.isVisible();
    }
});


