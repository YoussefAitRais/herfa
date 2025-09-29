package org.event.herfa.Repository;

import org.event.herfa.Entity.Artisan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtisanRepository extends JpaRepository<Artisan, Long> {

    Artisan findById(long id);
}
