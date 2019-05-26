package ro.utcn.spet.a1.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ro.utcn.spet.a1.dto.ErrorDTO;

@Component
@RestControllerAdvice
public class ErrorHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(NullPointerException.class)
    public ErrorDTO handlerNPE(NullPointerException ex){
        return new ErrorDTO("NPE");
    }

}
