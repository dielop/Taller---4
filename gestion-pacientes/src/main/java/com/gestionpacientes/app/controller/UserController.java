package com.gestionpacientes.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestionpacientes.app.model.User;
import com.gestionpacientes.app.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserService service;
	
	@PostMapping("/user")
	public User guardarUsuario(@RequestBody User usuario) {
		return service.guardarUsuario(usuario);
	}

	@GetMapping("/user")
	public List<User> getAll() {
		return service.findAll();
	}

	@DeleteMapping("/user/{id}")
	public void borrarUsuario(@PathVariable(name = "id") Long id) {
		service.delete(id);
	}

}
