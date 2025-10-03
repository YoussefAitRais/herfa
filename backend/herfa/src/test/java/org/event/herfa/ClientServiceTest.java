package org.event.herfa;

import org.event.herfa.entity.Client;
import org.event.herfa.repository.ClientRepository;
import org.event.herfa.repository.DevisRepository;
import org.event.herfa.service.ClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ClientServiceTest {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private DevisRepository devisRepository;

    private Client client;

    @BeforeEach
    void setUp() {
        client = new Client();
        client.setName("youssef");
        client.setEmail("youssef@gmail.com");
        client.setPassword("123456");
    }

    @Test
    void createClient() {
        Client saved = clientService.createClient(client).getBody();

        assertNotNull(saved.getId());
        assertEquals("youssef", saved.getName());
        assertEquals("youssef@gmail.com", saved.getEmail());
        assertEquals("123456", saved.getPassword());
    }
}
