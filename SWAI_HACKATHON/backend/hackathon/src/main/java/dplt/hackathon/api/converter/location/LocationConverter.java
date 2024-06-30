package dplt.hackathon.api.converter.location;

import dplt.hackathon.api.controller.location.dto.request.PostLocationRequest;
import dplt.hackathon.api.controller.location.dto.response.PostLocationResponse;
import dplt.hackathon.domain.location.Location;
import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.user.User;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class LocationConverter {
    public static Location toLocation(Timer timer, User user, BigDecimal latitude, BigDecimal longitude, LocalDateTime createdAt) {
        return Location.builder()
                .timer(timer)
                .user(user)
                .latitude(latitude)
                .longitude(longitude)
                .createdAt(createdAt)
                .build();
    }
    public static PostLocationResponse toPostLocationResponse() {
        return PostLocationResponse.builder()
                .build();
    }
}
