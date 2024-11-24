import { Page } from '@page-objects/page';
import LoginElements from '@page-elements/login.elements';


class LoginPage extends (LoginElements){

  public static loginAs=(user:string)=>{
    const customerLoginButton:string ="Customer Login";

    Page.com.clickOnButtonByText(customerLoginButton);
    this.userSelectDropDown.select(user);
    Page.com.clickOnButtonByText('Login');
  }

}

export default LoginPage;