package DTO.responseDTO;

import Entity.DevisSatus;

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
