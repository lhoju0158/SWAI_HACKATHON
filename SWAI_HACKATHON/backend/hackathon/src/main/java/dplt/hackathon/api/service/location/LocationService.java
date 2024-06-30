package dplt.hackathon.api.service.location;

import dplt.hackathon.api.controller.location.dto.request.PostLocationRequest;
import dplt.hackathon.api.controller.location.dto.response.PostLocationResponse;
import dplt.hackathon.domain.user.User;

public interface LocationService {
    PostLocationResponse saveLocation(User user, PostLocationRequest postLocationRequest);
}
