package com.gestionpacientes.app.controller;



import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestionpacientes.app.dto.pacienteMensaje;
import com.gestionpacientes.app.model.Paciente;
import com.gestionpacientes.app.services.pacienteService;

@RestController
@RequestMapping("/pacientes")
@CrossOrigin(origins = "http://localhost:4200")

public class pacienteController {
	
	@Autowired
	private pacienteService _pacienteService;
	
	@GetMapping("/lista")
	public ResponseEntity<List<Paciente>> list(){
		try {
			List<Paciente> list = _pacienteService.List();
			
			if(list.isEmpty()){
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			return new ResponseEntity<List<Paciente>>(list, HttpStatus.OK);
		}
			
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/*@GetMapping("/detail/{id}")
	public ResponseEntity<Paciente> getById(@PathVariable("id") String id){
		//Verifico si existe el id, si no existe retorno el mensaje
		if(!_pacienteService.existsById(id)) {
			return new ResponseEntity(new pacienteMensaje("No existe el paciente con el ID solicitado"), HttpStatus.NOT_FOUND);
		}else{
		// Como es optional tengo que usar el get, variable paciente de tipo Paciente
		Paciente paciente = _pacienteService.getOne(id).get();
		return new ResponseEntity<Paciente>(paciente, HttpStatus.OK);
		}
	}*/
	
	@GetMapping("/detailname/{nombre}")
	public ResponseEntity<Paciente> getByNombre(@PathVariable("nombre") String nombre){
		//Verifico si existe el nombre, si no existe retorno el mensaje
		if(!_pacienteService.existsByNombre(nombre)) {
			return new ResponseEntity(new pacienteMensaje("No existe el paciente - Nombre inexistente"), HttpStatus.NOT_FOUND);
		}else{
		// Como es optional tengo que usar el get, variable paciente de tipo Paciente
		Paciente paciente = _pacienteService.getByNombre(nombre).get();
		return new ResponseEntity<Paciente>(paciente, HttpStatus.OK);
		}		
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Paciente paciente){
		System.out.println(paciente);
		
		if(StringUtils.isBlank(paciente.getNombre())) {
			return new ResponseEntity(new pacienteMensaje("Debe ingresar un nombre"), HttpStatus.BAD_REQUEST);
		}
		
		if(StringUtils.isBlank(paciente.getApellido())) {
			return new ResponseEntity(new pacienteMensaje("Debe ingresar un apellido"), HttpStatus.BAD_REQUEST);
		}
		
		if(StringUtils.isBlank(String.valueOf(paciente.getDNI()))) {
			return new ResponseEntity(new pacienteMensaje("Debe ingresar un dni"), HttpStatus.BAD_REQUEST);
		}
		
		// Verifico si existe paciente con el dni ingresado, si no, lo creamos 
		if(_pacienteService.existsBydni(paciente.getDNI())){
			return new ResponseEntity(new pacienteMensaje("Ya existe un paciente con el dni ingresado"), HttpStatus.BAD_REQUEST);
		}
		
		Paciente _paciente = new Paciente(paciente.getDNI(), paciente.getNombre(), paciente.getApellido(), paciente.getLocalidad(), paciente.getDireccion(), paciente.getTelefono());
		_pacienteService.save(_paciente);
		
		return new ResponseEntity(_paciente, HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{dni}")
	public ResponseEntity<?> update(@PathVariable("dni") String dni,@RequestBody Paciente paciente){
		
		// Si no existe el dni y el dni ingresado no matchea con ningun id entonces no existe
		if(!_pacienteService.existsBydni(paciente.getDNI())) {
			return new ResponseEntity(new pacienteMensaje("No existe paciente con el dni solicitado"), HttpStatus.NOT_FOUND);
		}

		// Verificacion de campos en blanco
		if(StringUtils.isBlank(paciente.getNombre())) {
			return new ResponseEntity(new pacienteMensaje("Debe ingresar un nombre"), HttpStatus.BAD_REQUEST);
		}
		if(StringUtils.isBlank(paciente.getApellido())) {
			return new ResponseEntity(new pacienteMensaje("Debe ingresar un apellido"), HttpStatus.BAD_REQUEST);
		}
		if(StringUtils.isBlank(String.valueOf((paciente.getDNI())))) {
			return new ResponseEntity(new pacienteMensaje("Debe ingresar un dni"), HttpStatus.BAD_REQUEST);
		}
		
		Paciente _paciente = _pacienteService.getBydni(dni).get();
		_paciente.setDNI(paciente.getDNI());
		_paciente.setNombre(paciente.getNombre());
		_paciente.setApellido(paciente.getApellido());
		_paciente.setLocalidad(paciente.getLocalidad());
		_paciente.setDireccion(paciente.getDireccion());
		_paciente.setTelefono(paciente.getTelefono());
		
		_pacienteService.save(paciente);
		
		return new ResponseEntity(new pacienteMensaje("Paciente actualizado con exito"), HttpStatus.OK);
	}
	
	/*@DeleteMapping("/delete/{dni}")
	public ResponseEntity<?> delete(@PathVariable("dni")String dni){
		if(!_pacienteService.existsBydni(dni)) {
			return new ResponseEntity(new pacienteMensaje("No existe paciente con el ID solicitado"), HttpStatus.NOT_FOUND);
		}else {
			_pacienteService.delete(dni);
			return new ResponseEntity(new pacienteMensaje("Paciente eliminado con exito"), HttpStatus.OK);
		}
	}*/
		
}