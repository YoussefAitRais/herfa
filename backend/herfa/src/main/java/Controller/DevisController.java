package Controller;

import DTO.requestDTO.DevisRequestDTO;
import Entity.Devis;
import Entity.DevisSatus;
import Service.DevisService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@RequestMapping("/devis")
public class DevisController {


    private final DevisService devisService;

    public DevisController(DevisService devisService) {
        this.devisService = devisService;
    }

    @PostMapping
    public ResponseEntity<Devis> createDevis (@Valid @RequestBody Devis devis) {
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
    public ResponseEntity<Devis> sendDevis(@Valid @RequestBody Devis devis) {
        return devisService.sendDevis(devis);
    }

    @GetMapping("Client/{clientId}")
    public ResponseEntity<List<Devis>> listDevisByClient(@PathVariable Long clientId) {
        return devisService.listDevisByClient(clientId);
    }

    @GetMapping("Artisan/{artisanId}")
    public ResponseEntity<List<Devis>> listDevisByArtisan(@PathVariable Long artisanId) {
        return devisService.listDevisByArtisan(artisanId);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Devis> updateDevisStatus(@PathVariable Long id, @RequestParam DevisSatus status) {
        return devisService.updateStatusDevis(id, status);
    }

    public static class updateDevisStatusRequest {
        public DevisSatus satus;
    }









}
