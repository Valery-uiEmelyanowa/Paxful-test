class LoadPage {
    constructor() {
        this.loadingBar = by.id('loading');
        this.resultDownload = by.css('#finish h4');
        this.buttonStart = by.buttonText('Start');
        this.firstLink = by.css('[href="/dynamic_loading/1"]');
        this.secondLink = by.css('[href="/dynamic_loading/2"]');
    }

    async loadingInformation() {
        const elm = await element(this.loadingBar);
        const button = await element(this.buttonStart);
        await button.click();
        await helpers.waitForNotVisible(elm);
    }

    async getLoadedInformation() {
        const elm = await element(this.resultDownload);
        await helpers.waitForVisible(elm);
        return elm.getText();
    }

    async isPresentStatusLoadingInformation() {
        const elm = await element(this.resultDownload);
        return elm.isPresent();
    }
}

module.exports = LoadPage;
