package Service;


import Entity.Devis;
import Repository.DevisRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DevisService {


    private final DevisRepository devisRepository;

    public DevisService(DevisRepository devisRepository) {
        this.devisRepository = devisRepository;
    }


    public Devis createDevis(Devis devis){
        return devisRepository.save(devis);
    }

    public List<Devis> getAllDevis(){
        return devisRepository.findAll();
    }

    public Devis getDevisById(Long id){
        return devisRepository.findById((long) id).orElseThrow(() ->
                new RuntimeException("Devis not found"));
    }



    public Devis updateDevis(Devis devis){
        Devis existingDevis = devisRepository.findById(devis.getId()).orElseThrow(() ->
                new RuntimeException("Devis not found"));
        existingDevis.setDateDevis(devis.getDateDevis());
        existingDevis.setAmount(devis.getAmount());
        return devisRepository.save(existingDevis);
    }

    public Devis deleteDevisById(Long id){
        Devis existingDevis = devisRepository.findById((long) id).orElseThrow(() ->
                new RuntimeException("Devis not found"));
        devisRepository.deleteById(id);
        return existingDevis;
    }

    public void deleteAllDevis(){
        devisRepository.deleteAll();
    }



    public Devis sendDevis(Devis devis) {
        return devisRepository.save(devis);
    }

    public List<Devis> listDevisByClient(Long clientId) {
        return (List<Devis>) devisRepository.findByClient_Id(clientId);
    }

    public List<Devis> listDevisByArtisan(Long artisanId) {
        return (List<Devis>) devisRepository.findByClient_Id(artisanId);
    }

    public Devis updateStatusDevis(Devis devis) {
        Devis existingDevis = devisRepository.findById(devis.getId()).orElseThrow(() ->
                new RuntimeException("Devis not found"));
        existingDevis.setStatus(devis.getStatus());
        return devisRepository.save(existingDevis);
    }


}
