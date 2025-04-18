export default class BasePage {

    constructor() {
        this.title = 'Verivox';
    }

    setup() {
        browser.windowHandleSize({width:1440,height:820});
        browser.deleteCookie();
    }

    open(path) {
        browser.url(path);
    }

    scroll(element){
        browser.scrollIntoView(element);
    }

    waitUntil(condition, time) {
        browser.waitUntil(() => {
            return condition()
        }, time);
    }
}