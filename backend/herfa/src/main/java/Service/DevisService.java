package Service;


import Entity.Devis;
import Entity.DevisSatus;
import Repository.DevisRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DevisService implements DevisInterface {


    private final DevisRepository devisRepository;

    public DevisService(DevisRepository devisRepository) {
        this.devisRepository = devisRepository;
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

    public ResponseEntity<Devis> sendDevis(Devis devis) {
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

    public ResponseEntity<Devis> updateStatusDevis(Long id, DevisSatus status) {
        Devis existingDevis = devisRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Devis not found"));
        existingDevis.setStatus(status);
        return new ResponseEntity<>(devisRepository.save(existingDevis),HttpStatus.OK);
    }


}
