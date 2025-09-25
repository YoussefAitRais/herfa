package Controller;


import Entity.Client;
import Service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        return clientService.createClient(client);
    }

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id);
    }

    @PutMapping
    public ResponseEntity<Client> updateClient(@RequestBody Long id, @RequestBody Client client) {
        Client updatedClient = clientService.updateClient(id, client);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteClientById(@PathVariable Long id) {
        return clientService.deleteClient(id);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllClients() {
        clientService.getAllClients();
        return ResponseEntity.noContent().build();
    }



}
