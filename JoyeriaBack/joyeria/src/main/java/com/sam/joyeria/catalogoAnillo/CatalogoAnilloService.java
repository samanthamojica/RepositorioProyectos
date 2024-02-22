package com.sam.joyeria.catalogoAnillo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sam.joyeria.catalogoAnillo.model.CatalogoAnillo;

@Service
public class CatalogoAnilloService {
	
	@Autowired
	private CatalogoAnilloRepository catalogoAnilloRepository;  
	
	
	public void almacenarImagenes(CatalogoAnillo catalogo) {
		CatalogoAnillo catalogoRecibido = new CatalogoAnillo();
		catalogoRecibido = 	catalogoAnilloRepository.save(catalogo);
		
	}

}
