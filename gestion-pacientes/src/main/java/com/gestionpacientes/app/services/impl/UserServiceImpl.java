package com.gestionpacientes.app.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionpacientes.app.model.User;
import com.gestionpacientes.app.repositories.userRepository;
import com.gestionpacientes.app.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private userRepository repository;

	@Override
	public User guardarUsuario(User usuario) {
		return repository.save(usuario);
	}

	@Override
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
