/**
 * Cards data structure for CardsOverTime
 * Each card represents a yearly Christmas card
 *
 * zoomTarget format:
 * - x, y: Center position as percentage (0-100) of image dimensions where zoom focuses
 * - maxZoom: Maximum zoom level (1 = no zoom, 2 = 2x zoom, 3 = 3x zoom, etc.)
 * - rotation: Rotation in degrees (0 = no rotation, positive = clockwise)
 */

export const cards = [
  // 2024 - Current year (they have the physical card, this is just the start)
  {
    year: 2024,
    imagePath: 'cards/2024.png',
    isCurrentYear: true,
    title: {
      en: 'Christmas, 2024',
      no: 'Julen 2024'
    },
    zoomTarget: {
      x: 72.7,
      y: 46.5,
      maxZoom: 8,  // Small box (18.6% x 14.5%) = tight zoom
      rotation: 90
    }
  },

  // Previous years
  {
    year: 2023,
    imagePath: 'cards/2023.png',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2023',
      no: 'Julen 2023'
    },
    zoomTarget: {
      x: 42.8,
      y: 32.9,
      maxZoom: 4,  // Medium box (18.6% x 36.0%) = moderate zoom
      rotation: 0
    }
  },
  {
    year: 2022,
    imagePath: 'cards/2022.png',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2022',
      no: 'Julen 2022'
    },
    zoomTarget: {
      x: 14.1,
      y: 84.9,
      maxZoom: 5,  // Small box (16.1% x 18.7%) = tight zoom
      rotation: 0
    }
  },
  {
    year: 2021,
    imagePath: 'cards/2021.png',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2021',
      no: 'Julen 2021'
    },
    zoomTarget: {
      x: 26.5,
      y: 81.2,
      maxZoom: 5,  // Wide box (57.2% x 19.5%) = gentle zoom
      rotation: 195
    }
  },
  {
    year: 2020,
    imagePath: 'cards/2020.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2020',
      no: 'Julen 2020'
    },
    zoomTarget: {
      x: 40.7,
      y: 86.2,
      maxZoom: 1.3,  // Very wide box (67.6% x 26.0%) = minimal zoom
      rotation: 0
    }
  },
  {
    year: 2019,
    imagePath: 'cards/2019.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2019',
      no: 'Julen 2019'
    },
    zoomTarget: {
      x: 12.4,
      y: 55.8,
      maxZoom: 1,  // Very tall box (11.0% x 79.5%) = minimal zoom
      rotation: 180
    }
  },
  {
    year: 2018,
    imagePath: 'cards/2018.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2018',
      no: 'Julen 2018'
    },
    zoomTarget: {
      x: 17.2,
      y: 34.6,
      maxZoom: 4.5,  // Small box (17.2% x 21.8%) = tight zoom
      rotation: 0
    }
  },
  {
    year: 2017,
    imagePath: 'cards/2017.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2017',
      no: 'Julen 2017'
    },
    zoomTarget: {
      x: 26.5,
      y: 87.4,
      maxZoom: 4,  // Small box (15.5% x 23.7%) = tight zoom
      rotation: 0
    }
  },
  {
    year: 2016,
    imagePath: 'cards/2016.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2016',
      no: 'Julen 2016'
    },
    zoomTarget: {
      x: 17.6,
      y: 56.8,
      maxZoom: 4,  // Medium box (23.4% x 46.2%) = moderate zoom
      rotation: 180
    }
  },
  {
    year: 2015,
    imagePath: 'cards/2015.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2015',
      no: 'Julen 2015'
    },
    zoomTarget: {
      x: 71.7,
      y: 46.8,
      maxZoom: 1.4,  // Very large box (48.5% x 69.7%) = minimal zoom
      rotation: 0
    }
  },
  {
    year: 2014,
    imagePath: 'cards/2014.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2014',
      no: 'Julen 2014'
    },
    zoomTarget: {
      x: 87.5,
      y: 59.1,
      maxZoom: 1.8,  // Tall box (22.0% x 54.5%) = gentle zoom
      rotation: 0
    }
  },
  {
    year: 2013,
    imagePath: 'cards/2013.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2013',
      no: 'Julen 2013'
    },
    zoomTarget: {
      x: 1.4,
      y: 45.1,
      maxZoom: 2,  // Very tall box (17.5% x 68.0%) = minimal zoom
      rotation: 0
    }
  },
  {
    year: 2012,
    imagePath: 'cards/2012.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2012',
      no: 'Julen 2012'
    },
    zoomTarget: {
      x: 93.5,
      y: 40.9,
      maxZoom: 4,  // Small box (11.0% x 22.4%) = tight zoom
      rotation: 0
    }
  },
  {
    year: 2011,
    imagePath: 'cards/2011.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2011',
      no: 'Julen 2011'
    },
    zoomTarget: {
      x: 67.5,
      y: 50.4,
      maxZoom: 1.4,  // Very large box (50.1% x 69.3%) = minimal zoom
      rotation: 0
    }
  },
  {
    year: 2010,
    imagePath: 'cards/2010.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2010',
      no: 'Julen 2010'
    },
    zoomTarget: {
      x: 47.0,
      y: 47.4,
      maxZoom: 4.5,  // Small box (11.0% x 21.6%) = tight zoom
      rotation: 0
    }
  },
  {
    year: 2009,
    imagePath: 'cards/2009.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2009',
      no: 'Julen 2009'
    },
    zoomTarget: {
      x: 39.0,
      y: 46.0,
      maxZoom: 3.5,  // Small box (14.6% x 27.5%) = tight zoom
      rotation: 0
    }
  },
  {
    year: 2008,
    imagePath: 'cards/2008.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2008',
      no: 'Julen 2008'
    },
    zoomTarget: {
      x: 56.5,
      y: 50.8,
      maxZoom: 1.5,  // Very large box (53.0% x 64.6%) = minimal zoom
      rotation: 0
    }
  }
];
