function return_expression(first_value, second_value, value){
    if (value == '+'){
        result = first_value+second_value; 
    } 
    else if (value == '-'){
        result = first_value+second_value;
    }
    return result;
}

var url = 'http://juliemr.github.io/protractor-demo/';

function running_operations(first_value , second_value, selection_value){
    let first_input = element(by.model('first'));
    first_input.sendKeys(first_value); 
    second_input = element(by.model('second'));
    second_input.sendKeys(second_value)
    drop_down = element(by.model('operator'));
    var selecting_option = element(by.xpath('//div/form/select/option['+selection_value+']'))
    drop_down.click()
    selecting_option.click()
    go_button = element(by.id('gobutton'));
    go_button.click();
    return_result = element(by.xpath('//div/form/h2'));

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(return_result, 5000));


  }

  it('Subtraction Between Two Values', function() {
    browser.get(url);
    running_operations(9,5,5)
  });

  it('Multiplication Between Two Values', function() {
    browser.get(url);
    running_operations(9,5,4)
  });

describe('Protractor Demo App', function() {
    it('Adding New Value in Input Field', function() {
      browser.get(url);
      running_operations(3,5,1)
    });
  });
