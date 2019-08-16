
// 開始按鈕
lf2.UI.startgame = {
  Setting: {
    name: 'startgame',
    file: { 'main': { src: 'UI/start.png', w: 227, h: 74 }, },
    scale: 1,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [113, 37], wait: 1, },
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
    'standing': { next: 999, pic: ['main', 0, 0], center: [178, 42], wait: 1, },
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
    'standing': { next: 999, pic: ['main', 0, 0], center: [144, 180], wait: 1, },
  }
};


// 打擊特效
lf2.UI.hit = {
  Setting: {
    name: 'hit',
    file: { 'main': { src: 'UI/hit.png', w: 192, h: 192 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 'flash2', pic: ['main', 0, 0], center: [96, 192], wait: 0, },
    'flash2': { next: 'flash3', pic: ['main', 1, 0], center: [96, 192], wait: 0, },
    'flash3': { next: 'flash4', pic: ['main', 2, 0], center: [96, 192], wait: 0, },
    'flash4': { next: 'flash5', pic: ['main', 3, 0], center: [96, 192], wait: 0, },
    'flash5': { next: 'flash6', pic: ['main', 4, 0], center: [96, 192], wait: 0, },
    'flash6': { next: 'flash7', pic: ['main', 0, 1], center: [96, 192], wait: 0, },
    'flash7': { next: 1000, pic: ['main', 1, 1], center: [96, 192], wait: 0, },
  }
};



// 血條
lf2.UI.hpbar = {
  Setting: {
    name: 'hpbar',
    file: { 'main': { src: 'UI/hpbar.png', w: 820, h: 258 }, },
    scale: 0.1,
    fixedPosition: true,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [410, 129], wait: 1, },
  }
};

// 血條
lf2.UI.hpbar2 = {
  Setting: {
    name: 'hpbar2',
    file: { 'main': { src: 'UI/hpbar2.png', w: 820, h: 258 }, },
    scale: 0.1,
    fixedPosition: true,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [410, 129], wait: 1, },
  }
};



lf2.UI.battleModeButton = {
  Setting: {
    name: 'battleModeButton',
    file: { 'main': { src: 'UI/battleModeButton.png', w: 265, h: 59 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [132, 29], wait: 1, },
  }
};


lf2.UI.shaoguanModeButton = {
  Setting: {
    name: 'shaoguanModeButton',
    file: { 'main': { src: 'UI/shaoguanModeButton.png', w: 265, h: 59 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 999, pic: ['main', 0, 0], center: [132, 29], wait: 1, },
  }
};