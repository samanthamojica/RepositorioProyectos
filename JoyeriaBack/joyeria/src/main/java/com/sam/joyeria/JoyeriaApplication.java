package com.sam.joyeria;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;



@SpringBootApplication
@EnableWebMvc
public class JoyeriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(JoyeriaApplication.class, args);
		
	}
}
