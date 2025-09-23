package Entity;

import jakarta.persistence.OneToMany;

public class Artisan extends User {


    private String job;
    private String location;
    private String description;


    @OneToMany
    private Devis devis;

    public Artisan(String job, String location, String description, String password, String email, String name, Long id) {
        super(password, email, name, id);
        this.job = job;
        this.location = location;
        this.description = description;
    }

    public Artisan() {
        super();


    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
