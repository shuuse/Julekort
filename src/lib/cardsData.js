/**
 * Cards data structure for CardsOverTime
 * Each card represents a yearly Christmas card
 *
 * hintRegion format:
 * - x, y: Center position as percentage (0-100) of image dimensions
 * - zoom: Zoom level (100 = no zoom, 200 = 2x zoom, 50 = zoomed out)
 * - rotation: Rotation in degrees (0 = no rotation)
 */

export const cards = [
  // 2024 - Current year (they have the physical card, this is just the start)
  {
    year: 2024,
    imagePath: '/cards/2024.png',
    isCurrentYear: true,
    title: {
      en: 'Christmas, 2024',
      no: 'Julen 2024'
    },
    hint: {
      en: '',
      no: ''
    },
    hintRegion: {
      x: 20,
      y: 20,
      zoom: 150,
      rotation: 90
    }
  },

  // Previous years
  {
    year: 2023,
    imagePath: '/cards/2023.png',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2023',
      no: 'Julen 2023'
    },
    hint: {
      en: 'Look closely at the details in this photo.',
      no: 'Se nøye på detaljene i dette bildet.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2022,
    imagePath: '/cards/2022.png',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2022',
      no: 'Julen 2022'
    },
    hint: {
      en: 'Something small is hiding in plain sight.',
      no: 'Noe lite gjemmer seg like foran deg.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2021,
    imagePath: '/cards/2021.png',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2021',
      no: 'Julen 2021'
    },
    hint: {
      en: 'Check the background carefully.',
      no: 'Sjekk bakgrunnen nøye.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2020,
    imagePath: '/cards/2020.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2020',
      no: 'Julen 2020'
    },
    hint: {
      en: 'Look for something unexpected.',
      no: 'Se etter noe uventet.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2019,
    imagePath: '/cards/2019.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2019',
      no: 'Julen 2019'
    },
    hint: {
      en: 'The secret is in the surroundings.',
      no: 'Hemmeligheten er i omgivelsene.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2018,
    imagePath: '/cards/2018.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2018',
      no: 'Julen 2018'
    },
    hint: {
      en: 'Pay attention to the small details.',
      no: 'Legg merke til de små detaljene.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2017,
    imagePath: '/cards/2017.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2017',
      no: 'Julen 2017'
    },
    hint: {
      en: 'Something is hiding in this scene.',
      no: 'Noe gjemmer seg i denne scenen.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2016,
    imagePath: '/cards/2016.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2016',
      no: 'Julen 2016'
    },
    hint: {
      en: 'Look at the edges of the photo.',
      no: 'Se på kantene av bildet.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2015,
    imagePath: '/cards/2015.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2015',
      no: 'Julen 2015'
    },
    hint: {
      en: 'The Easter egg is cleverly hidden.',
      no: 'Påskeegget er smart gjemt.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2014,
    imagePath: '/cards/2014.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2014',
      no: 'Julen 2014'
    },
    hint: {
      en: 'Search the entire frame carefully.',
      no: 'Søk i hele bildet nøye.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2013,
    imagePath: '/cards/2013.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2013',
      no: 'Julen 2013'
    },
    hint: {
      en: 'There is something special in this photo.',
      no: 'Det er noe spesielt i dette bildet.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2012,
    imagePath: '/cards/2012.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2012',
      no: 'Julen 2012'
    },
    hint: {
      en: 'Look for the unexpected detail.',
      no: 'Se etter den uventede detaljen.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2011,
    imagePath: '/cards/2011.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2011',
      no: 'Julen 2011'
    },
    hint: {
      en: 'The secret is waiting to be found.',
      no: 'Hemmeligheten venter på å bli funnet.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2010,
    imagePath: '/cards/2010.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2010',
      no: 'Julen 2010'
    },
    hint: {
      en: 'Check every corner of the image.',
      no: 'Sjekk hvert hjørne av bildet.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2009,
    imagePath: '/cards/2009.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2009',
      no: 'Julen 2009'
    },
    hint: {
      en: 'Something small is hidden here.',
      no: 'Noe lite er gjemt her.'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  },
  {
    year: 2008,
    imagePath: '/cards/2008.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2008',
      no: 'Julen 2008'
    },
    hint: {
      en: 'Where the tradition began...',
      no: 'Der tradisjonen begynte...'
    },
    hintRegion: { x: 50, y: 50, zoom: 150, rotation: 0 }
  }
];
