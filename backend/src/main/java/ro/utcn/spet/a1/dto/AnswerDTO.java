package ro.utcn.spet.a1.dto;

import lombok.Data;
import ro.utcn.spet.a1.model.Answer;

@Data
public class AnswerDTO {
    private String username;
    private String text;
    private String date;

    public static AnswerDTO ofEntity(Answer answer){
        AnswerDTO answerDTO=new AnswerDTO();
        answerDTO.setUsername(answer.getUsername());
        answerDTO.setText(answer.getBody());
        answerDTO.setDate(answer.getDate());
        return answerDTO;
    }

}
