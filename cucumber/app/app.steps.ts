let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
class AppSteps {

  @given(/^The world exists$/)
  private givenTheWorldExists(callback: CallbackStepDefinition) {
    // this.authenticationModule.goToLoginPage();
    callback();
  };

  @when(/^I start the app$/)
  private whenIStartTheApp(callback: CallbackStepDefinition) {
    // this.loginPageObject.submitForm();
    callback();
  };

  @then(/^The app is Up$/)
  private theAppIsUp(callback: CallbackStepDefinition) {
    // let isValid = valid === 'true';
    // expect(this.loginPageObject.formIsValid()).to.become(isValid).and.notify(callback);
    callback();
  }
}

export = AppSteps ;
