package org.event.herfa.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table (name = "Devis")
public class Devis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;
    private LocalDateTime dateDevis;


    @Enumerated(EnumType.STRING)
    private DevisStatus status;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Artisan artisan;


    public Devis(BigDecimal amount, LocalDateTime dateDevis, DevisStatus status, Client client, Artisan artisan) {
        this.amount = amount;
        this.dateDevis = dateDevis;
        this.status = status;
        this.client = client;
        this.artisan = artisan;
    }



    public Devis() {
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public LocalDateTime getDateDevis() {
        return dateDevis;
    }

    public void setDateDevis(LocalDateTime dateDevis) {
        this.dateDevis = dateDevis;
    }

    public DevisStatus getStatus() {
        return status = status;
    }

    public void setStatus(DevisStatus status) {
        this.status = status;
    }

    public Client getClient() { return client; }
    public void setClient(Client client) { this.client = client; }

    public Artisan getArtisan() { return artisan; }
    public void setArtisan(Artisan artisan) { this.artisan = artisan; }

}
