package com.sam.joyeria.anillo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sam.joyeria.anillo.model.Anillo;

@Repository
public interface AnilloRepository extends JpaRepository<Anillo, Integer>{}
