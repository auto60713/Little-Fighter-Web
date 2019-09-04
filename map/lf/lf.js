lf2.map.lf = {
  setting: {
    file: {
      'forests': { deputy: 'bmp', w: 800, h: 70 },
      'forestm1': { deputy: 'png', w: 800, h: 104 },
      'forestt': { deputy: 'png', w: 253, h: 162 },
    },
    limit: { x: 1600, y: 300, },
    backgroundColor: '#104F10',
  },
  // 物件 (相當於人物的frame)
  component: {
    // 天空
    'forests': { next: 'forests', pic: ['forests', 0, 0], wait: 100, },

    // 山
    'forestm1': { next: 'forestm1', pic: ['forestm1', 0, 0], wait: 100, },

    // 樹
    'forestt': { next: 'forestt', pic: ['forestt', 0, 0], wait: 100, },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { nowframe: 'forests', x: 0, y: 0, loop: [800, 2], },
    { nowframe: 'forestm1', x: 0, y: 18, loop: [800, 2], },
    { nowframe: 'forestt', x: 0, y: 101, loop: [253, 20], },
  ],
}

