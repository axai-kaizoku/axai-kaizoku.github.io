const MESSAGES = [
  "🐊 See you later, alligator.",
  "🐟 In a while, crocodile.",
  "🦢 Gotta fly, butterfly.",
  "🦁 Stay loose, mongoose.",
  "🐘 Take care, polar bear.",
  "🐢 Don't be slow, buffalo.",
  "🦊 Toodle-oo, kangaroo.",
  "🦀 Be sweet, parakeet.",
  "🐸 Hop on, bison.",
  "🦋 Adios, amigos.",
  "🐺 Don't howl, night owl.",
  "🐙 Later, skater.",
  "🦔 Stay prickly, my friend.",
  "🐻 Hibernate well, bear.",
  "🦩 Flamingle later.",
  "🐧 Waddle off then, penguin.",
  "🦜 Copy that, parrot.",
  "🐬 Dive deep, creep.",
  "🦒 Stretch it out, trout.",
  "🐝 Buzz off, buttercup.",
  "🦥 No rush, sloth.",
  "🐠 Catch you on the reef.",
  "🦋 Flutter by, butterfly.",
  "🐻‍❄️ Ice to know ya.",
  "🦕 Have a dino-mite day.",
  "🐨 Take it easy, koala.",
  "🦑 Ink you later.",
  "🐺 Howl you doing? Bye.",
  "🦃 Gobble gobble, goodbye.",
  "🐡 Puff off, pufferfish.",
] as const;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createFarewellPicker() {
  let deck: string[] = [];

  return function getNextFarewell(): string {
    if (deck.length === 0) deck = shuffle([...MESSAGES]);
    return deck.pop()!;
  };
}

export const getNextFarewell = createFarewellPicker();
