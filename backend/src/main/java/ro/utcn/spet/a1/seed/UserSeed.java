package ro.utcn.spet.a1.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.spet.a1.model.Question;
import ro.utcn.spet.a1.model.User;
import ro.utcn.spet.a1.repository.api.QuestionRepository;
import ro.utcn.spet.a1.repository.api.RepositoryFactory;
import ro.utcn.spet.a1.repository.api.UserRepository;

@Component
@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE)
public class UserSeed  implements CommandLineRunner {

    private final RepositoryFactory factory;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        QuestionRepository repositoryQ = factory.createQuestionRepository();
        UserRepository repositoryUser=factory.createUserRepository();

        if (repositoryUser.findAll().isEmpty()){
            repositoryUser.save(new User("ioana33", passwordEncoder.encode("ioana33")));
            repositoryUser.save(new User("AnaBanana",passwordEncoder.encode("blabla")));
            repositoryUser.save(new User("Andrei00",passwordEncoder.encode("0000")));
        }
    }
}
