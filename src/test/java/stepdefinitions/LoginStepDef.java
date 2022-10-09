package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {
	
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
		
		driver.get("https://www.simplilearn.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
	}

	@Given("I click on the Login link")
	public void i_click_on_the_Login_link() {
		WebElement LoginLink = driver.findElement(By.linkText("Log in"));
		LoginLink.click();
	}
	
	@When("I enter the correct username and password")
	public void i_enter_the_correct_username_and_password() {

	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {

		
	}

	@When("I enter the incorrect username and password")
	public void i_enter_the_incorrect_username_and_password() {

		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys("abc@xyz.com");

		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("Test@1234");
	}
	
	@When("I click on the Login button")
	public void i_click_on_the_Login_button() {
		WebElement LoginBtn = driver.findElement(By.name("btn_login"));
		LoginBtn.click();
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String ActError) {
		WebElement error = driver.findElement(By.id("msg_box"));
		
		String ExpError = error.getText();

		Assert.assertEquals(ExpError, ActError);	
	}
	
	@When("I enter the username as {string} and password as {string}")
	public void i_enter_the_username_password(String username, String password) {
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys(username);

		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(password);
	}
}
