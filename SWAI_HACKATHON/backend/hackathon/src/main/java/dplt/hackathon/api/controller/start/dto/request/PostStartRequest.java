package dplt.hackathon.api.controller.start.dto.request;

import dplt.hackathon.domain.location.Location;
import dplt.hackathon.domain.timer.enums.Danger;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class PostStartRequest {
    LocalDateTime time;
    int clock;
    Location location;
    Danger danger;
}
