package com.sam.joyeria.categoriasAnillo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriasService {
	
	
	@Autowired
	private CategoriasRepository categoriasRepository;
	
	public List<CategoriasModel> getCategorias() {
	System.out.println("Entro al servicio de categorias anillos");
		return categoriasRepository.findAll();
		
	}

	
	
}
