package dplt.hackathon.domain.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false)
    private boolean sex; // t: male, f: female

    @Column(name = "birthday", nullable = true)
    private LocalDateTime birthday;

    @Column(name = "address", nullable = true)
    private String address;

    @Column(nullable = false, length = 11)
    private String number;
}

