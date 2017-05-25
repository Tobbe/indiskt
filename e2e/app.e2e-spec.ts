import { browser, element, by } from 'protractor';

describe('Indian Order E2E Tests', function () {

  let expectedMsg = 'Indian food order form';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
