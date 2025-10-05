package org.event.herfa.controller;

import org.event.herfa.entity.Client;
import org.event.herfa.entity.Devis;
import org.event.herfa.entity.DevisStatus;
import org.event.herfa.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/create")
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client savedClient = clientService.createClient(client).getBody();
        return new ResponseEntity<>(savedClient, HttpStatus.CREATED);
    }

    @GetMapping("/allClient")
    public ResponseEntity<List<Client>> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client updatedClient = clientService.updateClient(id, client);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void> deleteClientById(@PathVariable Long id) {
        return clientService.deleteClient(id);
    }

    @DeleteMapping("/deleteAllClient")
    public ResponseEntity<Void> deleteAllClients() {
        clientService.getAllClients();
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/demander-devis")
    public Devis demanderDevis(@PathVariable Long id, @RequestBody Devis devis) {
        return clientService.demanderDevis(id, devis);
    }

    @GetMapping("/{id}/devis")
    public List<Devis> getAllDevisForClient(@PathVariable Long id) {
        return (List<Devis>) clientService.getAllDevisForClient(id);
    }

    @PutMapping("/devis/{id}/status")
    public Devis updateDevisStatus(@PathVariable Long id, @RequestParam DevisStatus status) {
        return clientService.updateDevisStatus(id, status);
    }
}