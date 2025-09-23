package Entity;

import ch.qos.logback.core.status.Status;
import jakarta.persistence.OneToMany;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class Devis {

    private Long id;
    private BigDecimal amount;
    private LocalDateTime dateDevis;
    private Status status;


    @OneToMany
    private Client client;

    @OneToMany
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
