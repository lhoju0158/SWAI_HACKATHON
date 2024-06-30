package dplt.hackathon.api.controller.location.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@Getter
public class PostLocationRequest {
    BigDecimal latitude;
    BigDecimal longitude;
    LocalDateTime time;
}
