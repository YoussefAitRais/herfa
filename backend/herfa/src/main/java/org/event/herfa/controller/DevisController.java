package org.event.herfa.controller;

import org.event.herfa.dto.requestDTO.DevisRequestDTO;
import org.event.herfa.entity.Devis;
import org.event.herfa.entity.DevisStatus;
import org.event.herfa.service.DevisService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/devis")
@CrossOrigin(origins = "http://localhost:4200")
public class DevisController {

    private final DevisService devisService;

    public DevisController(DevisService devisService) {
        this.devisService = devisService;
    }

    @PostMapping("/create")
    public ResponseEntity<Devis> createDevis (@RequestBody Devis devis) {
        return devisService.createDevis(devis);
    }

    @GetMapping("/allDevis")
    public ResponseEntity<List<Devis>> getAllDevis() {
        return devisService.getAllDevis();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Devis> getDevisById(@PathVariable Long id) {
        return devisService.getDevisById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Devis> updateDevis(@PathVariable Long id, @Valid @RequestBody Devis devis) {
        return devisService.updateDevis(id , devis);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDevisById(@PathVariable Long id) {
        return devisService.deleteDevisById(id);
    }

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAllDevis() {
        return devisService.deleteAllDevis();
    }

    //Operations spécifiques

    @PostMapping("/send")
    public ResponseEntity<Devis> sendDevis(@Valid @RequestBody DevisRequestDTO devisRequestDTO) {
        return devisService.sendDevis(devisRequestDTO);
    }

    @GetMapping("/Client/{clientId}")
    public ResponseEntity<List<Devis>> listDevisByClient(@PathVariable Long clientId) {
        return devisService.listDevisByClient(clientId);
    }

    @GetMapping("/Artisan/{artisanId}")
    public ResponseEntity<List<Devis>> listDevisByArtisan(@PathVariable Long artisanId) {
        return devisService.listDevisByArtisan(artisanId);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Devis> updateDevisStatus(@PathVariable Long id, @RequestParam DevisStatus status) {
        return devisService.updateStatusDevis(id, status);
    }

    public static class updateDevisStatusRequest {
        public DevisStatus satus;
    }
}