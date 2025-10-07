package org.event.herfa.dto.requestDTO;

import org.event.herfa.entity.DevisStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record DevisRequestDTO(

    @NotNull(message = "dateDevis cannot be null")
    LocalDateTime dateDevis,

    @NotNull(message = "amount cannot be null")
    @Min(value = 1, message = "amount must be greater than 0")
    BigDecimal amount,

    @NotNull(message = "amount cannot be null")
    DevisStatus devisStatus,
    Long clientId,
    Long artisanId

) {
}
