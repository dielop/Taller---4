package com.gestionpacientes.app.controller;

import lombok.Data;

// declara variables de login

@Data
public class LoginRequest {
	private String username;
	private String email;
	private String password;
	
}
