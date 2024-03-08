package com.sam.joyeria.catalogoAnillo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sam.joyeria.catalogoAnillo.model.CatalogoAnillo;

@Repository
public interface CatalogoAnilloRepository extends JpaRepository<CatalogoAnillo, Integer> {}
