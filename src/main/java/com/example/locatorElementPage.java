package com.example;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class locatorElementPage {
    @FindBy(xpath = "//input[@id='user-name']")
    public WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement password;

    @FindBy(xpath = "//h3")
    public WebElement errorMessage;

    @FindBy(id = "login-button")
    public WebElement loginButton;
    @FindBy(xpath = "//div[@class='app_logo']")
    public WebElement logo;
    @FindBy(xpath = "//select[@class='product_sort_container']")
    public WebElement productSort;
    @FindBy(xpath = "//input[@id='first-name']")
    public WebElement firstName;
    @FindBy(xpath = "//input[@id='last-name']")
    public WebElement lastName;
    @FindBy(xpath = "//input[@id='postal-code']")
    public WebElement postalCode;
    @FindBy(xpath = "//div[@class='summary_subtotal_label']")
    public WebElement itemTotal;
    @FindBy(xpath = "//div[@class='summary_tax_label']")
    public WebElement tax;
    @FindBy(xpath = "//div[@class='summary_total_label']")
    public WebElement total;

}
