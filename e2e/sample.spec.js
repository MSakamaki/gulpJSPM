describe('protractor sample', function() {

  it('reading.fxos homepage', function() {
    browser.get('http://reading.fxos.org');
    var fxos = element(by.id('fxos-'));
    expect(fxos.getText()).toEqual('FxOS コードリーディングとは？');
  });

  it('button check', function() {
    browser.get('http://localhost:9000/');
    var addBtnEl = element(by.id('addbtn'));
    browser.wait(function(){
      return addBtnEl.isPresent();
    }, 10000, 'about add cart').then(function(){
      expect(addBtnEl.getText()).toEqual('Get Server Meesage');
    });
  });

  it('button click', function() {
    browser.get('http://localhost:9000/');
    var addBtnEl = element(by.id('addbtn'));
    var serverMsg = element(by.css('.js-message'));
    browser.wait(function(){
      return addBtnEl.isPresent();
    }, 10000, 'about add cart').then(function(){
      return addBtnEl.click();
    }).then(function(){
      return browser.wait(function(){
        return serverMsg.isPresent();
      }, 10000, 'no search message');
    }).then(function(){
      expect(serverMsg.getText()).toEqual('hello express server');
    });
  });

});