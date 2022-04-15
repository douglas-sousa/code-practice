export default interface Subscriber {
    topics: Set<string>;
    update (data: any): Promise<void>;
}