package org.event.herfa.service;

import org.event.herfa.entity.Artisan;
import org.event.herfa.repository.ArtisanRepository;
import org.event.herfa.repository.DevisRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtisanService {

    private ArtisanRepository artisanRepository;
    private DevisRepository devisRepository;

    public ArtisanService(ArtisanRepository artisanRepository, DevisRepository devisRepository) {
        this.artisanRepository = artisanRepository;
        this.devisRepository = devisRepository;
    }

    public Artisan createArtisan(Artisan artisan) {
        return artisanRepository.save(artisan);
    }

    public Artisan save(Artisan artisan) {
        return artisanRepository.save(artisan);
    }

    public List<Artisan> findAll() {
        return artisanRepository.findAll();
    }


    public Artisan findById(Long id) {
        return artisanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public Artisan updateArtisan(Long id, String name, String email, String password, String job , String location, String description) {
        Artisan existingArtisan = artisanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
        existingArtisan.setName(name);
        existingArtisan.setEmail(email);
        existingArtisan.setPassword(password);
        existingArtisan.setJob(job);
        existingArtisan.setLocation(location);
        existingArtisan.setDescription(description);
        return artisanRepository.save(existingArtisan);
    }

    public ResponseEntity<Void> deleteArtisan(Long id) {
        if (!artisanRepository.existsById(id)) {
            throw new RuntimeException("Artisan not found");
        }
        artisanRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public void deletById(Long id) {
        artisanRepository.deleteById(id);
    }



}
