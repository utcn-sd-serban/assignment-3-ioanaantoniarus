package ro.utcn.spet.a1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
//@AllArgsConstructor
public class User {

    private int id;
    private String username;
    private String password;

    //List<Question> questions;

    public User(int id, String username, String password){
        this.id=id;
        this.username=username;
        this.password=password;
    }

    public User(String username, String password){
        this.username=username;
        this.password=password;
    }
}
