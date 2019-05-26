package ro.utcn.spet.a1.dto;

import lombok.Data;
import ro.utcn.spet.a1.model.User;

@Data
public class UserDTO {
    private String username;
    private String password;

    public static UserDTO ofEntity(User user){
        UserDTO userDTO=new UserDTO();
        userDTO.setUsername(user.getUsername());
        userDTO.setPassword(user.getPassword());
        return userDTO;
    }
}
