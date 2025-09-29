package org.event.herfa.dto.responseDTO;

import org.event.herfa.entity.DevisSatus;

import java.time.LocalDate;

public record DevisResponseDTO(

        Long id,

        LocalDate dateDevis,

        Double amount,

        DevisSatus devisSatus,

        Long clientId,
        String clientName,

        Long artisanId,
        String artisanName
) { }
