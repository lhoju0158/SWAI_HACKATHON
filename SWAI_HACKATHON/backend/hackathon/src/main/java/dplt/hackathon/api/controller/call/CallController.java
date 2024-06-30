package dplt.hackathon.api.controller.call;

import dplt.hackathon.api.controller.call.dto.request.PostCallRequest;
import dplt.hackathon.api.controller.call.dto.response.PostCallResponse;
import dplt.hackathon.api.service.call.CallService;
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
@RequestMapping("/api/call")
public class CallController {
    private final CallService callService;

    @PostMapping
    BaseResponse<PostCallResponse> call(User user, PostCallRequest postCallRequest) {
        return BaseResponse.of(SUCCESS, callService.call(user, postCallRequest));
    }
}
