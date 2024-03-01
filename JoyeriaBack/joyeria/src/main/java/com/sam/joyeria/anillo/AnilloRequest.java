package com.sam.joyeria.anillo;

import java.util.List;
import java.util.Map;

import com.sam.joyeria.anillo.model.Anillo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class AnilloRequest {

	private int id;
	private int precio;
	private int idCategoria;
	private String descripcion;
	private String idAnillo;
	private String nombreAnillo;
	private int idCatalogo;
	private Map<String, String> catalogoImagenes;

	public AnilloRequest(Anillo anillo) {
		this.id = anillo.getId();
		this.precio = anillo.getPrecio();
		this.idCategoria = anillo.getIdCategoria();
		this.descripcion = anillo.getDescripcion();
		this.nombreAnillo = anillo.getNombreAnillo();
		this.idCatalogo = anillo.getIdCatalogo();
		
	}

}
