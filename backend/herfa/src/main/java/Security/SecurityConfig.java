package Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // Disable CSRF (مزيان حيت كتستعمل Postman و APIs خارجية)
                .csrf(csrf -> csrf.disable())

                // Disable frame options (اختياري، مفيد إلا كتستعمل H2-console)
                .headers(headers -> headers.frameOptions(frame -> frame.disable()))

                // فتح جميع ال endpoints بدون authentication
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                );

        return http.build();
    }
}
