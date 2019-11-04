var EC = protractor.ExpectedConditions;
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
  var selecting_option = element(by.xpath('//div/form/select/option['+selection_value+']'));
  var selecting_option_value = selecting_option.getText();

  drop_down.click()
  selecting_option.click()
  go_button = element(by.id('gobutton'));
  go_button.click();
  return_result = element(by.xpath('//div/form/h2'));
  browser.wait(EC.visibilityOf(return_result, 10000));

var return_result_text = return_result.getText(),
selecting_option_value = selecting_option.getText();

protractor.promise.all([return_result_text,selecting_option_value]).then(function (values) {
  if (values[0]==NaN){
    var num = isNaN(parseInt(new_numb)) ? 0 : parseInt(new_numb)
    var getting_result = Number(eval(first_value+values[1]+second_value));
            expect(num).toBe(parseInt(getting_result));
  }
  else{
    var getting_result = Number(eval(first_value+values[1]+second_value));
    expect(parseInt(values[0])).toEqual(getting_result); }
});
}

describe('Protractor Demo App', function() {
    
    it('Addition Of Results', function() {
        browser.get(url);
      running_operations('3','5','1')
    });

    it('Modulo between Numbers', function() {
      browser.get(url);
      running_operations('4','2','3')
    });

    it('Divsion Between Two Values', function() {
      browser.get(url);
      running_operations('16','4','2')
    });

    it('Multiplication Between Two Values', function() {
      browser.get(url);
      running_operations('9','5','4')
    });
  
      it('Subtraction Between Two Values', function() {
      browser.get(url);
      running_operations('9','5','5')
    });

});
