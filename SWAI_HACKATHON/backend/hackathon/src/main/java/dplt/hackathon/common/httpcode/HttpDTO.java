package dplt.hackathon.common.httpcode;

import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@Builder
public class HttpDTO {

        private HttpStatus httpStatus;

        private final boolean isSuccess;
        private final String code;
        private final String message;
}
