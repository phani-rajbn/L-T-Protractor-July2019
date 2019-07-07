import { browser, element, by } from 'protractor';
export class SimpleExamplePage{
    navigateTo(){
        return browser.get("/");
    }

    getMainHeading(){
        return element(by.css('app-simple-example h1')).getText();
    }

    getParagraphContent(){
        return element(by.css('app-simple-example p')).getText();
    }
}