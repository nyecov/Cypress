import { When} from '@badeball/cypress-cucumber-preprocessor';
import { DataTable } from '@cucumber/cucumber';
import BankingPage from '@page-objects/banking.page';
import LoginPage from '@page-objects/login.page';
import { Page } from '@page-objects/page';


When('I log in as customer {string}',(userName:string) =>{
LoginPage.loginAs(userName);
  
})
When('I deposit the following amounts:', (dataTable:DataTable) => {
  dataTable.hashes().forEach((row)=>{
    BankingPage.depositSomeMoney(parseInt(row.Amount));
  })
})
