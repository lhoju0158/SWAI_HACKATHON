package dplt.hackathon.api.converter.call;

import dplt.hackathon.api.controller.call.dto.response.PostCallResponse;

public class CallConverter {
    public static PostCallResponse toPostCallResponse() {
        return PostCallResponse.builder()
                .build();
    }
}
