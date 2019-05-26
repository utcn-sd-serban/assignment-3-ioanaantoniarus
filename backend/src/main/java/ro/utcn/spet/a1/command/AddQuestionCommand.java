package ro.utcn.spet.a1.command;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import ro.utcn.spet.a1.dto.QuestionDTO;
import ro.utcn.spet.a1.service.QuestionService;

@Data
@RequiredArgsConstructor
public class AddQuestionCommand implements Command{
    private final QuestionDTO dto;
    private final QuestionService questionService;

    @Override
    public Object execute() {
        return questionService.addQuestion(dto.getTitle(),dto.getText(),dto.getUsername(),dto.getTags());
    }
}
