class loginPage{
    firstName = '#firstname'
    lastName = '[name="lastname"]'
    email = '#email_address'
    passwd = '#password'
    confPasswd = '#password-confirmation'
    submit = '.action.submit.primary'

    inputfirstName(fName){
        cy.get(this.firstName).type(fName)
    }

    inputlastName(lName){
        cy.get(this.lastName).type(lName)
    }

    inputEmail(mail){
        cy.get(this.email).type(mail)
    }

    inputPassword(password){
        cy.get(this.passwd).type(password)
    }

    inputconfirmPassword(confirmPass){
        cy.get(this.confPasswd).type(confirmPass)
    }

    submit(button){
        cy.get(this.submit).type(button)
    }

}

export default new loginPage()