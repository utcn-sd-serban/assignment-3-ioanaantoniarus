package ro.utcn.spet.a1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.spet.a1.dto.AnswerDTO;
import ro.utcn.spet.a1.dto.QuestionDTO;
import ro.utcn.spet.a1.event.QuestionCreatedEvent;
import ro.utcn.spet.a1.exception.QuestionNotFoundException;
import ro.utcn.spet.a1.model.Answer;
import ro.utcn.spet.a1.model.Question;
import ro.utcn.spet.a1.model.Tag;
import ro.utcn.spet.a1.repository.api.QuestionRepository;
import ro.utcn.spet.a1.repository.api.RepositoryFactory;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final RepositoryFactory repositoryFactory;
    private final TagService tagService;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public List<QuestionDTO> listQuestions(){
        List<QuestionDTO> questions=repositoryFactory.createQuestionRepository().findAll().stream()
                .map(QuestionDTO::ofEntity)
                .collect(Collectors.toList());
        questions.sort(Comparator.comparing(QuestionDTO::getDate).reversed());
        return questions;
    }

    @Transactional
    public QuestionDTO addQuestion(String title,String body, String username, String tags){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime localDateTime= LocalDateTime.now();
        String date=localDateTime.format(formatter);
        Question question=repositoryFactory.createQuestionRepository().save(new Question(title, body, username,date));
        String[] tokens=tags.split(" ");
        for(String token:tokens){
            addTagToQuestion(question.getId(), tagService.addTag(token));
        }
        QuestionDTO output=QuestionDTO.ofEntity(question);
        eventPublisher.publishEvent(new QuestionCreatedEvent(output));
        return output;
    }

    @Transactional
    public QuestionDTO findQuestion(int id){
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question=repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        return QuestionDTO.ofEntity(question);
    }

    @Transactional
    public void updateText(int id, String text){
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question = repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        question.setBody(text);
        repository.save(question);
    }

    @Transactional
    public void removeQuestion(int id){
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question = repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        repository.remove(question);
    }

    @Transactional
    public List<QuestionDTO> findByTitle(String title){
        List<QuestionDTO> questions=repositoryFactory.createQuestionRepository().findByTitle(title).stream()
                .map(QuestionDTO::ofEntity)
                .collect(Collectors.toList());;
        return questions;
    }

    @Transactional
    public List<QuestionDTO> findByTag(String tagName){
        Tag tag=repositoryFactory.createTagRepository().findByName(tagName);
        List<QuestionDTO> questions=repositoryFactory.createQuestionRepository().findByTag(tag).stream()
                .map(QuestionDTO::ofEntity)
                .collect(Collectors.toList());
        return questions;
    }

    @Transactional
    public List<AnswerDTO> getQuestionAnswers(int id){
        List<AnswerDTO> answers=repositoryFactory.createQuestionRepository().findQuestionAnswer(id)
                .stream()
                .map(AnswerDTO::ofEntity)
                .collect(Collectors.toList());;
        return answers;
    }

    @Transactional
    public Question addTagToQuestion(int id, Tag tag){
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question=repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        List<Tag> tags=question.getTags();
        tags.add(tag);
        question.setTags(tags);
        repository.save(question);
        return question;
    }

    @Transactional
    public Question addAnswerToQuestion(int id, Answer answer){
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question=repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        List<Answer> answers=question.getAnswers();
        answers.add(answer);
        question.setAnswers(answers);
        repository.save(question);
        return question;
    }
}
