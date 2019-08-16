
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


// 打擊特效
lf2.UI.hit = {
  Setting: {
    name: 'hit',
    file: { 'main': { src: 'UI/hit.png', w: 192, h: 192 }, },
    scale: 0.1,
  },
  frame: {
    'standing': { next: 'flash2', pic: ['main', 0, 0], center: [96, 190], wait: 0, },
    'flash2': { next: 'flash3', pic: ['main', 1, 0], center: [96, 190], wait: 0, },
    'flash3': { next: 'flash4', pic: ['main', 2, 0], center: [96, 190], wait: 0, },
    'flash4': { next: 'flash5', pic: ['main', 3, 0], center: [96, 190], wait: 0, },
    'flash5': { next: 'flash6', pic: ['main', 4, 0], center: [96, 190], wait: 0, },
    'flash6': { next: 'flash7', pic: ['main', 0, 1], center: [96, 190], wait: 0, },
    'flash7': { next: 1000, pic: ['main', 1, 1], center: [96, 190], wait: 0, },
  }
};

