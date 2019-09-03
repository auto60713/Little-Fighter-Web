lf2.shaoguan.stage1 = {
  setting: {
    name: 'stage1',
    initmap: 'lf',
    file: {},
  },
  part: {

    // 第一張圖
    // 1-1
    'standing': {
      next: 'aaaaaa2', openx: 800,
      enemy: [
        { name: 'Freeze', HP: 500, x: 200, y: 300, },
        { name: 'Henry', HP: 500, x: 300, y: 300, },
        { name: 'John', HP: 500, x: 400, y: 300, },
      ],
    },
    // 1-2
    'aaaaaa2': {
      next: 'bbbbb1', openx: 1600,
      enemy: [
        { name: 'Davis', HP: 500, x: 400, y: 300, },
      ],
    },


    // 第二張圖
    // 2-1
    'bbbbb1': {
      next: 999, openx: 800, map: 'hkc',
      enemy: [
        { name: 'Deep', HP: 1000, x: 400, y: 250, boss: true, },
      ],
    },






  }
};


