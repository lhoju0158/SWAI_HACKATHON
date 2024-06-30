package dplt.hackathon.api.service.call;

import dplt.hackathon.api.controller.call.dto.request.PostCallRequest;
import dplt.hackathon.api.controller.call.dto.response.PostCallResponse;
import dplt.hackathon.api.converter.call.CallConverter;
import dplt.hackathon.api.converter.start.TimerConverter;
import dplt.hackathon.domain.phone.Phone;
import dplt.hackathon.domain.phone.PhoneJpaRepository;
import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.timer.TimerJpaRepository;
import dplt.hackathon.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CallServiceImpl implements CallService{
    private final TimerJpaRepository timerJpaRepository;
    private final PhoneJpaRepository phoneJpaRepository;

    @Override
    @Transactional
    public PostCallResponse call(User user, PostCallRequest postCallRequest) {
       List<Phone> phoneList = phoneJpaRepository.findByUserId(user.getId());
       Optional<Timer> timer = timerJpaRepository.findFirstByOrderByCreatedAtDesc(user.getId());

       if (timer.isPresent()) {
           Timer t = timer.get();
           Timer t2 = TimerConverter.toTimer(t.getUser(), t.getCreatedAt(), t.getEllapsedTime() + postCallRequest.getClock(), true, t.isReported(), t.getDanger());
           timerJpaRepository.save(t2);

           for (Phone phone : phoneList) {
               notify(phone, t);
           }
       }

        return CallConverter.toPostCallResponse();
    }

    public void notify(Phone phone, Timer timer) {
        log.info("notify police: {}", "112");
        log.info("notify phone: {}", phone.getPhoneNumber());
    }
}
