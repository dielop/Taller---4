package com.gestionpacientes.app.services;
import java.util.List;


import com.gestionpacientes.app.model.User;

public interface UserService {
	User guardarUsuario(User usuario);

	List<User> findAll();

	void delete(Long id);

}
