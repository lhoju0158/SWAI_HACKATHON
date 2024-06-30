package dplt.hackathon.domain.timer;

import dplt.hackathon.domain.timer.enums.Danger;
import dplt.hackathon.domain.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
@Entity
@Table(name = "timer")
public class Timer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long timerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private User user;

    @Column(name="created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name="ellapsed_time", nullable = false)
    private int ellapsedTime;

    @Column(name="made_call")
    private boolean madeCall;

    @Column(name="reported")
    private boolean reported;

    @Column(name="danger", nullable = true)
    @Enumerated(EnumType.STRING)
    private Danger danger;
}
