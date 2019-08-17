
// 開始按鈕
lf2.UI.startgame = {
  Setting: {
    name: 'startgame',
    file: { 'start': { deputy: 'png', w: 227, h: 74 }, },
    scale: 1,
  },
  frame: {
    'standing': { next: 999, pic: ['start', 0, 0], center: [113, 37], wait: 1, },
  }
};


// LOGO
lf2.UI.logo = {
  Setting: {
    name: 'logo',
    file: { 'logo': { deputy: 'png', w: 356, h: 84 }, },
    scale: 2,
  },
  frame: {
    'standing': { next: 999, pic: ['logo', 0, 0], center: [178, 42], wait: 1, },
  }
};


// 選角手
lf2.UI.point = {
  Setting: {
    name: 'point',
    file: { 'point': { deputy: 'png', w: 288, h: 360 }, },
    scale: 0.1,
  },
  frame: {
    'standing': { next: 999, pic: ['point', 0, 0], center: [0, 0], wait: 1, },
  }
};


// 打擊特效
lf2.UI.hit = {
  Setting: {
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



// 血條
lf2.UI.hpbar = {
  Setting: {
    name: 'hpbar',
    file: { 'hpbar': { deputy: 'png', w: 820, h: 258 }, },
    scale: 0.1,
    fixedPosition: true,
  },
  frame: {
    'standing': { next: 999, pic: ['hpbar', 0, 0], center: [410, 129], wait: 1, },
  }
};

// 血條
lf2.UI.hpbar2 = {
  Setting: {
    name: 'hpbar2',
    file: { 'hpbar2': { deputy: 'png', w: 820, h: 258 }, },
    scale: 0.1,
    fixedPosition: true,
  },
  frame: {
    'standing': { next: 999, pic: ['hpbar2', 0, 0], center: [410, 129], wait: 1, },
  }
};



lf2.UI.battleModeButton = {
  Setting: {
    name: 'battleModeButton',
    file: { 'battleModeButton': { deputy: 'png', w: 265, h: 59 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 999, pic: ['battleModeButton', 0, 0], center: [132, 29], wait: 1, },
  }
};


lf2.UI.shaoguanModeButton = {
  Setting: {
    name: 'shaoguanModeButton',
    file: { 'shaoguanModeButton': { deputy: 'png', w: 265, h: 59 }, },
    scale: 0.5,
  },
  frame: {
    'standing': { next: 999, pic: ['shaoguanModeButton', 0, 0], center: [132, 29], wait: 1, },
  }
};