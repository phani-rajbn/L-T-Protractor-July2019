var app = require('./firstDemo');
describe('Test Suite for Calc Demo', () => {
    var obj = null;//null in js is used for class objects to intialize....
    var curVal = 0;//It is 0....

    beforeAll(()=>{
        console.log("Called before any test case is executed...")
        obj = new app.mathCalc();   //BEfore any test cases are executed, U should instantiate the object....
    })

    beforeEach(()=>{
        curVal = 0;
    })

    it('should no to the currentvalue', () => {
        curVal = obj.addFunc(3);
        expect(curVal).toBe(3);
    });

    it('should add all the values', () => {
        curVal = obj.addMany([2,3,4]);
        expect(curVal).toBe(12);
    });

    afterAll(()=>{
        console.log("Finally closing the test suite");
        obj = null;
    })
});