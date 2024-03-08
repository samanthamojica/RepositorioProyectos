package com.sam.joyeria.anillo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sam.joyeria.anillo.model.Anillo;

@Repository
public interface AnilloRepository extends JpaRepository<Anillo, Integer> {

 // @Query("SELECT a.nombreAnillo FROM Anillo a WHERE a.idCategoria = :idCategoria")
	@Query("SELECT a FROM Anillo  a WHERE a.idCategoria = :idCategoria")
	List<Anillo> findeAnillosByCategoria(@Param("idCategoria") Integer idCategoria);

	// El repositorio esta asociado a la entidad Anillo, asi que no es necesario  especificar el esquema.
	// En JPQL se espera que utilices los nombres de las entidades y sus atributos, no los nombres de las tablas  y columnas de la BD directamente.

}
