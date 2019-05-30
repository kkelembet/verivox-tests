export default class BasePage {

    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.deleteCookie();
        browser.url(path);
    }

    wait(delay) {
        new Promise(resolve => setTimeout(resolve, delay));;
    }
}