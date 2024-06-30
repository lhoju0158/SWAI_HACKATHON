package dplt.hackathon.api.service.report;

import dplt.hackathon.api.controller.report.request.PostReportRequest;
import dplt.hackathon.api.controller.report.response.PostReportResponse;
import dplt.hackathon.domain.user.User;

public interface ReportService {
    PostReportResponse report(User user, PostReportRequest postReportRequest);
}
