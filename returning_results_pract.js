

var first = element(by.id('textbox1')).getAttribute('value'),
    second = element(by.id('textbox2')).getAttribute('value'),
    total = element(by.id('label1')).getText();

protractor.promise.all([first, second, total]).then(function (values) {
    expect(parseInt(values[0]) + parseInt(values[1])).toEqual(parseInt(values[2]));
});