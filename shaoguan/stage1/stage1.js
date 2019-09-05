lf2.shaoguan.stage1 = {
  setting: {
    initmap: 'lf',
  },
  part: {

    // 第一張圖
    // 1-1
    'standing': {
      next: 'aaaaaa2', openx: 800,
      enemy: [
        { name: 'Firen', hp: 50, x: 200, y: 300, },
        { name: 'Henry', hp: 50, x: 300, y: 300, },
        { name: 'John', hp: 50, x: 400, y: 300, },
      ],
    },
    // 1-2
    'aaaaaa2': {
      next: 'bbbbb1', openx: 1600,
      enemy: [
        { name: 'Woody', hp: 50, x: 1200, y: 300, },
      ],
    },


    // 第二張圖
    // 2-1
    'bbbbb1': {
      next: 999, openx: 800, map: 'bc',
      enemy: [
        { name: 'Deep', hp: 50, x: 400, y: 250, boss: true, },
      ],
    },






  }
};


