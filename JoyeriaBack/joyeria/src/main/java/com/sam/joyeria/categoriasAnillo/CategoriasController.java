package com.sam.joyeria.categoriasAnillo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")


@RequestMapping("/catalogoAnillos")
public class CategoriasController {
	
	@Autowired
	private CategoriasService categoriasService;
	
	
	@GetMapping("/obtenerCategorias")
	public List<CategoriasModel> getCategoriasAnillos() {
		List<CategoriasModel> lista = new ArrayList<CategoriasModel>();
		lista.addAll(categoriasService.getCategorias());
		return lista;
	}

}
