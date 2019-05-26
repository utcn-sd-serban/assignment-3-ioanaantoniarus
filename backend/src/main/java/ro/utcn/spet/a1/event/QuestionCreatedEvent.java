package ro.utcn.spet.a1.event;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ro.utcn.spet.a1.dto.QuestionDTO;

@Data
@EqualsAndHashCode(callSuper = true)
public class QuestionCreatedEvent extends BaseEvent {
    private final QuestionDTO question;

    public QuestionCreatedEvent(QuestionDTO question) {
        super(EventType.QUESTION_CREATED);
        this.question = question;
    }
}
