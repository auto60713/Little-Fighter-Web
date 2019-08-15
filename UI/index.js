
// 開始按鈕
lf2.UI.startgame = {
  Setting: {
    name: 'startgame',
    file: { 'main': { src: 'UI/start.png', w: 227, h: 74 }, },
    scale: 1,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [0, 0], wait: 1, },
  }
};


// LOGO
lf2.UI.logo = {
  Setting: {
    name: 'logo',
    file: { 'main': { src: 'UI/logo.png', w: 356, h: 84 }, },
    scale: 2,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [0, 0], wait: 1, },
  }
};


// 選角手
lf2.UI.point = {
  Setting: {
    name: 'point',
    file: { 'main': { src: 'UI/point.png', w: 288, h: 360 }, },
    scale: 0.1,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [0, 0], wait: 1, },
  }
};


