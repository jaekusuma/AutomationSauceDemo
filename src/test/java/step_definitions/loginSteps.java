package step_definitions;

import com.example.loginPage;
import com.example.itemListPage;
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
        loginPage ab = new loginPage(webDriver);
        ab.isDisplayed();
    }

    @When("User input \"(.*)\" as userName and \"(.*)\" as pasword")
    public void inputCredential(String userName, String password){
        loginPage loginPage = new loginPage(webDriver);
        loginPage.setUsername(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();
    }

    @Then("User is already in landing page")
    public void isDashboardIsDisplayed() {
        itemListPage itemListPage = new itemListPage(webDriver);
        Assert.assertTrue(itemListPage.isDisplayed());
    }

    @Then("User will see \"(.*)\" on login page")
    public void displayErrorMassage(String errorText){
        loginPage loginPage = new loginPage(webDriver);
        assertEquals(errorText, loginPage.getErrorMessage());
    }
}