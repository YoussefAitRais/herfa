package org.event.herfa.repository;

import org.event.herfa.entity.Artisan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtisanRepository extends JpaRepository<Artisan, Long> {

    Artisan findById(long id);
}
