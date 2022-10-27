package step_definitions;

import com.example.pageObject.LoginPage;
import com.example.pageObject.LandingPage;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;

public class loginSteps {
    private WebDriver webDriver;
    public loginSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("User open the web page")
    public void verifyLoginPage(){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.isDisplayed();
    }

    @When("User input \"(.*)\" as userName and \"(.*)\" as pasword")
    public void inputCredential(String userName, String password){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUsername(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();
    }

    @Then("User is already in landing page")
    public void isDashboardIsDisplayed() {
        LandingPage landingPage = new LandingPage(webDriver);
        Assert.assertTrue(landingPage.isDisplayed());
    }

    @Then("User will see \"(.*)\" on login page")
    public void displayErrorMassage(String errorText){
        LoginPage loginPage = new LoginPage(webDriver);
        assertEquals(errorText, loginPage.getErrorMessage());
    }
}