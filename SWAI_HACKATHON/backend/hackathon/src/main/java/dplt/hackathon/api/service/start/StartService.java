package dplt.hackathon.api.service.start;

import dplt.hackathon.api.controller.start.dto.request.PostHoldRequest;
import dplt.hackathon.api.controller.start.dto.request.PostStartRequest;
import dplt.hackathon.api.controller.start.dto.response.PostHoldResponse;
import dplt.hackathon.api.controller.start.dto.response.PostStartResponse;
import dplt.hackathon.domain.user.User;

public interface StartService {
    PostStartResponse start(User user, PostStartRequest postStartRequest);

    PostHoldResponse hold(User user, PostHoldRequest postHoldRequest);
}
