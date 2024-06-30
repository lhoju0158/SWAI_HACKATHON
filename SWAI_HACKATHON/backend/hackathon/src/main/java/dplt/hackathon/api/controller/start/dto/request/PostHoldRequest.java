package dplt.hackathon.api.controller.start.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class PostHoldRequest {
    boolean clikced;
    int clock;
}
