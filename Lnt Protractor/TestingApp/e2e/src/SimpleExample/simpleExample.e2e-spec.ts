import { SimpleExamplePage } from "./simpleExample.po";

describe('Should display Main Page', () => {
    let page : SimpleExamplePage;

    beforeAll(()=>{
        this.page= new SimpleExamplePage();
    })

    beforeEach(()=>{
        this.page.navigateTo();
    })
    it('should display our Heading', () => {
        expect(this.page.getMainHeading()).toEqual("Simple Example");
    });

    it('should display paragraph', () => {
        expect(this.page.getParagraphContent()).toEqual("Simple Example Demo using Protractor");
    });
});