package dplt.hackathon.common;

import jakarta.persistence.EntityListeners;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {

        protected State state = State.ACTIVE;

        public enum State {
            ACTIVE, INACTIVE
        }

        public void setState(State state) {
            this.state = state;
        }
}
