package dplt.hackathon.api.controller.report.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@Builder
@AllArgsConstructor
public class PostReportRequest {
    private String body;
    private String victim;
    private String image;
    private BigDecimal latitude;
    private BigDecimal longitude;
}
