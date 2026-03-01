package tarun.Aboard;
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
        driver.get("http://localhost:3000");
    }

    @Test
    public void verifyTitle() {
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        Assert.assertFalse(title.isEmpty());
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}