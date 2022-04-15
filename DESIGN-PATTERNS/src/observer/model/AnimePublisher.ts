import Publisher from "../interfaces/Publisher";
import Subscriber from "../interfaces/Subscriber";

export default class AnimePublisher implements Publisher {
    private subscribers = new Set<Subscriber>();

    attach (subscriber: Subscriber): void {
        this.subscribers.add(subscriber);
    }

    detach (subscriber: Subscriber): void {
        this.subscribers.delete(subscriber);
    }

    notify (topic: string, data: any): void {
        for (const subscriber of this.subscribers) {
            if (subscriber.topics.has(topic)) {
                subscriber.update(data);
            }
        }
    }
}