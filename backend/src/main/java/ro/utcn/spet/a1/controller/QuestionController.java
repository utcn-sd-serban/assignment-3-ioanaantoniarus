package ro.utcn.spet.a1.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import ro.utcn.spet.a1.command.AddQuestionCommand;
import ro.utcn.spet.a1.command.Command;
import ro.utcn.spet.a1.command.Invoker;
import ro.utcn.spet.a1.dto.AnswerDTO;
import ro.utcn.spet.a1.dto.QuestionDTO;
import ro.utcn.spet.a1.event.BaseEvent;
import ro.utcn.spet.a1.service.QuestionService;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final SimpMessagingTemplate messagingTemplate;

    @GetMapping("/questions")
    public List<QuestionDTO> readAll(){
        return questionService.listQuestions();
    }

    @PostMapping("/questions")
    public QuestionDTO create(@RequestBody QuestionDTO dto){
        Command command=new AddQuestionCommand(dto,questionService);
        Invoker invoker=new Invoker(command);
        return (QuestionDTO) invoker.add();
    }

    @GetMapping("/questions/filter-title")
    public List<QuestionDTO> readFilterTitle(@RequestParam(value="title") String title){
        return questionService.findByTitle(title);
    }

    @GetMapping("/questions/filter-tag")
    public List<QuestionDTO> readFilterTag(@RequestParam(value="tag") String tag){
        return questionService.findByTag(tag);
    }

    @GetMapping("/questions/{id}")
    public QuestionDTO searchById(@PathVariable int id){
        return questionService.findQuestion(id);
    }

    @GetMapping("/questions/{id}/answers")
    public List<AnswerDTO> loadQuestionAnswers(@PathVariable int id){
        return questionService.getQuestionAnswers(id);
    }

    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event){
        log.info("Got an event: {}.",event);
        messagingTemplate.convertAndSend("/topic/events",event);
    }
}
