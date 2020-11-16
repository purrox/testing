describe('Google\'s Search Functionality', () => {
  it('can find search results', () => {
      browser.url('https://login.live.com/');
      $('input[name="loginfmt"]').setValue('ca.salas@outlook.com');
      //browser.getTitle().should.match(/BrowserStack - Google Search/i);
  });
});
