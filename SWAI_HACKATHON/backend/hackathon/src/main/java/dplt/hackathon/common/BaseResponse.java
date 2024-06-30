package dplt.hackathon.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import dplt.hackathon.common.httpcode.BaseCode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
@JsonPropertyOrder({"isSuccess", "code", "message", "result"})
public class BaseResponse<T> {
    @JsonProperty("isSuccess")
    private final boolean isSuccess;
    private final String code;
    private final String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private T result;

    public static <T> BaseResponse<T> onSuccess(T result) {
        return new BaseResponse<>(true, "200", "OK", result);
    }

    public static <T> BaseResponse<T> of(BaseCode code, T result) {
        return new BaseResponse<>(true, code.getHttpStatus().getCode(), code.getHttpRes().getMessage(), result);
    }

    public static <T> BaseResponse<T> onFailure(String code, String message, T data) {
        return new BaseResponse<>(false, code, message, data);
    }
}
