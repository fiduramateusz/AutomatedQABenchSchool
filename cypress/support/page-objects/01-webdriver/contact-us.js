class ContactUs {
    loginButtonText = 'Log In';
  
    loginClick() {
      cy.contains(this.loginButtonText).click();
      cy.get('[data-test-id="startButton"]').should('contain', 'Start');
    }
  }
  
  export default ContactUs();
  