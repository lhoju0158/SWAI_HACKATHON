package dplt.hackathon.domain.location;

import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@Getter
@NoArgsConstructor
@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long LocationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "timerId")
    private Timer timer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private User user;

    @Column(precision = 10, scale = 8, nullable = false)
    private BigDecimal latitude;

    @Column(precision = 11, scale = 8, nullable = false)
    private BigDecimal longitude;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;
}
