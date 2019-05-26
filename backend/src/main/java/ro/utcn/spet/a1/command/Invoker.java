package ro.utcn.spet.a1.command;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class Invoker {
    private final Command command;

    public Object add(){
       return command.execute();
    }
}
