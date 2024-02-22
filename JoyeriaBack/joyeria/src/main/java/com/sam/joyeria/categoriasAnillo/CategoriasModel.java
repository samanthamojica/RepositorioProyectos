package com.sam.joyeria.categoriasAnillo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "CategoriasAnillo")


public class CategoriasModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	public String nombreCategoria;

}
