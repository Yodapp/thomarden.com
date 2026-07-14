export type Track = {
  number: number;
  title: string;
  slug: string;
  duration?: string;
  audioUrl: string;
  coverImage: string;
};

export const album = {
  title: 'After the Silence',
  artist: 'Thom Arden',
  coverImage: '/images/after-the-silence-cover.jpg',
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
      audioUrl: 'https://media.thomarden.com/mp3/after-the-silence.mp3',
      coverImage: '/images/tracks/after-the-silence.jpg'
    },
    {
      number: 2,
      title: 'Broken Beautiful',
      slug: 'broken-beautiful',
      audioUrl: 'https://media.thomarden.com/mp3/broken-beautiful.mp3',
      coverImage: '/images/tracks/broken-beautiful.jpg'
    },
    {
      number: 3,
      title: 'Stay',
      slug: 'stay',
      audioUrl: 'https://media.thomarden.com/mp3/stay.mp3',
      coverImage: '/images/tracks/stay.jpg'
    },
    {
      number: 4,
      title: 'Home',
      slug: 'home',
      audioUrl: 'https://media.thomarden.com/mp3/home-is-where-i-stand.mp3',
      coverImage: '/images/tracks/home.jpg'
    },
    {
      number: 5,
      title: 'Gravity',
      slug: 'gravity',
      audioUrl: 'https://media.thomarden.com/mp3/gravity.mp3',
      coverImage: '/images/tracks/gravity.jpg'
    },
    {
      number: 6,
      title: 'When You Call My Name',
      slug: 'when-you-call-my-name',
      audioUrl: 'https://media.thomarden.com/mp3/when-you-call-my-name.mp3',
      coverImage: '/images/tracks/when-you-call-my-name.jpg'
    },
    {
      number: 7,
      title: 'Echoes',
      slug: 'echoes',
      audioUrl: 'https://media.thomarden.com/mp3/echoes.mp3',
      coverImage: '/images/tracks/echoes.jpg'
    },
    {
      number: 8,
      title: 'Brave Enough',
      slug: 'brave-enough',
      audioUrl: 'https://media.thomarden.com/mp3/brave-enough.mp3',
      coverImage: '/images/tracks/brave-enough.jpg'
    },
    {
      number: 9,
      title: 'One More Sunrise',
      slug: 'one-more-sunrise',
      audioUrl: 'https://media.thomarden.com/mp3/one-more-sunrise.mp3',
      coverImage: '/images/tracks/one-more-sunrise.jpg'
    },
    {
      number: 10,
      title: 'Until Tomorrow',
      slug: 'until-tomorrow',
      audioUrl: 'https://media.thomarden.com/mp3/until-tomorrow.mp3',
      coverImage: '/images/tracks/until-tomorrow.jpg'
    }
  ] satisfies Track[]
};
