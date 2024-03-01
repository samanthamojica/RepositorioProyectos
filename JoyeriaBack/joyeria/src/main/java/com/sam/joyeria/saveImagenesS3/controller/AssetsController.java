package com.sam.joyeria.saveImagenesS3.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpHeaders;

import com.amazonaws.services.s3.model.S3Object;
import com.sam.joyeria.saveImagenesS3.model.vm.Asset;
import com.sam.joyeria.saveImagenesS3.service.ServiceS3Imagenes;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/imagenes")
public class AssetsController {

	@Autowired
	private ServiceS3Imagenes serviceS3;

	@PostMapping("/subirImagenes")

	// public Map<String, String> postImagenes(@RequestParam MultipartFile file[]) {
	public Map<String, String> postImagenes(@RequestPart("archivos") MultipartFile[] archivos) {
		// El metodo putArregloImagenes esta en serviceS3Imagenes.
		String[] arregloKeys = serviceS3.putArregloImagenes(archivos);
		System.out.println(arregloKeys);
		Map<String, String> myMap = new HashMap<>();
		for (int i = 0; i < archivos.length; i++) {
			// se agrega en el orden: llave, url
			myMap.put(arregloKeys[i], serviceS3.getObjectUrl(arregloKeys[i]));
		}
		System.out.println(myMap);
		return myMap;
	}

	
	
	@GetMapping("/obtenerImagenes")
	public ResponseEntity<ByteArrayResource> getObject(@RequestParam String key) {
		System.out.println("entro al metodo obtener Imagnes");
		Asset assets = serviceS3.obtenerImagenes(key);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentLength(assets.getContent().length);
		try {
			MediaType mediaType = MediaType.parseMediaType(assets.getContentType());
			headers.setContentType(mediaType);
		} catch (Exception e) {
			headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
		}

		ByteArrayResource resource = new ByteArrayResource(assets.getContent());
		return ResponseEntity.ok().headers(headers).body(resource);
	}
	
	
	

	@DeleteMapping("/eliminarImagenes")
	public void deleteObject(@RequestParam String key[]) {
		serviceS3.eliminarImagenes(key);
	}

}
