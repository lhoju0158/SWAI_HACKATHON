package dplt.hackathon.api.service.location;

import dplt.hackathon.api.controller.location.dto.request.PostLocationRequest;
import dplt.hackathon.api.controller.location.dto.response.PostLocationResponse;
import dplt.hackathon.api.converter.location.LocationConverter;
import dplt.hackathon.domain.location.LocationJpaRepository;
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
public class LocationServiceImpl implements LocationService{
    private final TimerJpaRepository timerJpaRepository;
    private final LocationJpaRepository locationJpaRepository;

    @Override
    @Transactional
    public PostLocationResponse saveLocation(User user, PostLocationRequest postLocationRequest) {
        Optional<Timer> timer = timerJpaRepository.findFirstByOrderByCreatedAtDesc(user.getId());

        if(timer.isPresent()){
            Timer t = timer.get();
            locationJpaRepository.save(LocationConverter.toLocation(t, t.getUser(), postLocationRequest.getLatitude(), postLocationRequest.getLongitude(), postLocationRequest.getTime()));
        }

        return LocationConverter.toPostLocationResponse();
    }
}
