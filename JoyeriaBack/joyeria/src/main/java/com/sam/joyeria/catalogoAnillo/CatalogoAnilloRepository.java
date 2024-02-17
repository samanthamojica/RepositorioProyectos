package com.sam.joyeria.catalogoAnillo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sam.joyeria.catalogoAnillo.model.CatalogoAnillo;

@Repository
public interface CatalogoAnilloRepository extends JpaRepository<CatalogoAnillo, Integer> {

}
