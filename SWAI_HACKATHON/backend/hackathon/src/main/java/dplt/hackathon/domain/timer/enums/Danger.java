package dplt.hackathon.domain.timer.enums;

public enum Danger {
    STALKED("스토킹"),
    VIOLENCE("폭력범죄"),
    SEXUAL_HARASSMENT("성범죄");

    private String description;

    Danger(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
