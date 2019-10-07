
//REturns and Checks Title of Web Page
var url = 'http://juliemr.github.io/protractor-demo/';

function running_operations(first_value , second_value, selection_value){
  let first_input = element(by.model('first'));
  first_input.sendKeys(first_value); 
  second_input = element(by.model('second'));
  second_input.sendKeys(second_value)
  drop_down = element(by.model('operator'));
  var selecting_option = element(by.xpath('//div/form/select/option['+selection_value+']'))
  selecting_option.getText().then(function(expression)
{
  console.log(expression);

});
  drop_down.click()
  selecting_option.click()
  go_button = element(by.id('gobutton'));
  go_button.click();
  return_result = element(by.xpath('//div/form/h2'));
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.visibilityOf(return_result, 10000));
  return_result.getText().then(function(text)
  {
      console.log(text);
  });
}

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get(url);

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
    it('Modulo between Numbers', function() {
    browser.get(url);
    running_operations(4,2,3)
  });
});

it('Divsion Between Two Values', function() {
    browser.get(url);
    running_operations(3,5,2)
  });

  it('Adding New Value in Input Field', function() {
        browser.get(url);
        running_operations(3,5,1)
      });

    it('Multiplication Between Two Values', function() {
    browser.get(url);
    running_operations(9,5,4)
  });
    it('Subtraction Between Two Values', function() {
    browser.get(url);
    running_operations(9,5,5)
  });

