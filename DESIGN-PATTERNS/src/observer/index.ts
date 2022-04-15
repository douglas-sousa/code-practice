import AnimePublisher from "./model/AnimePublisher";
import AnimeSubscriber from "./model/AnimeSubscriber";

function sleep (seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

const ANIMES = [
    { title: 'Naruto', episode: 9000, link: '1' },
    { title: 'Boruto', episode: 1000, link: '2' },
    { title: 'Dragon Ball', episode: 99999, link: '3' },
    { title: 'Re:ZERO', episode: 200, link: '4' },
    { title: 'Fate/stay night', episode: 600, link: '5' },
]

async function main () {
    const animePublisher = new AnimePublisher();

    const ancientFan = new AnimeSubscriber();
    ancientFan.topics.add('Dragon Ball');
    ancientFan.topics.add('Dragon Ball'); // intentional duplicate to see behavior of Set


    const modernFan = new AnimeSubscriber();
    modernFan.topics.add('Naruto');
    modernFan.topics.add('Re:ZERO');
    modernFan.topics.add('Fate/stay night');

    animePublisher.attach(ancientFan);
    animePublisher.attach(modernFan);
    animePublisher.attach(modernFan); // intentional duplicate to see behavior of Set

    for (const anime of ANIMES) {
        await sleep(1);
        animePublisher.notify(anime.title, anime);
    }
}

main().catch(console.error);