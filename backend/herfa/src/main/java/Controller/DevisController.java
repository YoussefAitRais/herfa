package Controller;

import DTO.requestDTO.DevisRequestDTO;
import Entity.DevisSatus;
import Service.DevisService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@Controller
@RequestMapping("/devis")
public class DevisController {


    private final DevisService devisService;

    public DevisController(DevisService devisService) {
        this.devisService = devisService;
    }

    @PostMapping
    public ResponseEntity<?> createDevis (@Valid @RequestBody DevisRequestDTO devisRequestDTO) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<?> getAllDevis() {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDevisById(@PathVariable Long id) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateDevis(@PathVariable Long id, @Valid @RequestBody DevisRequestDTO devisRequestDTO) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDevisById(@PathVariable Long id) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @DeleteMapping("/all")
    public ResponseEntity<?> deleteAllDevis() {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    //Operations spécifiques

    @PostMapping("/send")
    public ResponseEntity<?> sendDevis(@Valid @RequestBody DevisRequestDTO devisRequestDTO) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping("Client/{clientId}")
    public ResponseEntity<?> listDevisByClient(@PathVariable Long clientId) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping("Artisan/{artisanId}")
    public ResponseEntity<?> listDevisByArtisan(@PathVariable Long artisanId) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateDevisStatus(@PathVariable Long id, @RequestParam String status) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    public static class updateDevisStatusRequest {
        public DevisSatus satus;
    }









}
