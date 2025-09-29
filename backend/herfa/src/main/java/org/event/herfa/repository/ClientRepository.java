package org.event.herfa.repository;

import org.event.herfa.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
// @org.springframework.stereotype.Repository // optional

public interface ClientRepository extends JpaRepository<Client, Long> {
    Client findByPhoneNumber(String phoneNumber);
    Optional<Client> findById(Long id);
}
