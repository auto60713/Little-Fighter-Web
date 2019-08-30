// LOGO
lf2.UI.logo = {
  setting: {
    name: 'logo',
    file: { 'logo': { deputy: 'png', w: 356, h: 84 }, },
    scale: 2,
    fixedPosition: [400, 150],
  },
  frame: {
    'standing': { next: 'standing', pic: ['logo', 0, 0], center: [178, 42], wait: 100, },
  }
};

// 開始按鈕
lf2.UI.startgame = {
  setting: {
    name: 'startgame',
    file: { 'start': { deputy: 'png', w: 227, h: 74 }, },
    scale: 1,
    fixedPosition: [400, 400],
  },
  frame: {
    'standing': { next: 'standing', pic: ['start', 0, 0], center: [113, 37], wait: 100, },
  }
};


// 格鬥模式按鈕
lf2.UI.battleModeButton = {
  setting: {
    name: 'battleModeButton',
    file: { 'battleModeButton': { deputy: 'png', w: 265, h: 59 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 'standing', pic: ['battleModeButton', 0, 0], center: [132, 29], wait: 100, },
  }
};


// 闖關模式按鈕
lf2.UI.shaoguanModeButton = {
  setting: {
    name: 'shaoguanModeButton',
    file: { 'shaoguanModeButton': { deputy: 'png', w: 265, h: 59 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 'standing', pic: ['shaoguanModeButton', 0, 0], center: [132, 29], wait: 100, },
  }
};



// 影子
lf2.UI.shadow = {
  setting: {
    name: 'shadow',
    file: { 's': { deputy: 'bmp', w: 37, h: 9 }, },
    scale: 1,
  },
  frame: {
    'standing': { next: 'standing', pic: ['s', 0, 0], center: [18, 4], wait: 100, },
  }
};

// p1
lf2.UI.p1 = {
  setting: {
    name: 'p1',
    file: { 'p1': { deputy: 'png', w: 14, h: 10 }, },
    scale: 1,
  },
  frame: {
    'standing': { next: 'standing', pic: ['p1', 0, 0], center: [7, 5], wait: 100, },
  }
};

// p2
lf2.UI.p2 = {
  setting: {
    name: 'p2',
    file: { 'p2': { deputy: 'png', w: 14, h: 10 }, },
    scale: 1,
  },
  frame: {
    'standing': { next: 'standing', pic: ['p2', 0, 0], center: [7, 5], wait: 100, },
  }
};

// 1P血條
lf2.UI.protagHPbar = {
  setting: {
    name: 'protagHPbar',
    file: {
      'protagHPbarVal': { deputy: 'png', w: 820, h: 258 },
      'protagHPbarArmor': { deputy: 'png', w: 820, h: 258 },
    },
    scale: 0.1,
    fixedPosition: [100, 100],
  },
  frame: {
    'standing': { next: 'standing', pic: ['protagHPbarVal', 0, 0], center: [410, 129], wait: 100, },
    'standing2': { next: 'standing2', pic: ['protagHPbarArmor', 0, 0], center: [410, 129], wait: 100, },
  }
};

// 2P血條
lf2.UI.otherHPbar = {
  setting: {
    name: 'otherHPbar',
    file: {
      'otherHPbarTank': { deputy: 'png', w: 70, h: 5 },
      'otherHPbarVal': { deputy: 'png', w: 70, h: 5 },
    },
    scale: 1,
  },
  frame: {
    'standing': { next: 'standing', pic: ['otherHPbarTank', 0, 0], center: [35, 2], wait: 100, },
    'standing2': { next: 'standing2', pic: ['otherHPbarVal', 0, 0], center: [35, 2], wait: 100, },
  }
};




// 選角手
lf2.UI.point = {
  setting: {
    name: 'point',
    file: { 'point': { deputy: 'png', w: 288, h: 360 }, },
    scale: 0.1,
  },
  frame: {
    'standing': { next: 'standing', pic: ['point', 0, 0], center: [0, 0], wait: 100, },
  }
};


// 打擊特效
lf2.UI.hit = {
  setting: {
    name: 'hit',
    file: { 'hit': { deputy: 'png', w: 192, h: 192 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 'flash2', pic: ['hit', 0, 0], center: [96, 192], wait: 0, },
    'flash2': { next: 'flash3', pic: ['hit', 1, 0], center: [96, 192], wait: 0, },
    'flash3': { next: 'flash4', pic: ['hit', 2, 0], center: [96, 192], wait: 0, },
    'flash4': { next: 'flash5', pic: ['hit', 3, 0], center: [96, 192], wait: 0, },
    'flash5': { next: 'flash6', pic: ['hit', 4, 0], center: [96, 192], wait: 0, },
    'flash6': { next: 'flash7', pic: ['hit', 0, 1], center: [96, 192], wait: 0, },
    'flash7': { next: 1000, pic: ['hit', 1, 1], center: [96, 192], wait: 0, },
  }
};


lf2.UI.ko = {
  setting: {
    name: 'ko',
    file: { 'ko': { deputy: 'png', w: 590, h: 267 }, },
    scale: 1,
    fixedPosition: [400, 300],
  },
  frame: {
    'standing': { next: 1000, pic: ['ko', 0, 0], center: [295, 133], wait: 300, },
  }
};