package com.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class loginPage extends locatorElementPage {
    public static WebDriver driver;

    public loginPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public void setUsername(String user){
        username.sendKeys(user);
    }

    public void setPassword(String pwd){
        password.sendKeys(pwd);
    }

    public void clickLogin( ){
        loginButton.click();
    }

    public String getErrorMessage(){
        return errorMessage.getText();
    }

    public boolean isDisplayed(){
        username.isDisplayed();
        return true;
    }

}
