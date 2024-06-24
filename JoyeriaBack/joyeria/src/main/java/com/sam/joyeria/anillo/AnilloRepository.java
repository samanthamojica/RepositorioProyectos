package com.sam.joyeria.anillo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sam.joyeria.anillo.model.Anillo;

@Repository
public interface AnilloRepository extends JpaRepository<Anillo, Integer> {}
