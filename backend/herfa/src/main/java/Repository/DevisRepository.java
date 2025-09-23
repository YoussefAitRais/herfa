package Repository;

import Entity.Devis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DevisRepository extends JpaRepository<Devis, Long> {


    List<Devis> findByClient_Id(Long clientId);
    List<Devis> findByArtisan_Id(Long artisanId);

}
