package ro.utcn.spet.a1.event;

import lombok.Data;

@Data
public class BaseEvent {
    private final EventType type;
}
