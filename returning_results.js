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
  var return_result_text = return_result.getText();
//   var method = eval(first_value +selecting_option+ second_value);

    return_result_text.then(function(expression)
{
  console.log(expression);

});
    selecting_option_value.getText().then(function(expression)
{
    console.log(expression);

});

var getting_value = first_value+selecting_option_value.getText()+second_value;
console.log("Getting Value is "+getting_value);
  expect(return_result_text).toEqual(getting_value);
}

describe('Protractor Demo App', function() {
    
    it('Modulo between Numbers', function() {
        browser.get(url);
      running_operations('4','2','3')
    });

//   it('Adding New Value in Input Field', function() {
//     browser.get(url);
//     running_operations('3','5','1')
//   });

});
