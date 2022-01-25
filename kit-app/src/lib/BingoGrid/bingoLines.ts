const bingoLines = [
    'Kannst du dich bitte stummschalten?',
    'Echo-Hölle',
    'Hundegebel',
    'Handy runtergefallen',
    'Videoübertragung kaputt',
    'Redest du obwohl du stumm geschaltet bist?',
    'Ich schreib dir einfach ne Mail',
    'Kindergeschrei',
    'Staubsaugergeräusche',
    'Schatz, ich bin gerade in einem Meeting!',
    'Kaugeräusche',
    'Badezimmergeräusche',
    'Headset aufsetzen rascheln',
    'Exzessive Tippgeräusche',
    'Redet jemand? Ich kann nichts hören!',
    'Roboterstimme',
    'Könnt ihr alle meinen Screen sehen?',
    'Etwas Nicht-Arbeitstaugliches wird Screen-geshared',
    'Ständiges gegenseitiges Unterbrechen',
    'Sorry, dass ich zu spät bin, ich hab die Zeit vergessen',
    'Ich gebe euch allen eure Zeit zurück',
    'Laufgeräusche während jemand spricht',
    'Small talk nimmt mehr als die Hälfte der Meetingzeit ein',
    'Windgeräusche, weil jemand auf seiner Terasse sitzt',
    'Wer fehlt noch?',
    'Hilfe, was mache ich falsch?',
    'Könnt ihr mich jetzt sehen?',
    'Hast du vielleicht ein Headset?',
    'Wollen wir anfangen?',
    'Bitte nicht alle gleichzeitig reden!',
    'Kannst du bitte lauter sprechen?',
    'Ich hole mir nur kurz was zu trinken.',
    'Bitte wiederholen. Das kam jetzt leider nicht an.',
    'Wo kommt eigentlich die Musik her?',
    'Ich danke euch für die rege Teilnahme.',
    'So, bin wieder da!',
    'Moment, Postbote!',
    'Mein Internet ruckelt auf einmal.',
    'Wollen wir lieber telefonieren?',
    'Kannst du das an alle nochmal per E-Mail schicken?',
    '*Telefonklingeln* Sorry, da muss ich ran',
    'Du bist eingefroren',
    'Hast du es schonmal mit Rebooten versucht?',
    'Sorry... Du zuerst',
    'Ich sehe nichts - es lädt noch',
    'Ich muss jetzt leider in den nächsten Call',
    'Ist jeder in Miro?',
    'Sieht jeder unser Board?'
];

export enum Size {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export function getNewBingoLines(size: Size): Array<String> {
    switch (size) {
        case Size.SMALL: return shuffleArray(bingoLines).slice(0, 9);
        case Size.MEDIUM: return shuffleArray(bingoLines).slice(0, 16);
        case Size.LARGE: return shuffleArray(bingoLines).slice(0, 25);
    }
    return [];
}

function shuffleArray(array): Array<String> {
    const tempArray = array.slice(0);
    for (let i = tempArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = tempArray[i];
        tempArray[i] = tempArray[j];
        tempArray[j] = temp;
    }
    return tempArray;
}