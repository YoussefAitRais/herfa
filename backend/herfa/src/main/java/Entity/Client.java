package Entity;

import jakarta.persistence.ManyToOne;

public class Client extends User{


    @ManyToOne
    private Devis devis;


    private String phoneNumber;

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
