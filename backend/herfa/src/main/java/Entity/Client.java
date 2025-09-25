package Entity;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

public class Client extends User{




    private String phoneNumber;

    @ManyToOne
    private Devis devis;

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
