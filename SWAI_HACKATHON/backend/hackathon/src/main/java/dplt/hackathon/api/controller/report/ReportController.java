package dplt.hackathon.api.controller.report;

import com.fasterxml.jackson.databind.ser.Serializers;
import dplt.hackathon.api.controller.report.request.PostReportRequest;
import dplt.hackathon.api.controller.report.response.PostReportResponse;
import dplt.hackathon.api.service.report.ReportService;
import dplt.hackathon.common.BaseResponse;
import dplt.hackathon.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static dplt.hackathon.common.httpcode.status.Success.SUCCESS;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/report")
public class ReportController {
    private final ReportService reportService;

    @PostMapping
    BaseResponse<PostReportResponse> report(User user, PostReportRequest postReportRequest) {
        return BaseResponse.of(SUCCESS, reportService.report(user, postReportRequest));
    }
}
