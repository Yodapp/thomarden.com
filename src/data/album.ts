export type Track = {
  number: number;
  title: string;
  slug: string;
  duration?: string;
  audioUrl: string;
  lyric: string;
};

export const album = {
  title: 'After the Silence',
  artist: 'Thom Arden',
  coverImage: '/images/album-placeholder.svg',
  releaseNote: 'Debut album',
  intro:
    'A cinematic collection of songs about loss, gravity, courage, memory and the quiet light that returns after the darkest hours.',
  story:
    'After the Silence follows an emotional arc from stillness into motion — from the ache of what remains unspoken toward the fragile bravery of beginning again.',
  credits: 'Written by Thom Arden. All rights reserved.',
  tracks: [
    {
      number: 1,
      title: 'After the Silence',
      slug: 'after-the-silence',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “After the Silence”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 2,
      title: 'Broken Beautiful',
      slug: 'broken-beautiful',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Broken Beautiful”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 3,
      title: 'Stay',
      slug: 'stay',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Stay”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 4,
      title: 'Home',
      slug: 'home',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Home”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 5,
      title: 'Gravity',
      slug: 'gravity',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Gravity”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 6,
      title: 'When You Call My Name',
      slug: 'when-you-call-my-name',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “When You Call My Name”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 7,
      title: 'Echoes',
      slug: 'echoes',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Echoes”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 8,
      title: 'Brave Enough',
      slug: 'brave-enough',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Brave Enough”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 9,
      title: 'One More Sunrise',
      slug: 'one-more-sunrise',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “One More Sunrise”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    },
    {
      number: 10,
      title: 'Until Tomorrow',
      slug: 'until-tomorrow',
      audioUrl: '',
      lyric:
        'Lyrics placeholder for “Until Tomorrow”. Replace this text in src/data/album.ts when the final lyrics are ready.'
    }
  ] satisfies Track[]
};
