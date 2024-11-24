import { Page } from './page';

import {
  NORMAL_TIMEOUT,
} from '@constants';

class CommonPage {


  public static clickOnButtonByText = (text:string)  =>{
    cy.contains('button', text, { timeout: NORMAL_TIMEOUT }).click();
  };

  public static assertElementVisibleWithText = (text: string) => {
    cy.contains(text, { timeout: NORMAL_TIMEOUT }).should('be.visible');
  };

  public static assertButtonActiveWithText = (text: string) => {
    cy.contains('button', text, { timeout: NORMAL_TIMEOUT }).should('not.be.disabled');
  };

  
}
export default CommonPage;