package com.gestionpacientes.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gestionpacientes.app.model.User;
import com.gestionpacientes.app.repositories.userRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	userRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("No se encontro el usuario con el username: " + username));
		return UserDetailsImpl.build(user);
	}

}
