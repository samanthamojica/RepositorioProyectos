package com.sam.joyeria.anillo;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnilloRequest {
	//private int id;
	private int precio; 
	private String categoria;
	private String descripcion;
	private String idAnillo;
	private String nombreAnillo;
	private Map<String, String>[] catalogoImagenes;
	
	/*
	public int getPrecio() {
		return precio;
	}
	public void setPrecio(int precio) {
		this.precio = precio;
	}
	public Map<String, String>[] getCatalogoImagenes() {
		return catalogoImagenes;
	}
	public void setCatalogoImagenes(Map<String, String>[] catalogoImagenes) {
		this.catalogoImagenes = catalogoImagenes;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getIdAnillo() {
		return idAnillo;
	}
	public void setIdAnillo(String idAnillo) {
		this.idAnillo = idAnillo;
	}
	public String getNombreAnillo() {
		return nombreAnillo;
	}
	public void setNombreAnillo(String nombreAnillo) {
		this.nombreAnillo = nombreAnillo;
	}

	/*public Map<String, String> getCatalogoImagenes() {
		return catalogoImagenes;
	}
	public void setCatalogoImagenes(Map<String, String> catalogoImagenes) {
		this.catalogoImagenes = catalogoImagenes;
	}	
	*/
}
