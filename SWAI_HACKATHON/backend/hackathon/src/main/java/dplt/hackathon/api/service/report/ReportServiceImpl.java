package dplt.hackathon.api.service.report;

import dplt.hackathon.api.controller.report.request.PostReportRequest;
import dplt.hackathon.api.controller.report.response.PostReportResponse;
import dplt.hackathon.api.converter.report.ReportConverter;
import dplt.hackathon.domain.report.ReportJpaRepository;
import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.timer.TimerJpaRepository;
import dplt.hackathon.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ReportServiceImpl implements ReportService{
    private final ReportJpaRepository reportJpaRepository;
    private final TimerJpaRepository timerJpaRepository;

    @Override
    @Transactional
    public PostReportResponse report(User user, PostReportRequest postReportRequest) {
       Optional<Timer> timer = timerJpaRepository.findFirstByOrderByCreatedAtDesc(user.getId());

        if(timer.isPresent()){
            Timer t = timer.get();
            reportJpaRepository.save(ReportConverter.toReport(t, user, postReportRequest.getBody(), postReportRequest.getVictim(), postReportRequest.getImage(), postReportRequest.getLatitude(), postReportRequest.getLongitude()));
        }


        return ReportConverter.toPostReportResponse();
    }
}
