import { browser, element, by } from 'protractor';
export class CalcPage {
    navigateTo() {
        return browser.get("/");
    }

    getOperands(){
        let options = element.all(by.tagName("option"));
        return options;
    }//To check whether all the operands are given: +, -, *, /

    fillValues(v1 : number, v2: number, op1 : string){
        element(by.css('[name="firstValue"]')).sendKeys(v1);
        element(by.css('[name="secondValue"]')).sendKeys(v2);
        element(by.css('[name="operand"]')).sendKeys(op1);
        element.all(by.tagName("button")).get(0).click();
    }

    getResult(){
        return element(by.id('pDisplay')).getText();
    }
}