package org.event.herfa.controller;


import org.event.herfa.entity.Client;
import org.event.herfa.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@RequestMapping("/client")
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
    public ResponseEntity<Client> updateClient(@RequestBody Long id, @RequestBody Client client) {
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



}
