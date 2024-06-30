package dplt.hackathon.domain.phone;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhoneJpaRepository extends JpaRepository<Phone, Long> {
    List<Phone> findByUserId(Long userId);
}
