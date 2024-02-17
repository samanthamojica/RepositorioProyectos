package com.sam.joyeria.saveImagenesS3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//import com.sam.joyeria.saveImagenesS3.repository.ImagenesRepositorio;

@RestController
@RequestMapping("/api/imagenes")

public class ImagenesController {
	
	//@Autowired
	//private  ImagenesRepositorio imagenesRepositorio;
	
	/*@GetMapping
	
	List<CatalogoImagenesUrl> getAll(){
		return imagenesRepositorio.findAll();
	}*/
	
	/*	@PostMapping
	
	CatalogoImagenesUrl create (@RequestBody CatalogoImagenesUrl catalogo) {
		return imagenesRepositorio.save(catalogo);
	}
	
	*/

}
