import Subscriber from "./Subscriber";

export default interface Publisher {
    attach (subscriber: Subscriber): void;
    detach (subscriber: Subscriber): void;
    notify (topic: string, data: any): void;
}