package dplt.hackathon.domain.timer;

import dplt.hackathon.common.BaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TimerJpaRepository extends JpaRepository<Timer, Long> {
    Optional<Timer> findByIdAndState(long timerId, BaseEntity.State state);

    List<Optional<Timer>> findByUserId(long userId);

    Optional<Timer> findFirstByOrderByCreatedAtDesc(long userId);
}
