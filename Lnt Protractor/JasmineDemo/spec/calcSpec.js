var app = require('./firstDemo');

xdescribe('Test Suite for First Demo', () => {
    it('Check for Square of Number', () => {
        var res = app.squareOfNumber(4);
        expect(res).toBe(15);
    });

    it('Should add 2 numbers', () => {
        var res = app.addNum(3, 2);
        expect(res).toBe(5);
    });
});