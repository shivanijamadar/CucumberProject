package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;

import org.junit.Assert;


public class CalculatorStepDef {
	Integer result = 0;
	@Given("I opened the Calculator")
	public void i_opened_the_Calculator() {
		System.out.println("Calculator opened");
	}

	@When("I add two numbers {int} and {int}")
	public void i_enter_two_numbers_and(Integer int1, Integer int2) {
		result = int1+int2;
	}
	
	@Then("sum should be {int}")
	public void sum_should_be(Integer int1) {
		Assert.assertEquals(result, int1);
	}

	@When("I add below numbers")
	public void i_add_below_numbers(List<Integer> numbers) {
		
		for(Integer num:numbers) {
			result = result + num;
		}
	}
}
