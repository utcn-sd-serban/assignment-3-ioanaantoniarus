package ro.utcn.spet.a1.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.spet.a1.command.AddAnswerCommand;
import ro.utcn.spet.a1.command.Command;
import ro.utcn.spet.a1.command.Invoker;
import ro.utcn.spet.a1.dto.AnswerDTO;
import ro.utcn.spet.a1.service.AnswerService;

@RestController
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;

    @PostMapping("/answers/{id}")
    public AnswerDTO createAnswer(@RequestBody AnswerDTO dto, @PathVariable int id){
        Command command=new AddAnswerCommand(dto,id,answerService);
        Invoker invoker=new Invoker(command);
        return (AnswerDTO)invoker.add();
    }

}
