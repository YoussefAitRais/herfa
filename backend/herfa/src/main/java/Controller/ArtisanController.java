package Controller;

import Entity.Artisan;
import Service.ArtisanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@Controller
public class ArtisanController {

    private final ArtisanService artisanService;
    public ArtisanController(ArtisanService artisanService) {
        this.artisanService = artisanService;
    }

    @PostMapping
    public ResponseEntity<?> createArtisan(@RequestBody Artisan artisan) {
        return new ResponseEntity<>("",HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllArtisan() {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getArtisanById(@RequestParam int id) {
        return new ResponseEntity<>("",HttpStatus.OK);
    }
}
