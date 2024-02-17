package com.sam.joyeria.saveImagenesS3.model.vm;

import org.springframework.http.MediaType;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class Asset {
	private byte[] content;
	private String contentType;
}
