describe('Outlook sign in and addi n', () => {
  it('can find search results', async () => {
      await browser.url('https://login.live.com/');
      await $('input[name="loginfmt"]').setValue('ca.salas@outlook.com');
      await $('#idSIButton9').click();
      await $('input[name="passwd"]').setValue('ocle32008');
      await $('#idSIButton9').click();
      await $('#idSIButton9').click();
      browser.url('https://outlook.live.com/calendar/');
      await $('#NewEventButtonAnchor').click();
      await $('.ms-Link=More options').click();
      await $('.ms-Button--commandBar[aria-label="More options"]').click();
      await $('button[name="Get Add-ins"]').click();
      const iframe = $('iframe.fm3HSVWLq7Ufa6UsA9Ia3');
      iframe.waitForExist()
      await browser.switchToFrame(iframe);
      await $('#MyAddins').click();
      await $('#PrivateAddInDropdownButton').click();
      await $('a=Add from URL...').click();

      //browser.getTitle().should.match(/BrowserStack - Google Search/i);
  });
});
