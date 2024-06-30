package dplt.hackathon.api.service.start;

import dplt.hackathon.api.controller.start.dto.request.PostHoldRequest;
import dplt.hackathon.api.controller.start.dto.request.PostStartRequest;
import dplt.hackathon.api.controller.start.dto.response.PostHoldResponse;
import dplt.hackathon.api.controller.start.dto.response.PostStartResponse;
import dplt.hackathon.api.converter.call.CallConverter;
import dplt.hackathon.api.converter.start.TimerConverter;
import dplt.hackathon.domain.phone.Phone;
import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.timer.TimerJpaRepository;
import dplt.hackathon.domain.timer.enums.Danger;
import dplt.hackathon.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class StartServiceImpl implements StartService{
    private final TimerJpaRepository timerJpaRepository;

    @Override
    @Transactional
    public PostStartResponse start(User user, PostStartRequest postStartRequest) {
        LocalDateTime createdAt = postStartRequest.getTime();
        int ellapsedTime = postStartRequest.getClock();
        Danger danger = postStartRequest.getDanger();

        Timer timer = TimerConverter.toTimer(user, createdAt, ellapsedTime, false, false, danger);
        timerJpaRepository.save(timer);

        return TimerConverter.toPostStartResponse(timer);
    }

    @Override
    @Transactional
    public PostHoldResponse hold(User user, PostHoldRequest postHoldRequest) {
        Optional<Timer> timer = timerJpaRepository.findFirstByOrderByCreatedAtDesc(user.getId());

        if (timer.isPresent()) {
            Timer t = timer.get();
            Timer t2 = TimerConverter.toTimer(t.getUser(), t.getCreatedAt(), t.getEllapsedTime() + postHoldRequest.getClock(), false, t.isReported(), t.getDanger());
            timerJpaRepository.save(t2);
        }

        return TimerConverter.toPostHoldResponse();
    }
}
