var url = 'http://juliemr.github.io/protractor-demo/';

function running_operations(first_value , second_value, selection_value){
  var first_input = element(by.model('first'));
  first_input.sendKeys(first_value); 
  var first_input_text = first_input.getAttribute('value');
  expect(first_input_text).toEqual(first_value);
  second_input = element(by.model('second'));
  second_input.sendKeys(second_value)
  var second_input_text = second_input.getAttribute('value');
  expect(second_input_text).toEqual(second_value);
  drop_down = element(by.model('operator'));
  var selecting_option = element(by.xpath('//div/form/select/option['+selection_value+']')).getText();
  drop_down.click()
  selecting_option.click()
  go_button = element(by.id('gobutton'));
  go_button.click();
  return selecting_option;
}

function getting_expression(first_value,second_value, selection_value){
    selecting_option = running_operations(first_value,second_value,selection_value);
    getting_expression = element(by.xpath('//div/table/tbody/tr/td[2]'));
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(getting_expression, 10000));
    protractor.promise.all([getting_expression,selecting_option]).then(function (values) {
        expression = first_value+' '+values[1]+' '+second_value;
        console.log(expression)
        expect(expression).toEqual(values[0].getText());
  
    });    
}
function getting_result (first_value,second_value, selection_value){
    selecting_option = running_operations(first_value,second_value,selection_value);
    getting_result = element(by.xpath('//div/table/tbody/tr/td[3]'));
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(getting_result, 10000));
    protractor.promise.all([getting_result,selecting_option]).then(function (values) {
        var getting_result = Number(eval(first_value+values[1]+second_value));
        expect(parseInt(values[0])).toEqual(getting_result);
        // expect(expression).toEqual(values[0].getText());
  
    });
}
describe('Protractor Demo App', function() {
    
    it('Getting Expression', function() {
        browser.get(url);
      getting_result('3','5','1')
    });
});