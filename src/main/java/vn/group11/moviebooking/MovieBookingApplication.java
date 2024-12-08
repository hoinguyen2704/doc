package vn.group11.moviebooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

// @SpringBootApplication
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class MovieBookingApplication {

	public static void main(String[] args) {
		// container
		ApplicationContext hoinguyen = SpringApplication.run(MovieBookingApplication.class, args);
		for (String s : hoinguyen.getBeanDefinitionNames()) {
			System.out.println(s);
		}
	}

}
