package org.event.herfa.dto.requestDTO;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ArtisanRequestDTO(

        @NotNull (message = "names is required")
        String name,

        @NotNull (message = "Invalid email")
        String email,

        @NotNull (message = "password is required")
        @Size (min = 6, message = "Password must be at least 6 characters")
        String password,

        @NotNull (message = "Job is required")
        String job,

        @NotNull (message = "location is required")
        String location,


        String description


) {}
