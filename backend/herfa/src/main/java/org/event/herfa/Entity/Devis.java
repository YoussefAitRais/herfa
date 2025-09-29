package org.event.herfa.Entity;

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
    private DevisSatus status;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Artisan artisan;


    public Devis(Long id, BigDecimal amount, LocalDateTime dateDevis) {
        this.id = id;
        this.amount = amount;
        this.dateDevis = dateDevis;
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

    public DevisSatus getStatus() {
        return status;
    }

    public void setStatus(DevisSatus status) {
        this.status = status;
    }


}
