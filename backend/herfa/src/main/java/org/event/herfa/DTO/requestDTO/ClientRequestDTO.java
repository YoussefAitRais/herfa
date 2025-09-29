package org.event.herfa.DTO.requestDTO;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ClientRequestDTO(



        @NotNull (message = "names is required")
      String name,

        @NotNull (message = "invalid email")
      String email,

        @NotNull (message = "password is required")
        @Size(min = 6, message = "Password must be at least 6 characters")
      String password,

      @NotNull (message = "phone number is required")
      String phoneNumber



) { }
