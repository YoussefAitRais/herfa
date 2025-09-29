package org.event.herfa.Repository;

import org.event.herfa.Entity.Devis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DevisRepository extends JpaRepository<Devis, Long> {


    List<Devis> findByClient_Id(Long clientId);
    List<Devis> findByArtisan_Id(Long artisanId);

}
