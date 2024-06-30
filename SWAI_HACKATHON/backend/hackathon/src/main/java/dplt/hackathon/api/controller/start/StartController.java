package dplt.hackathon.api.controller.start;

import dplt.hackathon.api.controller.start.dto.request.PostHoldRequest;
import dplt.hackathon.api.controller.start.dto.request.PostStartRequest;
import dplt.hackathon.api.controller.start.dto.response.PostHoldResponse;
import dplt.hackathon.api.controller.start.dto.response.PostStartResponse;
import dplt.hackathon.api.service.start.StartService;
import dplt.hackathon.common.BaseResponse;
import dplt.hackathon.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static dplt.hackathon.common.httpcode.status.Success.SUCCESS;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/start")
public class StartController {
    private final StartService startService;

    @PostMapping
    BaseResponse<PostStartResponse> start(User user, PostStartRequest postStartRequest) {
        return BaseResponse.of(SUCCESS, startService.start(user, postStartRequest));
    }

    @PostMapping("/clicked")
    BaseResponse<PostHoldResponse> hols(User user, PostHoldRequest postHoldRequest) {
        return BaseResponse.of(SUCCESS, startService.hold(user, postHoldRequest));
    }
}
