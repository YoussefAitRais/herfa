package org.event.herfa.service;

import org.event.herfa.entity.Client;
import org.event.herfa.repository.ClientRepository;
import org.event.herfa.repository.DevisRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private ClientRepository clientRepository;
    private DevisRepository devisRepository;


    public ClientService(ClientRepository clientRepository, DevisRepository devisRepository) {
        this.clientRepository = clientRepository;
        this.devisRepository = devisRepository;
    }

    public ResponseEntity<Client> createClient(Client client) {
        Client saved = clientRepository.save(client);
        return new ResponseEntity<>(saved , HttpStatus.CREATED);
    }

    public ResponseEntity<Client> getClientById(Long id) {
        Client clients = clientRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Client not found"));
        return new ResponseEntity<>(clients, HttpStatus.OK);

    }


    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientRepository.findAll();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    public Client updateClient(Long id, Client client) {
        Client existingClient = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));

        existingClient.setName(client.getName());
        existingClient.setEmail(client.getEmail());
        existingClient.setPassword(client.getPassword());
        existingClient.setPhoneNumber(client.getPhoneNumber());

        Client saved = clientRepository.save(existingClient);

        return new ResponseEntity<>(saved, HttpStatus.OK).getBody();
    }

    public ResponseEntity<Void> deleteClient(Long id) {
        if (!clientRepository.existsById(id)) {
            throw new RuntimeException("Client not found");
        }
        clientRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
