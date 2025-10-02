package org.event.herfa.dto.responseDTO;

import org.event.herfa.entity.DevisStatus;

import java.time.LocalDate;

public record DevisResponseDTO(

        Long id,

        LocalDate dateDevis,

        Double amount,

        DevisStatus devisStatus,

        Long clientId,
        String clientName,

        Long artisanId,
        String artisanName
) { }
