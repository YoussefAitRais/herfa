package org.event.herfa.controller;

import org.event.herfa.entity.Artisan;
import org.event.herfa.entity.Devis;
import org.event.herfa.service.ArtisanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/artisans")
@CrossOrigin(origins = "http://localhost:4200")
public class ArtisanController {

    private final ArtisanService artisansService;

    public ArtisanController(ArtisanService artisansService) {
        this.artisansService = artisansService;
    }

    @PostMapping("/create")
    public ResponseEntity<Artisan> createArtisan(@RequestBody Artisan artisan) {
        Artisan savedArtisan = artisansService.createArtisan(artisan);
        return new ResponseEntity<>(savedArtisan, HttpStatus.CREATED);
    }

    @GetMapping("/allArtisan")
    public ResponseEntity<List<Artisan>> getAllArtisan() {
        return ResponseEntity.ok(artisansService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Artisan> getArtisanById(@PathVariable Long id) {
        Artisan artisan = artisansService.findById(id);
        return ResponseEntity.ok(artisan);
    }

    @GetMapping("/{id}/devis")
    public ResponseEntity<List<Devis>> getAllDevisForArtisan(@PathVariable Long id) {
        return artisansService.getAllDevisForArtisan(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Artisan> updateArtisan(@RequestBody Artisan artisan , @PathVariable Long id) {
        Artisan updates = artisansService.findById(id);
        updates.setName(artisan.getName());
        updates.setEmail(artisan.getEmail());
        updates.setPassword(artisan.getPassword());
        updates.setLocation(artisan.getLocation());
        updates.setJob(artisan.getJob());
        updates.setDescription(artisan.getDescription());

        Artisan saved = artisansService.save(updates);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArtisanById(@PathVariable Long id) {
        return artisansService.deleteArtisan(id);
    }

    @DeleteMapping("/{id}/deleteAllArtisan")
    public ResponseEntity<Artisan> deleteAllArtisan() {
        artisansService.findAll().forEach(artisan -> artisansService.deleteArtisan(artisan.getId()));
        return ResponseEntity.noContent().build();
    }
}