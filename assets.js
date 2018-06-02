const _Assets = {
  mainTitleText: 'Så gör man - Hygien',
  mainBookName: 'brush', //number of frames in this book defines the size of the indicators
  bookOrder: [
    'brush',
    'clean',
    'hair',
    'hands',
    'pad',
    'shave',
    'shower',
    'wc',
  ],
  bookTitles: {    
    brush: 'Jag borstar tänderna',
    clean: 'Jag håller mig ren',
    hair: 'Jag tvättar håret',
    hands: 'Jag tvättar händerna',
    pad: 'Jag byter binda',
    shave: 'Jag rakar mig',
    shower: 'Jag duschar',
    wc: 'Jag går på toaletten',
  },
  titleImages: {
    hair: require('./img/hairicon.png'),
    brush: require('./img/brushicon.png'),
    shower: require('./img/showericon.png'),
    shave: require('./img/shaveicon.png'),
    hands: require('./img/handsicon.png'),
    pad: require('./img/padicon.png'),
    wc: require('./img/wcicon.png'),
    clean: require('./img/cleanicon.png'),
  },
  images: {
    hands: [
      require('./img/handstitle.png'),
      require('./img/hands1.png'),
      require('./img/hands2.png'),
      require('./img/hands3.png'),
      require('./img/hands4.png'),
      require('./img/hands5.png'),
    ],
    shower: [
      require('./img/showertitle.png'),
      require('./img/shower1.png'),
      require('./img/shower2.png'),
      require('./img/shower3.png'),
      require('./img/shower4.png'),
      require('./img/shower5.png'),
    ],
    shave: [
      require('./img/shavetitle.png'),
      require('./img/shave1.png'),
      require('./img/shave2.png'),
      require('./img/shave3.png'),
      require('./img/shave4.png'),
      require('./img/shave5.png'),
    ],
    hair: [
      require('./img/hairtitle.png'),
      require('./img/hair1.png'),
      require('./img/hair2.png'),
      require('./img/hair3.png'),
      require('./img/hair4.png'),
      require('./img/hair5.png'),
    ],
    pad: [
      require('./img/padtitle.png'),
      require('./img/pad1.png'),
      require('./img/pad2.png'),
      require('./img/pad3.png'),
      require('./img/pad4.png'),
      require('./img/pad5.png'),
    ],
    wc: [
      require('./img/wctitle.png'),
      require('./img/wc1.png'),
      require('./img/wc2.png'),
      require('./img/wc3.png'),
      require('./img/wc4.png'),
      require('./img/wc5.png'),
    ],
    clean: [
      require('./img/cleantitle.png'),
      require('./img/clean1.png'),
      require('./img/clean2.png'),
      require('./img/clean3.png'),
      require('./img/clean4.png'),
      require('./img/clean5.png'),
    ],
    brush: [
      require('./img/brushtitle.png'),
      require('./img/brush1.png'),
      require('./img/brush2.png'),
      require('./img/brush3.png'),
      require('./img/brush4.png'),
      require('./img/brush5.png'),
    ],
  },
  soundFiles: {
    hands:   [
      'hands0.mp3', //only used while testing
      'hands1.mp3',
      'hands2.mp3',
      'hands3.mp3',
      'hands4.mp3',
      'hands5.mp3',
    ],
    shower:   [
      'shower0.mp3', //only used while testing
      'shower1.mp3',
      'shower2.mp3',
      'shower3.mp3',
      'shower4.mp3',
      'shower5.mp3',
    ],
    shave: [
      'shave0.mp3', //only used while testing
      'shave1.mp3',
      'shave2.mp3',
      'shave3.mp3',
      'shave4.mp3',
      'shave5.mp3',
    ],
    hair: [
      'hair0.mp3', //only used while testing
      'hair1.mp3',
      'hair2.mp3',
      'hair3.mp3',
      'hair4.mp3',
      'hair5.mp3',
    ],
    pad: [
      'pad0.mp3', //only used while testing
      'pad1.mp3',
      'pad2.mp3',
      'pad3.mp3',
      'pad4.mp3',
      'pad5.mp3',
    ],
    wc: [
      'wc0.mp3', //only used while testing
      'wc1.mp3',
      'wc2.mp3',
      'wc3.mp3',
      'wc4.mp3',
      'wc5.mp3',
    ],
    clean: [
      'clean0.mp3', //only used while testing
      'clean1.mp3',
      'clean2.mp3',
      'clean3.mp3',
      'clean4.mp3',
      'clean5.mp3',
    ],
    brush: [
      'brush0.mp3', //only used while testing
      'brush1.mp3',
      'brush2.mp3',
      'brush3.mp3',
      'brush4.mp3',
      'brush5.mp3',
    ],
  },

  speakerIcon: require('./img/speaker256x256.png'),
  backIcon: require('./img/home240x240transp.png'),
  creditsBackIcon: require('./img/back.png'),
  logo: require('./img/bonasignumlogo.png'),
};

const Assets = _Assets;
module.exports = Assets;
