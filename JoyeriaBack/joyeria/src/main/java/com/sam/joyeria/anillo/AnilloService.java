package com.sam.joyeria.anillo;

import java.io.IOException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.sam.joyeria.anillo.model.Anillo;

import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.servlet.annotation.MultipartConfig;

@Service
public class AnilloService {

	// inyeccion de dependencias
	@Autowired
	private AnilloRepository anilloRepository;

	public int guardarInfoAnillo(Anillo anillo) {
		System.out.print(" ");
		anilloRepository.save(anillo);
		int idAnillo;
		System.out.print("Id del anillo almacenado: " + anillo.getId());
		idAnillo = anillo.getId();
		return idAnillo;
		
	}

	

}