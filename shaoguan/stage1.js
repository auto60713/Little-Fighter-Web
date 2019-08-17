lf2.shaoguan.stage1 = {
  setting: {
    name: 'stage1',
    initmap: 'de',
  },
  part: {

    // 第一張圖
    // 1-1
    aaaaaa1: {
      next: 'aaaaaa2', openx: 800,
      enemy: [
        { name: 'Freeze', HP: 500, x: 200, y: 200, },
        { name: 'Freeze', HP: 500, x: 300, y: 200, },
        { name: 'Freeze', HP: 500, x: 400, y: 200, },
      ],
    },
    // 1-2
    aaaaaa2: {
      next: 'bbbbb1', openx: 1600, nextmap: 'de',
      enemy: [
        { name: 'Freeze', HP: 500, x: 400, y: 200, },
      ],
    },


    // 第二張圖
    // 2-1
    bbbbb1: {
      next: 'bbbbb2', openx: 800,
      enemy: [
        { name: 'Freeze', HP: 500, x: 200, y: 200, },
        { name: 'Freeze', HP: 500, x: 300, y: 200, },
      ],
    },
    // 2-2
    bbbbb2: {
      next: 999, openx: 1600,
      enemy: [
        { name: 'Freeze', HP: 500, x: 400, y: 200, boss: true, },
      ],
    },







  }
};


