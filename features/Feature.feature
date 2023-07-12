Feature: Test Login Functonality

Scenario: Register new user
Given user on login page
When check the radio button
When click on continue
Then navigate to fill new user details

Scenario: fill personal details
Given user on login page
When enter firstname and lastname
When enter user emailaddress 
And enter user address
And select city from dropdown
And select state from dropdown
And select country from dropdown
And enter login name
And enter password to create
And confirm create
When check subscribe radiobutton
And click on check box privacypolicy
When click on continue button
Then user on landing page



