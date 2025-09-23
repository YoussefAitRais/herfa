package Service;

import Entity.Client;
import Repository.ClientRepository;
import Repository.DevisRepository;
import org.springframework.stereotype.Service;

import java.util.List;


public class ClientService {

    private ClientRepository clientRepository;
    private DevisRepository devisRepository;


    public ClientService(ClientRepository clientRepository, DevisRepository devisRepository) {
        this.clientRepository = clientRepository;
        this.devisRepository = devisRepository;
    }

    public Client createClient(String name, String email, String password, String phoneNumber) {
        Client client = new Client(phoneNumber, password, email, name, null);
        return clientRepository.save(client);
    }

    public Client getClient(String phoneNumber) {
        return clientRepository.findAll().stream()
                .filter(client -> client.getPhoneNumber().equals(phoneNumber))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public Client getClientById(Long id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client updateClient(Long id, String name, String email, String password, String phoneNumber) {
        Client existingClient = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
        existingClient.setName(name);
        existingClient.setEmail(email);
        existingClient.setPassword(password);
        existingClient.setPhoneNumber(phoneNumber);
        return clientRepository.save(existingClient);
    }

    public void deleteClient(Long id) {
        if (!clientRepository.existsById(id)) {
            throw new RuntimeException("Client not found");
        }
        clientRepository.deleteById(id);
    }
}
