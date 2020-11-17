describe('Outlook sign in and addi n', () => {
  it('can find search results', () => {
      browser.url('https://login.live.com/');
      $('input[name="loginfmt"]').setValue('ca.salas@outlook.com');
      $('#idSIButton9').click();
      $('input[name="passwd"]').setValue('ocle32008');
      $('#idSIButton9').click();
      $('#idSIButton9').click();
      browser.url('https://outlook.live.com/calendar/');
      $('#NewEventButtonAnchor').click();
      $('.ms-Link=More options').click();
      $('.ms-Button--commandBar[aria-label="More options"]').click();
      $('button[name="Get Add-ins"]').click();
      const iframe = $('iframe.fm3HSVWLq7Ufa6UsA9Ia3');
      iframe.waitForExist()
      browser.switchToFrame(iframe);
      $('#MyAddins').click();
      $('#PrivateAddInDropdownButton').click();
      $('a=Add from URL...').click();

      //browser.getTitle().should.match(/BrowserStack - Google Search/i);
  });
});
