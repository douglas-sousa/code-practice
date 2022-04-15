import Subscriber from "../interfaces/Subscriber";

export default class AnimeSubscriber implements Subscriber {
    topics = new Set<string>();

    update(data: any): Promise<void> {
        return Promise.resolve(console.log('received', data));
    }
}