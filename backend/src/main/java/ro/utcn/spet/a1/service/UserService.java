package ro.utcn.spet.a1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.spet.a1.dto.UserDTO;
import ro.utcn.spet.a1.exception.UserNotFoundException;
import ro.utcn.spet.a1.model.User;
import ro.utcn.spet.a1.repository.api.RepositoryFactory;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final RepositoryFactory repositoryFactory;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=repositoryFactory.createUserRepository().findByUsername(username)
                .orElseThrow(()->new UsernameNotFoundException("Unknown user!"));
        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
    }

    @Transactional
    public UserDTO loadCurrentUser(){
        String name= SecurityContextHolder.getContext().getAuthentication().getName();
        User user=repositoryFactory.createUserRepository().findByUsername(name).orElseThrow(UserNotFoundException::new);
        return UserDTO.ofEntity(user);
    }
}
