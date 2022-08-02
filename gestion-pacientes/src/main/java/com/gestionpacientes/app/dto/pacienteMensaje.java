package com.gestionpacientes.app.dto;

public class pacienteMensaje {
	
	private String mensaje;
	
	public pacienteMensaje() {
		
	}
	
	public pacienteMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
	public String getMessage() {
		return mensaje;
	}
	
	public void setMessage(String mensaje) {
		this.mensaje = mensaje;
	}
}
