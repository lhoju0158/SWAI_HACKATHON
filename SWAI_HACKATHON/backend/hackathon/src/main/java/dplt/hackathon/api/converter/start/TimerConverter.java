package dplt.hackathon.api.converter.start;

import dplt.hackathon.api.controller.start.dto.request.PostStartRequest;
import dplt.hackathon.api.controller.start.dto.response.PostHoldResponse;
import dplt.hackathon.api.controller.start.dto.response.PostStartResponse;
import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.timer.enums.Danger;
import dplt.hackathon.domain.user.User;
import lombok.Builder;

import java.time.LocalDateTime;

public class TimerConverter {
    public static Timer toTimer(User user, LocalDateTime createdAt, int ellapsedTime, boolean madeCall, boolean reported, Danger danger) {
        return Timer.builder()
                .user(user)
                .createdAt(createdAt)
                .ellapsedTime(ellapsedTime)
                .madeCall(madeCall)
                .reported(reported)
                .danger(danger)
                .build();
    }

    public static PostStartResponse toPostStartResponse(Timer timer) {
        return PostStartResponse.builder()
                .build();
    }

    public static PostHoldResponse toPostHoldResponse() {
        return PostHoldResponse.builder()
                .build();
    }
}
