package tarun.Aboard;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
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
    }

    @Test(priority = 1)
    public void verifyTitle() {
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        Assert.assertFalse(title.isEmpty());
    }

    @Test(priority = 2)
    public void verifyNavigationMenu() {
        Assert.assertTrue(driver.findElement(By.linkText("HOME")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.linkText("EXPLORE")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.linkText("FAQs")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.linkText("CONNECT")).isDisplayed());
    }

    @Test(priority = 3)
    public void verifyLoginButton() {
        Assert.assertTrue(
            driver.findElement(By.xpath("//*[contains(text(),'Login')]")).isDisplayed()
        );
    }
    @Test(priority = 4)
    public void verifyHeadingText() {
        String heading = driver.findElement(By.tagName("h1")).getText();
        Assert.assertTrue(heading.toLowerCase().contains("studying abroad"));
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}