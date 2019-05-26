package ro.utcn.spet.a1.dto;

import lombok.Data;
import org.springframework.util.CollectionUtils;
import ro.utcn.spet.a1.model.Question;

@Data
public class QuestionDTO {
    private int id;
    private String title;
    private String username;
    private String text;
    private String tags;
    private String date;

    public static QuestionDTO ofEntity(Question question){
        QuestionDTO questionDTO=new QuestionDTO();
        questionDTO.setId(question.getId());
        questionDTO.setTitle(question.getTitle());
        questionDTO.setUsername(question.getUsername());
        questionDTO.setText(question.getBody());
        if(!CollectionUtils.isEmpty(question.getTags()))
            questionDTO.setTags(question.tagsToString());
        questionDTO.setDate(question.getDate());
        return questionDTO;
    }
}