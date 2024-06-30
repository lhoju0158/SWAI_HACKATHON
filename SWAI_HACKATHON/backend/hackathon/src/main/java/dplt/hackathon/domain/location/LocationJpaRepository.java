package dplt.hackathon.domain.location;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationJpaRepository extends JpaRepository<Location, Long> {
    
}
