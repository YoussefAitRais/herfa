package org.event.herfa;

import org.event.herfa.entity.Artisan;
import org.event.herfa.entity.Client;
import org.event.herfa.repository.ClientRepository;
import org.event.herfa.repository.DevisRepository;
import org.event.herfa.service.ArtisanService;
import org.event.herfa.service.ClientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ArtisanServiceTest {

    @Autowired

    private ArtisanService artisanService;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private DevisRepository devisRepository;

    private Artisan artisan;

    @BeforeEach
    void setUp() {
        artisan = new Artisan();
        artisan.setName("artisan");
        artisan.setEmail("artisan@gmail.com");
        artisan.setPassword("123456");
    }

    @Test
    void createArtisan() {
        Artisan saved = artisanService.createArtisan(artisan);

        assertNotNull(saved.getId());
        assertEquals("artisan", saved.getName());
        assertEquals("artisan@gmail.com", saved.getEmail());
        assertEquals("123456", saved.getPassword());
    }
}
