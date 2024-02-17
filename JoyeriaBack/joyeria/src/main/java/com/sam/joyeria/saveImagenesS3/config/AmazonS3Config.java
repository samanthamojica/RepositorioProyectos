package com.sam.joyeria.saveImagenesS3.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonS3Config {

	@Value("${aws.accessKeyId}")
	private String accessKey;

	@Value("${aws.secretKey}")
	private String secretKey;

	@Value("${aws.region}")
	private String region;

	@Bean
	public AmazonS3Client amazonS3Client() {
		AWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
		return new AmazonS3Client(credentials);
	}

	// creamos esta clase porque en mi archivo pom.xml no tiene el starter para
	// iniciar
	/*
	 * el servicio de amazon automaticamente, asi que lo tengo que hacer manual.
	 * <dependency> <groupId>com.amazonaws</groupId>
	 * <artifactId>aws-java-sdk-s3</artifactId> <version>1.12.589</version>
	 * </dependency> </dependencies>
	 *
	 *
	 * De igual forma cree los valores de accesKey y secretKey porque no los toma
	 * automaticamente del archivo properties y se las mando a AmazonCliente.
	 */

}
