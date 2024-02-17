package com.sam.joyeria.catalogoAnillo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "CatalogoAnillo")

public class CatalogoAnillo {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	public int idCatalogo;
	public String llave;
	public String url;
	/*
	public CatalogoAnillo(int idImagen, String llave, String url ) {
		this.idImagen = idImagen;
		this.llave = llave;
		this.url = url;
	}
	
	public CatalogoAnillo() {}
	

	public int getIdImagen() {
		return idImagen;
	}
	public void setIdImagen(int idImagen) {
		this.idImagen = idImagen;
	}
	public String getLlave() {
		return llave;
	}
	public void setLlave(String llave) {
		this.llave = llave;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	*/
}
