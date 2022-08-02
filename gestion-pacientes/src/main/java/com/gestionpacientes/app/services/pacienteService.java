package com.gestionpacientes.app.services;

import javax.transaction.Transactional;

import com.gestionpacientes.app.model.Paciente;
import com.gestionpacientes.app.repositories.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class pacienteService{
	// Inyecto el repositorio, esto sirve para no iniciarlizarlo desde la clase si no de cuando sea necesario lo haga.
	@Autowired
	pacienteRepository pacienteRepository;
	
	// Busco todos los pacientes en la lista de pacientes
	public List<Paciente> List(){
		return pacienteRepository.findAll();
	}
	
	// Busco un paciente por nombre
	public Optional<Paciente> getByNombre(String nombre){
		return pacienteRepository.findByNombre(nombre);		
	}
	
	public void save(Paciente paciente) {
		pacienteRepository.save(paciente);
	}
	
	/*public void delete(String dni) {
		pacienteRepository.deleteBydni(dni);
	}*/

	
	public boolean existsByNombre(String nombre){
		return pacienteRepository.existsByNombre(nombre);
	}
	
	public boolean existsBydni(String dni){
		System.out.println(pacienteRepository.existsBydni(dni));
		System.out.println(dni);
		return pacienteRepository.existsBydni(dni);
	}
	
	public Optional<Paciente> getBydni(String dni){
		return pacienteRepository.findBydni(dni);		
	}
}
