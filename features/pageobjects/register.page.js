const Page = require('./page');

class Register extends Page {
    /**
     * define selectors using getter methods
     */
    get Radiobutton () {
        return $('#accountFrm_accountregister').click()
    }

    get Continuebtn () {
        return $('button[type="submit"]').click()
    }

    

    get personaldetails () {
        return $('span[class="maintext"]');
    }

    get  Firstname  () {
        return $('#AccountFrm_firstname').setValue('sun')
    }
    get lastname(){
        return $('#AccountFrm_lastname').setValue('test')
    }


    get  Email   () {

        return $('#AccountFrm_email').setValue('sunnytest@my.com')
    }
    get permanentAddress (){
        return $('#AccountFrm_address_1').setValue('no.3580 1st mainroad malleshwaram')
    }

    get userCity(){
        return $('#AccountFrm_city').setValue('bangalore')
    
    }
    get country(){
        return $('#AccountFrm_country_id').selectByAttribute('value', '99')
    }
    get State(){
        return $('#AccountFrm_zone_id').selectByAttribute('value', '1489')
    }

    get loginName(){
        return $('#AccountFrm_loginname').setValue('suntest')
    }
    get password(){
        return $('#AccountFrm_password').setValue('sun@1234')
    
    }
    
    get passwordConfirm (){
        return $('#AccountFrm_confirm').setValue('sun@1234')
    
    }
    
    get newsLetter() {
        return $('#AccountFrm_newsletter1').click()
    }
    get privacycheckbox() {
        return $('#AccountFrm_agree').click()
    }
    
    get continuebutton() {
        return $('button[type="submit"]').click()
    }
    
    get homePage (){
        const myEle =  $('span[class="maintext"]')
        return expect(myElem).toHaveAttribute('class', 'maintext')
    
    }

    async register(){
        await this.Continuebtn
        await this.FirstnameLastname
        await this.Radiobutton
        await this.State
        await this.country
        await this.homePage
        await this.permanentAddress
        await this.loginName
        await this.newsLetter
        await this.privacycheckbox
        await this.password
        await this.passwordConfirm
        await this.Email.setValue('sunnytest@my.com')
        await this.lastname
    }
   
    open () {
        return super.open('register');
    }
}

module.exports = new Register();


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    