package dplt.hackathon.common.httpcode.status;

import dplt.hackathon.common.httpcode.BaseCode;
import dplt.hackathon.common.httpcode.HttpDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum Success implements BaseCode {
    SUCCESS(HttpStatus.OK,"200", "Success"),
    CREATED(HttpStatus.OK, "201", "Created"),
    ACCEPTED(HttpStatus.OK, "202", "Accepted"),
    NO_CONTENT(HttpStatus.OK, "204", "No Content"),
    RESET_CONTENT(HttpStatus.OK, "205", "Reset Content"),
    PARTIAL_CONTENT(HttpStatus.OK, "206", "Partial Content"),
    MULTI_STATUS(HttpStatus.OK, "207", "Multi-Status"),
    ALREADY_REPORTED(HttpStatus.OK, "208", "Already Reported"),
    IM_USED(HttpStatus.OK, "226", "IM Used");

    private final HttpStatus httpStatus;
    private final String code;
    private final String message;

    @Override
    public HttpDTO getHttpRes() {
        return HttpDTO.builder()
                .message(message)
                .code(code)
                .isSuccess(true)
                .build();
    }

    @Override
    public HttpDTO getHttpStatus() {
        return HttpDTO.builder()
                .message(message)
                .code(code)
                .isSuccess(true)
                .build();
    }
}
