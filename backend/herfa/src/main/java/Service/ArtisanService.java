package Service;

import Entity.Artisan;
import Repository.ArtisanRepository;
import Repository.DevisRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtisanService {

    private ArtisanRepository artisanRepository;
    private DevisRepository devisRepository;

    public ArtisanService(ArtisanRepository artisanRepository, DevisRepository devisRepository) {
        this.artisanRepository = artisanRepository;
        this.devisRepository = devisRepository;
    }

    public Artisan createArtisan(Artisan artisan) {
        return artisanRepository.save(artisan);
    }

    public Artisan save(Artisan artisan) {
        return artisanRepository.save(artisan);
    }

    public List<Artisan> findAll() {
        return artisanRepository.findAll();
    }

    public Artisan findById(Long id) {
        return artisanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public Artisan updateArtisan(Long id, String name, String email, String password, String job , String location, String description) {
        Artisan existingArtisan = artisanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
        existingArtisan.setName(name);
        existingArtisan.setEmail(email);
        existingArtisan.setPassword(password);
        existingArtisan.setJob(job);
        existingArtisan.setLocation(location);
        existingArtisan.setDescription(description);
        return artisanRepository.save(existingArtisan);
    }

    public void delete(Long id) {
        artisanRepository.deleteById(id);
    }

    public void deletById(Long id) {
        artisanRepository.deleteById(id);
    }



}
