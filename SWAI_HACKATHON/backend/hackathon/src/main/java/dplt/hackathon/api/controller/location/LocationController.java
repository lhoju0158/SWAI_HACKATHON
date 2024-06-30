package dplt.hackathon.api.controller.location;

import dplt.hackathon.api.controller.location.dto.request.PostLocationRequest;
import dplt.hackathon.api.controller.location.dto.response.PostLocationResponse;
import dplt.hackathon.api.service.location.LocationService;
import dplt.hackathon.common.BaseResponse;
import dplt.hackathon.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static dplt.hackathon.common.httpcode.status.Success.SUCCESS;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/location")
public class LocationController {
    private final LocationService locationService;

    BaseResponse <PostLocationResponse> saveLocation(User user, PostLocationRequest postLocationRequest) {
        return BaseResponse.of(SUCCESS, locationService.saveLocation(user, postLocationRequest));
    }
}
