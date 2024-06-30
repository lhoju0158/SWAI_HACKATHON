package dplt.hackathon.api.converter.report;

import dplt.hackathon.api.controller.report.response.PostReportResponse;
import dplt.hackathon.domain.report.Report;
import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.user.User;

import java.math.BigDecimal;

public class ReportConverter {
    public static Report toReport(Timer timer, User user, String body, String victim, String image, BigDecimal latitude, BigDecimal longitude) {
        return Report.builder()
                .timer(timer)
                .user(user)
                .body(body)
                .victim(victim)
                .evidence(image)
                .latitude(latitude)
                .longitude(longitude)
                .build();
    }
    public static PostReportResponse toPostReportResponse() {
        return PostReportResponse.builder()
                .build();
    }
}
