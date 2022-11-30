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
	public List<Paciente> ListPatients(){
		return pacienteRepository.findAll();
	}
	
	// Busco un paciente por nombre
	public Optional<Paciente> getByNombre(String nombre){
		return pacienteRepository.findByNombre(nombre);		
	}
	
	// Obtengo un paciente por DNI
	public Paciente getBydni(String dni){
		return pacienteRepository.findBydni(dni).get();		
	}
	
	// Obtengo un paciente
	public Paciente getById(Long id){
		return pacienteRepository.findById(id).get();
	}
	
	// Guardo un paciente
	public void savePatient(Paciente paciente) {
		pacienteRepository.save(paciente);
	}
	// Elimino un paciente
	public void deletePatient(String dni) {
		Optional<Paciente> paciente = pacienteRepository.findBydni(dni);
		this.pacienteRepository.delete(paciente.get());
	}

	
	public boolean existsByNombre(String nombre){
		return pacienteRepository.existsByNombre(nombre);
	}
	
	public boolean existsBydni(String dni){
		return pacienteRepository.existsBydni(dni);
	}
	
	public boolean existsById(Long id){
		return pacienteRepository.existsById(id);
	}
	

}
