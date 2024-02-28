package com.sam.joyeria.anillo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sam.joyeria.anillo.model.Anillo;
import com.sam.joyeria.catalogoAnillo.CatalogoAnilloService;
import com.sam.joyeria.catalogoAnillo.model.CatalogoAnillo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/anillos")
public class AnilloController {

	// @Autowired
	private AnilloService anilloService;
	// @Autowired
	private CatalogoAnilloService catalogoAnilloService;

	public AnilloController(AnilloService anilloService, CatalogoAnilloService catalogoAnilloService) {

		this.anilloService = anilloService;
		this.catalogoAnilloService = catalogoAnilloService;
	}

	@PostMapping("/anillo/")
	public void agregarAnilloCont(@RequestBody AnilloRequest anilloRecibido) {
		Anillo anillo = new Anillo();
		System.out.println("entro al metodo agregar anillo");
		anillo.setNombreAnillo(anilloRecibido.getNombreAnillo());
		anillo.setDescripcion(anilloRecibido.getDescripcion());
		anillo.setPrecio(anilloRecibido.getPrecio());
		anillo.setIdCategoria(anilloRecibido.getIdCategoria());
		int idAnillo = anilloService.guardarInfoAnillo(anillo);
		anillo.setIdCatalogo(idAnillo);
		anilloService.guardarInfoAnillo(anillo);
		for (Entry<String, String> entry : anilloRecibido.getCatalogoImagenes().entrySet()) {
			CatalogoAnillo catalogoAnillo = new CatalogoAnillo();
			catalogoAnillo.setIdCatalogo(idAnillo);
			catalogoAnillo.setLlave(entry.getKey());
			catalogoAnillo.setUrl(entry.getValue());
			// System.out.println(catalogoAnillo);
			catalogoAnilloService.almacenarImagenes(catalogoAnillo);
		}

	}

}
