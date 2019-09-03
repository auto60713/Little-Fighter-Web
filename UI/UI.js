
// LOGO
lf2.UI.logo = {
  setting: {
    file: { 'logo': { deputy: 'png', w: 356, h: 84 }, },
    fixedPosition: [400, 150],
  },
  frame: {
    'standing': { next: 'standing', pic: ['logo', 0, 0], center: [178, 42], wait: 100, },
  }
};

// 開始按鈕
lf2.UI.startgame = {
  setting: {
    file: { 'startgame': { deputy: 'png', w: 227, h: 74 }, },
    fixedPosition: [400, 400],
  },
  frame: {
    'standing': { next: 'standing', pic: ['startgame', 0, 0], center: [113, 37], wait: 100, },
  }
};


// 影子
lf2.UI.shadow = {
  setting: {
    file: { 'shadow': { deputy: 'bmp', w: 37, h: 9 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['shadow', 0, 0], center: [18, 4], wait: 100, },
  }
};

// p1
lf2.UI.p1 = {
  setting: {
    file: { 'p1': { deputy: 'png', w: 14, h: 10 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['p1', 0, 0], center: [7, 5], wait: 100, },
  }
};

// p2
lf2.UI.p2 = {
  setting: {
    file: { 'p2': { deputy: 'png', w: 14, h: 10 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['p2', 0, 0], center: [7, 5], wait: 100, },
  }
};

// 1P血條
lf2.UI.protaghpbar = {
  setting: {
    file: {
      'protaghpbarVal': { deputy: 'png', w: 820, h: 258 },
      'protaghpbarArmor': { deputy: 'png', w: 820, h: 258 },
    },
    fixedPosition: [100, 100],
  },
  frame: {
    'standing': { next: 'standing', pic: ['protaghpbarVal', 0, 0], center: [410, 129], wait: 100, },
    'standing2': { next: 'standing2', pic: ['protaghpbarArmor', 0, 0], center: [410, 129], wait: 100, },
  }
};

// 2P血條
lf2.UI.otherhpbar = {
  setting: {
    file: {
      'otherhpbarTank': { deputy: 'png', w: 70, h: 5 },
      'otherhpbarVal': { deputy: 'png', w: 70, h: 5 },
    },
  },
  frame: {
    'standing': { next: 'standing', pic: ['otherhpbarTank', 0, 0], center: [35, 2], wait: 100, },
    'standing2': { next: 'standing2', pic: ['otherhpbarVal', 0, 0], center: [35, 2], wait: 100, },
  }
};




// 選角手
lf2.UI.point = {
  setting: {
    file: { 'point': { deputy: 'png', w: 288, h: 360 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['point', 0, 0], center: [0, 0], wait: 100, },
  }
};

// 格鬥模式按鈕
lf2.UI.mapSelection = {
  setting: {
    file: { 'mapSelection': { deputy: 'png', w: 265, h: 59 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['mapSelection', 0, 0], center: [132, 29], wait: 100, },
  }
};

// 闖關模式按鈕
lf2.UI.shaoguanSelection = {
  setting: {
    file: { 'shaoguanSelection': { deputy: 'png', w: 265, h: 59 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['shaoguanSelection', 0, 0], center: [132, 29], wait: 100, },
  }
};



// 打擊特效
lf2.UI.hit = {
  setting: {
    file: { 'hit': { deputy: 'png', w: 192, h: 192 }, },
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
    file: { 'ko': { deputy: 'png', w: 590, h: 267 }, },
    fixedPosition: [400, 300],
  },
  frame: {
    'standing': { next: 1000, pic: ['ko', 0, 0], center: [295, 133], wait: 300, },
  }
};