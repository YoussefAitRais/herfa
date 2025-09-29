package org.event.herfa.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;


@Entity
@Table (name = "Clients")
public class Client extends User{

    private String phoneNumber;

    @OneToMany(mappedBy = "client")
    private List<Devis> devisList;


    public Client(String phoneNumber, String password, String email, String name, Long id) {
        super(password, email, name, id);
        this.phoneNumber = phoneNumber;
    }
    public Client() {
        super();
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


}
