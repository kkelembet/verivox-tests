import { Given, When, Then } from 'cucumber';
import HomePage from '../page-objects/home-page';
import ResultPage from '../page-objects/dsl-result-page';
import { expect } from 'chai';
import 'babel-polyfill';

Given(/^the User is on www.verivox.de$/, () => {
    HomePage.open();
    let a = HomePage.getHomePageUrl();
    expect(a).to.equal('https://www.verivox.de/');

});

When(/^he is on the DSL calculator$/, () => {
    HomePage.clickDSL();
});

When(/^he enters prefix "([^"]*)" “Ihre Vorwahl” as 030 with 16 Mbits bandwidth selection$/, function (code) {
    HomePage.areaCodeField.setValue(code);
    HomePage.click16MbpsOption();
});

When(/^clicks on the button labeled as "JETZT VERGLEICHEN"$/, function () {
    HomePage.clickCompareNowButton();
});

Then(/^he should be able see the Result List page with all the available Tariffs$/, function () {
    expect(ResultPage.popup.getText()).to.contain('96% VERIVOX-KUNDEN SIND ZUFRIEDEN');
    browser.pause(3000);
    expect(ResultPage.resultList.isExisting());
    browser.pause(3000);
    expect(ResultPage.lenghtOfList()).to.equal(21);
});




// (follow scenario 1)

Given(/^the User is on the DSL Result List$/, () =>  {
    console.log();
});

When(/^he selects one of the listed Tariffs$/, () =>  {
});

When(/^clicks on "mehr zum Tarif" button$/, () => {
});

Then(/^he should be able see the details of the selected Tariff$/, () => {
});

When(/^he should also see a button labeled as "In 5 Minuten online wechseln"$/, () =>  {
});


// (follow scenario 1)

// Given(/^the User is on the DSL Result List$/, function () {
// });

When(/^there are more than 20 tariffs available for the provided Vorwahl and bandwidth$/, function () {
});

Then(/^the User should a button labeled as "20 weitere laden"$/, function () {
});

Then(/^he or she clicks on this button$/, function () {
});

Then(/^the list should be appended with next 20 tariffs and so on until all Tariffs are loaded$/, function () {
});


