
// LOGO
lf2.UI.logo = {
  setting: {
    file: { 'logo': { w: 423, h: 130 }, },
    fixedPosition: [400, 200],
  },
  frame: {
    'standing': { next: 'standing', pic: ['logo', 0, 0], center: [211, 65], wait: 100, },
  }
};

// 開始按鈕
lf2.UI.startgame = {
  setting: {
    file: { 'startgame': { w: 150, h: 60 }, },
    fixedPosition: [400, 400],
  },
  frame: {
    'standing': { next: 'standing', pic: ['startgame', 0, 0], center: [75, 30], wait: 100, },
  }
};


// 標題
lf2.UI.title = {
  setting: {
    file: {
      'title': { w: 300, h: 90 },
    },
  },
  frame: {
    'standing': { next: 'standing', pic: ['title', 10, 0], center: [0, 0], wait: 100, },

    'character': { next: 'character', pic: ['title', 0, 0], center: [0, 0], wait: 100, },
    'standing2': { next: 'standing2', pic: ['title', 1, 0], center: [0, 0], wait: 100, },
    'map': { next: 'map', pic: ['title', 2, 0], center: [0, 0], wait: 100, },
    'shaoguan': { next: 'shaoguan', pic: ['title', 3, 0], center: [0, 0], wait: 100, },
  }
};


// 選角手
lf2.UI.point = {
  setting: {
    file: { 'point': { w: 29, h: 36 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['point', 0, 0], center: [14, 18], wait: 100, },
  }
};


// 模式按鈕
lf2.UI.button = {
  setting: {
    file: { 
      'mapSelection': { w: 170, h: 170 }, 
      'shaoguanSelection': { w: 170, h: 170 },
    },
  },
  frame: {
    'standing': { next: 'standing', pic: ['mapSelection', 0, 0], center: [85, 85], wait: 100, },
    'standing2': { next: 'standing2', pic: ['shaoguanSelection', 0, 0], center: [85, 85], wait: 100, },
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

// 身分
lf2.UI.identity = {
  setting: {
    file: { 'identity': { w: 28, h: 10 }, },
  },
  frame: {
    'standing': { next: 'standing', pic: ['identity', 0, 0], center: [14, 5], wait: 100, },
    'standing2': { next: 'standing2', pic: ['identity', 1, 0], center: [14, 5], wait: 100, },
    'com': { next: 'com', pic: ['identity', 3, 0], center: [14, 5], wait: 100, },
  }
};

// 1P血條
lf2.UI.protaghpbar = {
  setting: {
    file: {
      'protaghpbar': { w: 125, h: 40 },
    },
    fixedPosition: [30, 50],
  },
  frame: {
    'standing': { next: 'standing', pic: ['protaghpbar', 0, 0], center: [0, 0], wait: 100, },
    'standing2': { next: 'standing2', pic: ['protaghpbar', 1, 0], center: [0, 0], wait: 100, },
  }
};

// 2P血條
lf2.UI.otherhpbar = {
  setting: {
    file: {
      'otherhpbar': { w: 70, h: 5 },
    },
  },
  frame: {
    'standing': { next: 'standing', pic: ['otherhpbar', 0, 0], center: [35, 2], wait: 100, },
    'standing2': { next: 'standing2', pic: ['otherhpbar', 1, 0], center: [35, 2], wait: 100, },
  }
};






// 打擊特效
lf2.UI.hit = {
  setting: {
    file: { 'hit': { w: 192, h: 192 }, },
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
    file: { 'ko': { w: 590, h: 267 }, },
    fixedPosition: [400, 300],
  },
  frame: {
    'standing': { next: 1000, pic: ['ko', 0, 0], center: [295, 133], wait: 300, },
  }
};