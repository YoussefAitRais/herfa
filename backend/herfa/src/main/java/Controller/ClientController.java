package Controller;


import Entity.Client;
import Service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@Controller
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    public ResponseEntity<?> createClient(@RequestBody Client client) {
        return new ResponseEntity<>("", HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity<?> getAllClients() {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getClientById(@RequestParam int id) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateClient(@RequestBody Client client) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteClientById(@RequestParam int id) {
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteAllClients() {
        return new ResponseEntity<>("", HttpStatus.OK);
    }



}
