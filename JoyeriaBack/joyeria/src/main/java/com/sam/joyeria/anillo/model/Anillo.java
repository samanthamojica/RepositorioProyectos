package com.sam.joyeria.anillo.model;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@Table(name="Anillos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Anillo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	//Genera un valor para id, .Identity genera autoincrementable.	
	private int id;
	private int precio; 
	private String categoria;
	private String descripcion;
	private String idAnillo;
	private String nombreAnillo;
	private int idCatalogo;
	
	

	public Anillo(String nombreAnillo,  String descripcion, int precio) {
		this.nombreAnillo = nombreAnillo;
		this.descripcion = descripcion;
		this.precio = precio;
	}
	
	public Anillo() {}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
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

	@Override
	public String toString() {
		return "Anillo [id=" + id + ", precio=" + precio + ", categoria=" + categoria + ", descripcion=" + descripcion
				+ ", idAnillo=" + idAnillo + ", nombreAnillo=" + nombreAnillo + "]";
	}

	
	
}
