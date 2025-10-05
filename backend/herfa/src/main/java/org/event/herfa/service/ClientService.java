package org.event.herfa.service;

import org.event.herfa.entity.Client;
import org.event.herfa.entity.Devis;
import org.event.herfa.entity.DevisStatus;
import org.event.herfa.repository.ClientRepository;
import org.event.herfa.repository.DevisRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private  final ClientRepository clientRepository;
    private final DevisRepository devisRepository;


    public ClientService(ClientRepository clientRepository, DevisRepository devisRepository) {
        this.clientRepository = clientRepository;
        this.devisRepository = devisRepository;
    }

    public  ResponseEntity<Client> createClient(Client client) {
        Client saved = clientRepository.save(client);
        return new ResponseEntity<>(saved , HttpStatus.CREATED);
    }

    public ResponseEntity<Client> getClientById(Long id) {
        System.out.println(id);
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

    public Devis demanderDevis(Long clientId, Devis devis) {
        Client client = clientRepository.findById(clientId).orElseThrow();
        devis.setClient(client);
        devis.setStatus(DevisStatus.PENDING);
        return devisRepository.save(devis);
    }

    public Devis updateDevisStatus(Long devisId, DevisStatus status) {
        Devis devis = devisRepository.findById(devisId).orElseThrow();
        devis.setStatus(status);
        return devisRepository.save(devis);
    }

    public ResponseEntity<List<Devis>> getAllDevisForClient(Long clientId) {
        List<Devis> devisList = devisRepository.findAll().stream()
                .filter(d -> d.getClient() != null && d.getClient().getId().equals(clientId))
                .toList();
        return new ResponseEntity<>(devisList, HttpStatus.OK);
    }
}