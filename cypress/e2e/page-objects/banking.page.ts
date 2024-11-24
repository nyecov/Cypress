import { Page } from '@page-objects/page';
import BankingElements from '@page-elements/banking.elements';


class BankingPage extends (BankingElements){

  public static depositSomeMoney=(amountOfMoney:number)=>{
    Page.com.clickOnButtonByText('Deposit');
    cy.contains('Amount to be Deposited :').siblings('input').type(amountOfMoney.toString())
    cy.get('button[type="submit"]').contains('Deposit').should('be.visible').click();
  }

public static checkBalance=(expectedBalance:number)=>{
  cy.get('div').contains('Balance :').contains(expectedBalance.toString());
}

public static checkTransactionSum=(expectedValue:number)=>{
  cy.wait(3000); //small wait so the UI has time to catch up
  Page.com.clickOnButtonByText('Transactions');

  let total = 0;

cy.get('table tr')
  .each(($row) => {

    cy.wrap($row)
      .find('td').eq(1)
      .invoke('text') 
      .then((text) => {
        const numberValue = parseFloat(text.trim());  
        if (!isNaN(numberValue)) {
          total += numberValue;
        }
      });
  })
  .then(() => {
    expect(total).to.equal(expectedValue);
  });
}
  public static expect={
    depositSuccessful:(message:string)=>{
      cy.contains('span', message)
      .should('be.visible');
    }
  }
}

export default BankingPage;