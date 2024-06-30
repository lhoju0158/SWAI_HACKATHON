package dplt.hackathon.domain.report;

import dplt.hackathon.domain.timer.Timer;
import dplt.hackathon.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Builder
@AllArgsConstructor
@Getter
@NoArgsConstructor
@Entity
@Table(name = "report")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "timerId")
    private Timer timer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private User user;

    @Column(name = "body", nullable = true, length = 255)
    private String body;

    @Column(name = "victim", nullable = false, length = 20)
    private String victim;

    @Column(name = "evidence", nullable = true)
    private String evidence;

    @Column(name = "latitude", precision = 11, scale = 8, nullable = true)
    private BigDecimal latitude;

    @Column(name = "longitude", precision = 10, scale = 8, nullable = true)
    private BigDecimal longitude;
}
