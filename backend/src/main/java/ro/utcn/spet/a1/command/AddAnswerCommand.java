package ro.utcn.spet.a1.command;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import ro.utcn.spet.a1.dto.AnswerDTO;
import ro.utcn.spet.a1.service.AnswerService;

@Data
@RequiredArgsConstructor
public class AddAnswerCommand implements Command {
    private final AnswerDTO dto;
    private final int id;
    private final AnswerService answerService;
    @Override
    public Object execute() {
        return answerService.addAnswer(dto.getText(),dto.getUsername(),id);
    }
}
