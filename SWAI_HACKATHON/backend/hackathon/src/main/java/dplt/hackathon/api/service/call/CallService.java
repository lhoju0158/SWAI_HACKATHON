package dplt.hackathon.api.service.call;

import dplt.hackathon.api.controller.call.dto.request.PostCallRequest;
import dplt.hackathon.api.controller.call.dto.response.PostCallResponse;
import dplt.hackathon.domain.user.User;

public interface CallService {
    PostCallResponse call(User user, PostCallRequest postCallRequest);
}
