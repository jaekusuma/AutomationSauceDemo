package com.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class LandingPage {
    private static WebDriver driver;
    public LandingPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement productSort;

    public void dropDownSort(String sort){
        Select dropDownSort = new Select(productSort);
        dropDownSort.selectByVisibleText(sort);
    }

    @FindBy(xpath = "//div[@class='app_logo']")
    private WebElement logo;

    public boolean isDisplayed(){
        logo.isDisplayed();
        return true;
    }
}
