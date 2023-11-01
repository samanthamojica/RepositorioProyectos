package com.sam.joyeria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude= DataSourceAutoConfiguration.class)
public class JoyeriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(JoyeriaApplication.class, args);
	}

}
