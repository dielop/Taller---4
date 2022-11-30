package com.gestionpacientes.app.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionpacientes.app.model.User;
import com.gestionpacientes.app.repositories.userRepository;
import com.gestionpacientes.app.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	// injecto user repository...
	@Autowired
	private userRepository repository;

	// Guardar usuario ...
	@Override
	public User guardarUsuario(User usuario) {
		return repository.save(usuario);
	}
	// Obtiene los usuarios ...
	@Override
	public List<User> findAll() {
		return repository.findAll();
	}
	// Eliminar usuario ...
	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
