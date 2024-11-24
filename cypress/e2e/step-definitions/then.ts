import { Then} from '@badeball/cypress-cucumber-preprocessor';
import BankingPage from '@page-objects/banking.page';


Then('I should see a confirmation message containing {string} after each deposit', (message:string) => {
BankingPage.expect.depositSuccessful(message);
  }
)
Then('I verify that the balance is {int}', (expectedBalance: number) => {
  BankingPage.checkBalance(expectedBalance);
})

Then('I check that the sum of the transactions equals {int}', (expectedValue: number) => {
  BankingPage.checkTransactionSum(expectedValue);
})
