package step_definitions;

import com.example.pageObject.LandingPage;
import cucumber.api.java.en.*;
import net.masterthought.cucumber.json.Hook;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class buySteps {
    private WebDriver webDriver;

    public buySteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Then("User sort \"(.*)\"")
    public void clickDropDownSort(String sort) throws InterruptedException {
        LandingPage landingPage = new LandingPage(webDriver);
        landingPage.dropDownSort(sort);
    }
}
