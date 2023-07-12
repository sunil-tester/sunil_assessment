const { Given, When, Then } = require('@wdio/cucumber-framework');

const Register = require('../pageobjects/register.page');

Given(/^user on login page$/, async () => {
    await browser.url('https://automationteststore.com')
});

When(/^check the radio button$/, async () => {
    await $('#accountFrm_accountregister').click()
});

When(/^click on continue$/, async () => {
    await $('button[type="submit"]').click()
});

Then(/^navigate to fill new user details$/, async () => {
    await $('span[class="maintext"]')

});


When(/^enter firstname and lastname$/, async () => {
    await $('#AccountFrm_firstname').setValue('sun')
    await $('#AccountFrm_lastname').setValue('test')
});

When(/^enter user emailaddress$/, async () => {
    await $('#AccountFrm_email').setValue('sunnytest@my.com')
});

When(/^enter user address$/, async () => {
    await $('#AccountFrm_address_1').setValue('no.3580 1st mainroad malleshwaram')
});

When(/^select city from dropdown$/, async () => {
    await $('#AccountFrm_city').setValue('bangalore')


});

When(/^select country from dropdown$/, async () => {
    await $('#AccountFrm_country_id').selectByAttribute('value', '99')
});

When(/^select state from dropdown$/, async () => {
    await $('#AccountFrm_zone_id').selectByAttribute('value', '1489')

});

When(/^enter login name$/, async () => {
    await $('#AccountFrm_loginname').setValue('suntest')
});

When(/^enter password to create$/, async () => {
    await $('#AccountFrm_password').setValue('sun@1234')

});

When(/^confirm create$/, async () => {
    await $('#AccountFrm_confirm').setValue('sun@1234')

});

When(/^check subscribe radiobutton$/, async () => {
    await $('#AccountFrm_newsletter1').click()
});

When(/^click on check box privacypolicy$/, async () => {
    await $('#AccountFrm_agree').click()
});

When(/^click on continue button$/, async () => {
    await $('button[type="submit"]').click()
});

Then(/^user on landing page$/, async () => {
    const myEle = await $('span[class="maintext"]')
    await expect(myElem).toHaveAttribute('class', 'maintext')

});

