package tarun.Aboard;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {

    WebDriver driver;

    @BeforeClass
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:3000");
        System.out.println("Application Launched Successfully");
    }

    @Test(priority = 1)
    public void verifyTitle() {
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        Assert.assertFalse(title.isEmpty());
        System.out.println("Title Verification Passed");
    }

    @Test(priority = 2)
    public void verifyNavigationMenu() {

        List<WebElement> navItems = driver.findElements(By.tagName("a"));

        System.out.println("Navigation items found:");

        for (WebElement item : navItems) {
            String text = item.getText().trim();
            if (!text.isEmpty()) {
                System.out.println(text);
            }
        }

        Assert.assertTrue(driver.getPageSource().contains("HOME"));
        Assert.assertTrue(driver.getPageSource().contains("EXPLORE"));
        Assert.assertTrue(driver.getPageSource().contains("FAQs"));
        Assert.assertTrue(driver.getPageSource().contains("CONNECT"));

        System.out.println("Navigation Menu Verification Passed");
    }

    @Test(priority = 3)
    public void verifyLoginButton() {

        WebElement loginBtn = driver.findElement(
                By.xpath("//*[contains(text(),'Login') or contains(text(),'LOGIN')]"));

        Assert.assertTrue(loginBtn.isDisplayed());
        System.out.println("Login Button Verification Passed");
    }

    @Test(priority = 4)
    public void verifyHeadingText() {

        String heading = driver.findElement(By.tagName("h1")).getText();
        System.out.println("Heading Text: " + heading);

        Assert.assertTrue(heading.toLowerCase().contains("studying"));
        System.out.println("Heading Verification Passed");
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
        System.out.println("Browser Closed Successfully");
    }
}