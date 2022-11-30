package com.gestionpacientes.app.controller;

import java.util.Set;
import lombok.Data;

//declara variables de creacion de usuario

@Data
public class SignupRequest {
	private String username;	
	private String email;
	private String password;	
	private Set<String> role;
}
