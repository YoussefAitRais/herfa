package org.event.herfa.service;


import org.event.herfa.dto.requestDTO.DevisRequestDTO;
import org.event.herfa.entity.Artisan;
import org.event.herfa.entity.Client;
import org.event.herfa.entity.Devis;
import org.event.herfa.entity.DevisStatus;
import org.event.herfa.repository.ArtisanRepository;
import org.event.herfa.repository.ClientRepository;
import org.event.herfa.repository.DevisRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DevisService {


    private final DevisRepository devisRepository;
    private final ArtisanService artisanService;
    private final ClientService clientService;
    private final InternalResourceViewResolver defaultViewResolver;

    public DevisService(
            DevisRepository devisRepository,
            ArtisanService artisanService,
            ClientService clientService,
            InternalResourceViewResolver defaultViewResolver) {
        this.devisRepository = devisRepository;
        this.artisanService = artisanService;
        this.clientService = clientService;
        this.defaultViewResolver = defaultViewResolver;
    }


    //CRUD basiques

    public ResponseEntity<Devis> createDevis(Devis devis){
        return new ResponseEntity<>(devisRepository.save(devis),HttpStatus.CREATED);
    }

    public ResponseEntity<List<Devis>> getAllDevis(){
        List<Devis> devis = devisRepository.findAll();
        return new ResponseEntity<>(devis, HttpStatus.OK);
    }

    public ResponseEntity<Devis> getDevisById(Long id){
        Devis devis = devisRepository.findById(id).orElseThrow(() ->
        new RuntimeException("Devis not found"));
                return new ResponseEntity<>(devis, HttpStatus.OK);
    }



    public ResponseEntity<Devis> updateDevis(Long id, Devis devis){
        Devis existingDevis = devisRepository.findById(devis.getId()).orElseThrow(() ->
                new RuntimeException("Devis not found"));
        existingDevis.setDateDevis(devis.getDateDevis());
        existingDevis.setAmount(devis.getAmount());
        return new ResponseEntity<>(devisRepository.save(existingDevis),HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteDevisById(Long id){
        devisRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public ResponseEntity<Void> deleteAllDevis(){
        devisRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    //Operations spécifiques

    public ResponseEntity<Devis> sendDevis(DevisRequestDTO devisRequestDTO) {
        System.out.println(devisRequestDTO.clientId());
        // get client by id
        Client client = clientService.getClientById(devisRequestDTO.clientId() ).getBody();

        // get artisan by is
        Artisan artisan = artisanService.findById(devisRequestDTO.artisanId());

        Devis devis = new Devis();

        devis.setAmount( devisRequestDTO.amount() );
        devis.setDateDevis(devisRequestDTO.dateDevis());
        devis.setStatus(devisRequestDTO.devisStatus());
        devis.setClient( client );
        devis.setArtisan( artisan );


        if (devis.getDateDevis() == null) {
            devis.setDateDevis(LocalDateTime.now());
        }
        return new ResponseEntity<>(devisRepository.save(devis),HttpStatus.OK);
    }

    public ResponseEntity<List<Devis>> listDevisByClient(Long clientId) {
    return new ResponseEntity<>(devisRepository.findByClient_Id(clientId), HttpStatus.OK);
    }

    public ResponseEntity<List<Devis>> listDevisByArtisan(Long artisanId) {
        return new ResponseEntity<>(devisRepository.findByArtisan_Id(artisanId), HttpStatus.OK);
    }

    public ResponseEntity<Devis> updateStatusDevis(Long id, DevisStatus status) {
        Devis existingDevis = devisRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Devis not found"));
        existingDevis.setStatus(status);
        return new ResponseEntity<>(devisRepository.save(existingDevis),HttpStatus.OK);
    }


}
