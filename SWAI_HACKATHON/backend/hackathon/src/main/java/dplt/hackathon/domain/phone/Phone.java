package dplt.hackathon.domain.phone;

import dplt.hackathon.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "phone")
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long phoneId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id", nullable = false)
    private User user;

    @Column(name = "call_to", nullable = false, length = 30)
    private String callTo;

    @Column(name = "phone_number", nullable = false, length = 11)
    private String phoneNumber;
}
