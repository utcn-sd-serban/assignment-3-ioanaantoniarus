package ro.utcn.spet.a1.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.spet.a1.dto.UserDTO;
import ro.utcn.spet.a1.service.UserService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
   public UserDTO readCurrentUser(){
       return userService.loadCurrentUser();
   }
}
