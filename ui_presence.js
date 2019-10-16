var url = 'http://juliemr.github.io/protractor-demo/';

function table_view_text(th_selection, text_name){

       var text_name= element(by.xpath('//div/table/thead/tr/th['+th_selection+']'));
        expect(text_name.isDisplayed()).toBe(true);
        var text_name_text = text_name.getText();
        if (text_name.isDisplayed()){
        text_name_text.then(function(expression)
        {
            console.log(expression+' Text is Displaying');
    });
}
        else{
            console.log('Text is not Displaying')
        }
}
describe('Protractor Demo App', function() {
    it('Time Text Should be Displaying', function() {
      browser.get(url);
    table_view_text(1,'Time')
});
});

    it('Expression Text Should be Displaying', function() {
      browser.get(url);
    table_view_text(2,'Expression')
});


    it('Result Text Should be Displaying', function() {
      browser.get(url);
    table_view_text(3,'Result')
});


it('History Text Should be Displaying', function() {
    browser.get(url);
    history_text = element(by.tagName('h4'))
    expect(history_text.isDisplayed()).toBe(true);
      if (history_text.isDisplayed()){
            console.log('History Text is Displaying')
      }
      else{
          console.log('History Text is not Displaying')
      }
    });

it('Super Calculator Text Should be Displaying', function() {
        browser.get(url);
        superCalculator_text = element(by.tagName('h3'))
        expect(superCalculator_text.isDisplayed()).toBe(true);
          if (superCalculator_text.isDisplayed()){
                console.log('SUper Calculator Text is Displaying')
          }
          else{
              console.log('SUper Calculator Text is not Displaying')
          }
        });

it('Default Value should be "0"', function() {
            browser.get(url);
            default_value = (element(by.tagName('h2')));
            default_value_text = default_value.getText();
            var new_numb = parseInt(default_value_text)
            var num = isNaN(parseInt(new_numb)) ? 0 : parseInt(new_numb)
            expect(num).toBe(parseInt(0));
              if (expect(num).toBe(0)){
                    console.log('Default Value is 0')
              }
              else{
                default_value_text.then(function(expression)
                {
                    console.log('Default Value is '+expression);
            });
              }
            });
