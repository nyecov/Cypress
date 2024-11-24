import { NORMAL_TIMEOUT } from '@constants';
import { ById } from 'cypress-selectors';

class LoginElements {
  @ById('userSelect', {timeout:NORMAL_TIMEOUT})
  protected static userSelectDropDown:Cypress.Chainable;
}

export default LoginElements;