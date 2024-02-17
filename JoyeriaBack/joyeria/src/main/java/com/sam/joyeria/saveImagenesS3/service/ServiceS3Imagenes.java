package com.sam.joyeria.saveImagenesS3.service;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;
import com.sam.joyeria.saveImagenesS3.model.vm.Asset;

@Service
public class ServiceS3Imagenes {

	// Nombre del bucket
//	private final static String NOMBREBUCKET = "catalogosjoyeria";
	private final static String NOMBREBUCKET = "catalogosjoyeria-nuevo";

	@Autowired
	private AmazonS3Client amazonS3Client;

	public String[] putArregloImagenes(MultipartFile multipartFile[]) {

		String[] arregloKeys = new String[multipartFile.length];
		// System.out.println("Entro al metodo agregarArregloImagenes");
		// vamos a obtener la informacion de cada imagen
		try {
			for (int i = 0; i < multipartFile.length; i++) {
				String extension = StringUtils.getFilenameExtension(multipartFile[i].getOriginalFilename());
				String key = String.format("%s.%s", UUID.randomUUID(), extension);
				ObjectMetadata objectMetada = new ObjectMetadata();
				objectMetada.setContentType("image/"+extension);
				objectMetada.setContentLength(multipartFile[i].getSize());
				PutObjectRequest putObject = new PutObjectRequest(NOMBREBUCKET, key, multipartFile[i].getInputStream(),
						objectMetada);
				amazonS3Client.putObject(putObject);
				// System.out.println(putObject); 
				arregloKeys[i] = key;
			}
			// System.out.println(arregloKeys);
			return arregloKeys;

		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}

	public String getObjectUrl(String key) {
		return String.format("https://%s.s3.amazonaws.com/%s", NOMBREBUCKET, key);
	}

	public Asset obtenerImagenes(String key) {
		S3Object s3Object = amazonS3Client.getObject(NOMBREBUCKET, key);
		ObjectMetadata metadata = s3Object.getObjectMetadata();
		// obtenemos la metada del objeto para visualizarlo en la web.
		// obtener el inputstrim para estos objetos.

		try {
			S3ObjectInputStream inputStream = s3Object.getObjectContent();
			byte[] bytes = IOUtils.toByteArray(inputStream);
			return new Asset(bytes, metadata.getContentType());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}

	}

/*	public void eliminarImagenes(String key) {
		amazonS3Client.deleteObject(NOMBREBUCKET, key);
	}*/

	public void eliminarImagenes(String key[]) {
		
		for(int i = 0 ; i< key.length; i++) {
			amazonS3Client.deleteObject(NOMBREBUCKET, key[i]);
			System.out.println();
		}
		
	}
	
}










