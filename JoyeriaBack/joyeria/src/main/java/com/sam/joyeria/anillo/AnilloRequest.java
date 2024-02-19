package com.sam.joyeria.anillo;

import java.util.List;
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
	
//	private List< Map<String, String>> catalogoImagenes;
	
	
}
