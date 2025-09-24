package DTO.requestDTO;

import Entity.DevisSatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record DevisRequestDTO(

    @NotNull(message = "dateDevis cannot be null")
    @Size(min = 1, message = "dateDevis must be at least 1 character long")
    LocalDate dateDevis,

    @NotNull(message = "amount cannot be null")
    @Min(value = 1, message = "amount must be greater than 0")
    Double amount,

    @NotNull(message = "amount cannot be null")
    DevisSatus devisSatus
//        Long clientId,
//        Long artisanId

) {
}
