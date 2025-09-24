package Repository;

import Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
// @org.springframework.stereotype.Repository // optional

public interface ClientRepository extends JpaRepository<Client, Long> {
    Client FindByPhoneNumber(String phoneNumber);
    Client FindById(Long id);
}
